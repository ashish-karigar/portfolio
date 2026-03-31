import { useState } from 'react'
import logoVideo from '../assets/me.MOV'

function Navbar({ theme, setTheme }) {
  const isDark = theme === 'dark'
  const [isPulling, setIsPulling] = useState(false)

  const toggleTheme = () => {
    setIsPulling(true)
    setTheme(isDark ? 'light' : 'dark')

    setTimeout(() => {
      setIsPulling(false)
    }, 180)
  }
  
    return (
      <header className="sticky top-0 z-50 w-full overflow-visible border-b border-zinc-200/70 bg-white/65 backdrop-blur-xl dark:border-zinc-800/70 dark:bg-zinc-950/65">
        <div className="mx-auto flex max-w-6xl items-start justify-between px-6 py-5">
        <a
  href="#"
  className="relative flex h-6 items-center text-sm font-semibold uppercase tracking-[0.18em]"
>
  <video
    src={logoVideo}
    autoPlay
    loop
    muted
    playsInline
    className="absolute left-0 top-1/2 h-16 w-16 -translate-y-[45%] object-contain"
  />
  <span className="pl-[60px] leading-none">Ashish Karigar</span>
</a>
  
          <div className="flex items-start gap-6">
            <nav className="hidden gap-6 pt-1 text-sm text-zinc-600 dark:text-zinc-300 md:flex">
              <a href="#about" className="transition hover:text-black dark:hover:text-white">
                About
              </a>
              <a href="#toolkit" className="transition hover:text-black dark:hover:text-white">
                Skills
              </a>
              <a href="#projects" className="transition hover:text-black dark:hover:text-white">
                Projects
              </a>
              <a href="#contact" className="transition hover:text-black dark:hover:text-white">
                Contact
              </a>
            </nav>
  
            <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                aria-pressed={isDark}
                className="group relative -mb-10 flex w-8 flex-col items-center overflow-visible"
                >
                    <span
                        className={`w-px bg-zinc-400 transition-all duration-150 dark:bg-zinc-600 ${
                        isPulling ? 'h-12' : 'h-10'
                        }`}
                    />

                    <span
                        className={`relative mt-1 flex h-6 w-6 items-center justify-center rounded-full border transition-all duration-150 ${
                        isPulling ? 'translate-y-2' : 'translate-y-0'
                        } ${
                        isDark
                            ? 'border-zinc-500 bg-zinc-800 text-zinc-300'
                            : 'border-amber-300 bg-amber-100 text-amber-500 shadow-[0_0_20px_rgba(251,191,36,0.45)]'
                        }`}
                    >
                        <span className="absolute -top-1.5 h-1.5 w-2 rounded-t-full border border-b-0 border-current opacity-70" />
                        <span className="-mt-[1px] flex h-3.5 w-3.5 items-center justify-center rounded-full bg-current opacity-90">
                        <span className={isDark ? 'text-[10px] text-zinc-900' : 'text-[10px] text-white'}>
                            {isDark ? '☾' : '☀'}
                        </span>
                    </span>
                </span>
            </button>
          </div>
        </div>
      </header>
    )
  }
  
  export default Navbar