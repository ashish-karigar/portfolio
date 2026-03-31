import ContactBlueprintRain from './ContactBlueprintRain'
import ContactDriveBanner from './ContactDriveBanner'

function Contact({ theme }) {
  const contactLinks = [
    {
      label: 'Email',
      value: 'karigarashish@gmail.com',
      href: 'karigarashish@gmail.com',
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/ashishkarigar',
      href: 'https://linkedin.com/in/ashishkarigar',
    },
    {
      label: 'GitHub',
      value: 'github.com/ashish-karigar',
      href: 'https://github.com/ashish-karigar',
    },
  ]

  return (
    <section id="contact" className="relative overflow-hidden py-24">
      <div className="absolute inset-0">
        <ContactBlueprintRain theme={theme} />
        <div className="absolute inset-0 bg-white/70 dark:bg-zinc-950/72" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-accent-light)] dark:text-[var(--color-accent-dark)]">
            Contact
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Let’s connect.
          </h2>

          <p className="mt-6 text-base leading-8 text-zinc-600 dark:text-zinc-300 sm:text-lg">
            I’m always open to conversations around software development, data,
            machine learning, and meaningful product ideas.
          </p>
        </div>

        <div className="mt-14 max-w-3xl space-y-4">
          {contactLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
              className="group flex items-center justify-between rounded-2xl border border-zinc-200 bg-white/40 px-5 py-4 backdrop-blur-[2px] transition duration-300 hover:border-zinc-300 hover:bg-zinc-50/50 dark:border-zinc-800 dark:bg-zinc-900/20 dark:hover:border-zinc-700 dark:hover:bg-zinc-900/30"
            >
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                  {item.label}
                </p>
                <p className="mt-1 text-base font-medium text-zinc-800 transition group-hover:text-[var(--color-accent-light)] dark:text-zinc-200 dark:group-hover:text-[var(--color-accent-dark)]">
                  {item.value}
                </p>
              </div>

              <span className="text-sm text-zinc-400 transition group-hover:text-zinc-700 dark:text-zinc-500 dark:group-hover:text-zinc-200">
                ↗
              </span>
            </a>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full">
        <ContactDriveBanner />
        </div>
    </section>
  )
}

export default Contact