function Projects() {
    const projects = [
        {
          title: 'VitalSphere',
          description:
            'A dual-portal health platform designed for patient and provider workflows, with consent handling and predictive analytics features.',
          tech: ['Flutter', 'Angular', 'Flask', 'Supabase', 'PostgreSQL'],
          linkLabel: 'View Project',
        },
        {
          title: 'Rodent Behaviour Analysis',
          description:
            'A computer vision pipeline for analyzing T-maze rodent videos using zone detection, pose tracking, segmentation, and behavioral metrics.',
          tech: ['Python', 'OpenCV', 'YOLO', 'DeepLabCut', 'Pandas'],
          linkLabel: 'View Project',
        },
        {
          title: 'MyLens External Camera App',
          description:
            'A mobile application for connecting to and recording from an external USB-C camera with native Android integration.',
          tech: ['Flutter', 'Android', 'Kotlin', 'USB-C', 'Camera Integration'],
          linkLabel: 'View Project',
        },
        {
          title: 'MarkTech Uplink',
          description:
            'A marketing-focused platform built to streamline communication, workflow visibility, and connected digital operations across teams.',
          tech: ['React', 'Flask', 'SQL', 'REST APIs'],
          linkLabel: 'View Project',
        },
        {
          title: 'CamComposite',
          description:
            'A desktop application for combining multiple camera feeds into polished layouts and routing them into virtual camera workflows.',
          tech: ['Python', 'OpenCV', 'Tkinter', 'OBS', 'Virtual Camera'],
          linkLabel: 'View Project',
        },
        {
            title: 'IRIS',
            description:
              'A desktop application for combining multiple camera feeds into polished layouts and routing them into virtual camera workflows.',
            tech: ['Python', 'OpenCV', 'Tkinter', 'OBS', 'Virtual Camera'],
            linkLabel: 'View Project',
          },
      ]
  
    return (
      <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-accent-light)] dark:text-[var(--color-accent-dark)]">
            Projects
          </p>
  
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Selected work.
          </h2>
  
          <p className="mt-6 text-base leading-8 text-zinc-600 dark:text-zinc-300 sm:text-lg">
            A few projects that reflect my interest in software engineering,
            applied machine learning, and building useful products.
          </p>
        </div>
  
        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group rounded-3xl border border-zinc-200 bg-white/60 p-6 transition duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-zinc-700"
            >
              <h3 className="text-2xl font-semibold tracking-tight text-[var(--color-accent-light)] dark:text-[var(--color-accent-dark)]">
                {project.title}
              </h3>
  
              <p className="mt-4 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                {project.description}
              </p>
  
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-zinc-200/70 bg-zinc-100/70 px-3 py-1.5 text-xs text-zinc-500 transition duration-200 group-hover:text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900/80 dark:text-zinc-400 dark:group-hover:text-zinc-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
  
              <button className="mt-8 text-sm font-medium text-zinc-700 transition hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-zinc-100">
                {project.linkLabel} →
              </button>
            </article>
          ))}
        </div>
      </section>
    )
  }
  
  export default Projects