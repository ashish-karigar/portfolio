function FooterRoad() {
    return (
      <footer className="relative overflow-hidden py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="relative h-28">
            <div className="absolute bottom-0 left-0 h-px w-full bg-zinc-300 dark:bg-zinc-700" />
  
            <div className="absolute bottom-3 left-0 w-full overflow-hidden">
              <div className="animate-[drive_18s_linear_infinite] flex items-center gap-3 whitespace-nowrap">
                <div className="relative h-10 w-16 shrink-0">
                  <div className="absolute bottom-3 left-2 h-4 w-10 rounded-md border border-zinc-500 bg-zinc-200 dark:border-zinc-400 dark:bg-zinc-800" />
                  <div className="absolute bottom-5 left-5 h-3 w-5 rounded-t-md border border-zinc-500 bg-zinc-100 dark:border-zinc-400 dark:bg-zinc-700" />
                  <div className="absolute bottom-0 left-3 h-3 w-3 rounded-full border border-zinc-600 bg-zinc-900 dark:border-zinc-300 dark:bg-zinc-200" />
                  <div className="absolute bottom-0 right-2 h-3 w-3 rounded-full border border-zinc-600 bg-zinc-900 dark:border-zinc-300 dark:bg-zinc-200" />
                </div>
  
                <div className="relative shrink-0">
                  <div className="h-px w-6 bg-zinc-400 dark:bg-zinc-500" />
                </div>
  
                <div className="shrink-0 rounded-md border border-zinc-300 bg-white/70 px-4 py-2 text-sm italic text-zinc-700 backdrop-blur-[2px] dark:border-zinc-700 dark:bg-zinc-900/60 dark:text-zinc-300">
                    designed by @ashish.karigar
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
  
  export default FooterRoad