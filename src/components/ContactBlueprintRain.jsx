import { useEffect, useRef } from 'react'

function ContactBlueprintRain({ theme }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    let animationFrameId
    let items = []

    const getSize = () => {
      const parent = canvas.parentElement
      return {
        width: parent.clientWidth,
        height: parent.clientHeight,
      }
    }

    let width = 0
    let height = 0

    const createItems = () => {
      const count = width < 568 ? 14 : 22

      items = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height - height,
        size: 26 + Math.random() * 30,
        speed: 0.25 + Math.random() * 0.45,
        drift: (Math.random() - 0.5) * 0.25,
        rotation: (Math.random() - 0.5) * 0.08,
        type: Math.random() > 0.25 ? 'mail' : 'panel',
      }))
    }

    const resizeCanvas = () => {
      const size = getSize()
      width = size.width
      height = size.height
      canvas.width = width
      canvas.height = height
      createItems()
    }

    const getStroke = (alpha) => {
        return theme === 'dark'
          ? `rgba(56, 189, 248, ${alpha})`
          : `rgba(67, 56, 202, ${alpha})`
      }

    const drawEnvelope = (x, y, size, alpha, rotation = 0) => {
      const w = size
      const h = size * 0.68

      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(rotation)

      ctx.strokeStyle = getStroke(alpha)
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.rect(-w / 2, -h / 2, w, h)
      ctx.stroke()

      ctx.beginPath()
      ctx.moveTo(-w / 2, -h / 2)
      ctx.lineTo(0, 0)
      ctx.lineTo(w / 2, -h / 2)
      ctx.stroke()

      ctx.beginPath()
      ctx.moveTo(-w / 2, h / 2)
      ctx.lineTo(-w * 0.08, h * 0.02)
      ctx.lineTo(w / 2, h / 2)
      ctx.stroke()

      ctx.restore()
    }

    const drawPanel = (x, y, size, alpha, rotation = 0) => {
      const w = size
      const h = size * 0.78

      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(rotation)

      ctx.strokeStyle = getStroke(alpha)
      ctx.lineWidth = 1

      ctx.beginPath()
      ctx.rect(-w / 2, -h / 2, w, h)
      ctx.stroke()

      ctx.beginPath()
      ctx.moveTo(-w / 2, -h * 0.18)
      ctx.lineTo(w / 2, -h * 0.18)
      ctx.stroke()

      ctx.beginPath()
      ctx.moveTo(-w * 0.3, h * 0.08)
      ctx.lineTo(w * 0.3, h * 0.08)
      ctx.moveTo(-w * 0.3, h * 0.24)
      ctx.lineTo(w * 0.2, h * 0.24)
      ctx.stroke()

      ctx.restore()
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      items.forEach((item) => {
        const alpha = theme === 'dark' ? 0.8 : 0.8

        if (item.type === 'mail') {
          drawEnvelope(item.x, item.y, item.size, alpha, item.rotation)
        } else {
          drawPanel(item.x, item.y, item.size, alpha * 0.85, item.rotation)
        }

        item.y += item.speed
        item.x += item.drift

        if (item.y - item.size > height + 40) {
          item.y = -40 - Math.random() * 120
          item.x = Math.random() * width
          item.size = 26 + Math.random() * 30
          item.speed = 0.25 + Math.random() * 0.45
          item.drift = (Math.random() - 0.5) * 0.25
          item.rotation = (Math.random() - 0.5) * 0.08
          item.type = Math.random() > 0.25 ? 'mail' : 'panel'
        }
      })

      animationFrameId = requestAnimationFrame(draw)
    }

    resizeCanvas()
    draw()

    window.addEventListener('resize', resizeCanvas)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [theme])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  )
}

export default ContactBlueprintRain