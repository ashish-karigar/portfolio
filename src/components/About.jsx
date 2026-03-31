import CadGridBackground from './CadGridBackground'

function About() {
  const timeline = [
    {
      period: '2024 — Present',
      organization: 'Penn State University',
      roles: [
        {
          title: 'Graduate Research Assistant',
          description:
            'Working on research-focused software and computer vision systems, with an emphasis on building practical analytical tools and project workflows.',
        },
        {
          title: 'Graduate Wage Assistant',
          description:
            'Supporting university data and reporting work through analysis, organization, and process-focused technical tasks.',
        },
      ],
    },
    {
      period: 'Oct 2021 — Jul 2024',
      organization: 'Tata Consultancy Services (TCS)',
      roles: [
        {
          title: 'Full-Stack Software Developer',
          description:
            'Built enterprise applications for banking clients across the full stack, working with Angular, Python, SQL, and .NET. My work focused on improving internal workflows, reducing manual effort, and making systems easier for teams to use and manage.',
        },
      ],
    },
  ]

  return (
    <section id="about" className="relative overflow-hidden px-6 py-24">
      <CadGridBackground />

        <div className='relative z-10 mx-auto max-w-6xl px-6'>
        <div className="relative z-10 max-w-3xl">
        <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-accent-light)] dark:text-[var(--color-accent-dark)]">
          About
        </p>

        <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          A little about me.
        </h2>

        <p className="mt-6 text-base leading-8 text-zinc-600 dark:text-zinc-300 sm:text-lg">
          I’m a software developer with experience in full-stack development,
          data-focused systems, and applied machine learning. I like building
          products that are clear, useful, and thoughtfully designed.
        </p>
      </div>

      <div className="relative z-10 mt-16 max-w-4xl">
        <div className="relative border-l border-zinc-300 pl-8 dark:border-zinc-700">
          {timeline.map((item) => (
            <div key={item.organization} className="relative mb-14 last:mb-0">
              <span className="absolute -left-[41px] top-1 flex h-5 w-5 items-center justify-center rounded-full border border-zinc-300 bg-white dark:border-zinc-700 dark:bg-zinc-950">
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-accent-light)] dark:bg-[var(--color-accent-dark)]" />
              </span>

              <div className="rounded-3xl border border-zinc-300/50 bg-zinc-100/10 p-6 backdrop-blur-[1px] dark:border-white/8 dark:bg-transparent">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                  {item.period}
                </p>

                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-[var(--color-accent-light)] dark:text-[var(--color-accent-dark)]">
                  {item.organization}
                </h3>

                <div className="mt-6 space-y-6">
                  {item.roles.map((role) => (
                    <div key={role.title}>
                      <h4 className="text-lg font-semibold">{role.title}</h4>
                      <p className="mt-2 max-w-2xl leading-7 text-zinc-600 dark:text-zinc-300">
                        ~ {role.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
        </div>
    </section>
  )
}

export default About