import NetworkBackground from './NetworkBackground'

function Hero({ theme }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <NetworkBackground theme={theme} />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-32">
        <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-accent-light)] dark:text-[var(--color-accent-dark)]">
          Software Developer
        </p>

        <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-tight tracking-tight sm:text-6xl md:text-7xl">
          Building clean & thoughtful digital experiences.
        </h1>

        <p className="mt-8 max-w-2xl text-base leading-8 text-zinc-600 dark:text-zinc-300 sm:text-lg">
          I’m <b className='text-[var(--color-accent-light)] dark:text-[var(--color-accent-dark)]'>Ashish.</b> I work across software, data, and machine learning, with a
          focus on creating products that feel simple, useful, and well-crafted.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-full bg-[var(--color-accent-light)] px-5 py-3 text-sm font-medium text-white transition hover:opacity-90 dark:bg-[var(--color-accent-dark)] dark:text-zinc-950"
          >
            View Work
          </a>

          <a
            href="#contact"
            className="rounded-full border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-900 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-900"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero