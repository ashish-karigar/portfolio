function SunIcon() {
    return (
      <svg
        className="h-4 w-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="m4.93 4.93 1.41 1.41" />
        <path d="m17.66 17.66 1.41 1.41" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="m6.34 17.66-1.41 1.41" />
        <path d="m19.07 4.93-1.41 1.41" />
      </svg>
    )
  }
  
  function MoonIcon() {
    return (
      <svg
        className="h-4 w-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3c0 0-1.21 5.79 2.29 9.29S21 12.79 21 12.79z" />
      </svg>
    )
  }
  
  function Navbar({ theme, setTheme }) {
    const isDark = theme === 'dark'
  
    const toggleTheme = () => {
      setTheme(isDark ? 'light' : 'dark')
    }
  
    return (
      <header className="sticky top-0 z-50 w-full border-b border-zinc-200/70 bg-white/65 backdrop-blur-xl dark:border-zinc-800/70 dark:bg-zinc-950/65">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="#" className="text-sm font-semibold tracking-[0.18em] uppercase">
            Ashish Karigar
          </a>
  
          <div className="flex items-center gap-6">
            <nav className="hidden gap-6 text-sm text-zinc-600 dark:text-zinc-300 md:flex">
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
              className="relative inline-flex h-10 w-20 items-center rounded-full border border-zinc-300 bg-zinc-100 px-1 transition-all duration-300 dark:border-zinc-700 dark:bg-zinc-900"
            >
              <span
                className={`absolute flex h-8 w-8 items-center justify-center rounded-full shadow-sm transition-all duration-300 ${
                  isDark
                    ? 'translate-x-10 bg-zinc-800 text-zinc-100'
                    : 'translate-x-0 bg-white text-amber-500'
                }`}
              >
                {isDark ? <MoonIcon /> : <SunIcon />}
              </span>
  
              <span className="flex w-full items-center justify-between px-2 text-xs font-medium text-zinc-500 dark:text-zinc-400">
                <span>☀</span>
                <span>☾</span>
              </span>
            </button>
          </div>
        </div>
      </header>
    )
  }
  
  export default Navbar