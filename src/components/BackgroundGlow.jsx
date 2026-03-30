function BackgroundGlow() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.10),transparent_35%)] dark:bg-[radial-gradient(circle_at_top,rgba(103,232,249,0.10),transparent_35%)]" />

      <div className="absolute left-[-8rem] top-20 h-72 w-72 animate-[float_10s_ease-in-out_infinite] rounded-full bg-[var(--color-accent-light)]/10 blur-3xl dark:bg-[var(--color-accent-dark)]/10" />

      <div className="absolute bottom-10 right-[-6rem] h-80 w-80 animate-[float_14s_ease-in-out_infinite] rounded-full bg-fuchsia-400/10 blur-3xl dark:bg-violet-500/10" />

      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="absolute inset-0 bg-white/40 dark:bg-black/20" />
    </div>
  )
}

export default BackgroundGlow