import { useEffect, useRef } from 'react'

function NetworkBackground({ theme }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    let animationFrameId
    let particles = []
    let mouse = { x: null, y: null, radius: 140 }

    const getSize = () => {
      const parent = canvas.parentElement
      return {
        width: parent.clientWidth,
        height: parent.clientHeight,
      }
    }

    let width = 0
    let height = 0

    const getParticleCount = () => (width < 768 ? 40 : 70)
    const getLinkDistance = () => (width < 768 ? 85 : 115)

    const colors =
      theme === 'dark'
        ? {
            particle: 'rgba(125, 211, 252, 0.85)',
            line: 'rgba(103, 232, 249, 0.18)',
            glow: 'rgba(34, 211, 238, 0.08)',
          }
        : {
            particle: 'rgba(79, 70, 229, 0.75)',
            line: 'rgba(99, 102, 241, 0.16)',
            glow: 'rgba(129, 140, 248, 0.08)',
          }

    const resizeCanvas = () => {
      const size = getSize()
      width = size.width
      height = size.height

      canvas.width = width
      canvas.height = height

      initParticles()
    }

    class Particle {
      constructor(x, y, vx, vy, radius) {
        this.x = x
        this.y = y
        this.vx = vx
        this.vy = vy
        this.radius = radius
      }

      update() {
        this.x += this.vx
        this.y += this.vy

        if (this.x < 0 || this.x > width) this.vx *= -1
        if (this.y < 0 || this.y > height) this.vy *= -1

        if (mouse.x !== null && mouse.y !== null) {
          const dx = this.x - mouse.x
          const dy = this.y - mouse.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance > 0 && distance < mouse.radius) {
            const force = (mouse.radius - distance) / mouse.radius
            this.x += (dx / distance) * force * 1.5
            this.y += (dy / distance) * force * 1.5
          }
        }
      }

      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = colors.particle
        ctx.shadowBlur = theme === 'dark' ? 10 : 5
        ctx.shadowColor = colors.particle
        ctx.fill()
        ctx.shadowBlur = 0
      }
    }

    const initParticles = () => {
      particles = []
      const count = getParticleCount()

      for (let i = 0; i < count; i++) {
        const x = Math.random() * width
        const y = Math.random() * height
        const vx = (Math.random() - 0.5) * 0.35
        const vy = (Math.random() - 0.5) * 0.35
        const radius = Math.random() * 1.6 + 1
        particles.push(new Particle(x, y, vx, vy, radius))
      }
    }

    const connectParticles = () => {
      const linkDistance = getLinkDistance()

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < linkDistance) {
            const opacity = 1 - distance / linkDistance
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle =
              theme === 'dark'
                ? `rgba(103, 232, 249, ${opacity * 0.22})`
                : `rgba(99, 102, 241, ${opacity * 0.16})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      }
    }

    const drawGlow = () => {
      if (mouse.x === null || mouse.y === null) return

      const gradient = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        0,
        mouse.x,
        mouse.y,
        180
      )

      gradient.addColorStop(0, colors.glow)
      gradient.addColorStop(1, 'transparent')

      ctx.beginPath()
      ctx.fillStyle = gradient
      ctx.arc(mouse.x, mouse.y, 180, 0, Math.PI * 2)
      ctx.fill()
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height)

      drawGlow()

      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      connectParticles()

      animationFrameId = requestAnimationFrame(animate)
    }

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }

    const handleMouseLeave = () => {
      mouse.x = null
      mouse.y = null
    }

    resizeCanvas()
    animate()

    window.addEventListener('resize', resizeCanvas)
    canvas.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', resizeCanvas)
      canvas.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [theme])

  return (
    <canvas
      ref={canvasRef}
      className="h-full w-full"
      aria-hidden="true"
    />
  )
}

export default NetworkBackground