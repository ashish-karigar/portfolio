function Toolkit() {
    const toolkitGroups = [
        {
          title: 'Languages & Frameworks',
          items: [
            'Python',
            'SQL',
            'JavaScript',
            'TypeScript',
            'React',
            'Angular',
            'Django',
            'Flask',
            'REST APIs',
          ],
        },
        {
          title: 'Databases & Backend',
          items: [
            'Microsoft SQL Server',
            'PostgreSQL',
            'Azure SQL Database',
            'Supabase',
            'Firebase',
          ],
        },
        {
          title: 'Computer Vision & ML',
          items: [
            'OpenCV',
            'scikit-learn',
            'NumPy',
            'DeepLabCut',
            'PyTorch',
            'TensorFlow',
            'Pandas',
          ],
        },
        {
          title: 'Tools & Platforms',
          items: [
            'Git',
            'GitHub',
            'Docker',
            'Azure DevOps',
            'CI/CD Pipelines',
            'AWS',
            'VS Code',
            'PyCharm',
            'Postman',
            'Android Studio',
          ],
        },
        {
          title: 'Methodologies',
          items: ['Agile', 'Scrum'],
        },
      ]
  
    return (
      <section id="toolkit" className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-accent-light)] dark:text-[var(--color-accent-dark)]">
            Toolkit
          </p>
  
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Technologies I work with
          </h2>
  
          <p className="mt-6 text-base leading-8 text-zinc-600 dark:text-zinc-300 sm:text-lg">
            A curated stack across software development, backend systems, mobile
            apps, analytics, and machine learning.
          </p>
        </div>
  
        <div className="mt-16 space-y-12">
          {toolkitGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-200">
                {group.title}
              </h3>
  
              <div className="mt-4 border-t border-zinc-200 dark:border-zinc-800" />
  
              <div className="mt-5 flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-zinc-200/70 bg-zinc-100/70 px-4 py-2 text-xs text-zinc-500 transition duration-200 hover:border-zinc-300 hover:bg-zinc-200 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900/80 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }
  
  export default Toolkit