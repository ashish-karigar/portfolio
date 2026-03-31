import carSvg from '../assets/sport-car.svg'

function ContactDriveBanner() {
  return (
    <div className="relative h-5 overflow-hidden">
      <div className="absolute bottom-0 left-0 flex items-end gap-0 animate-[driveBanner_18s_linear_infinite]">
        <div className="mb-[4px] rounded-sm border border-zinc-300/70 bg-white/60 px-2 py-[2px] text-[10px] leading-none text-zinc-700 backdrop-blur-[2px] dark:border-zinc-700/70 dark:bg-zinc-900/50 dark:text-zinc-300">
          designed by @ashish.karigar
        </div>

        <div className="mb-[11px] h-px w-2 bg-zinc-400/70 dark:bg-zinc-500/70" />

        <img
          src={carSvg}
          alt=""
          className="block h-6 w-auto self-end object-contain dark:brightness-0 dark:invert"
          draggable="false"
        />
      </div>
    </div>
  )
}

export default ContactDriveBanner