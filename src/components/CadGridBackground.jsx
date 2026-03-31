function CadGridBackground() {
    return (
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-1/2 w-screen -translate-x-1/2 overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-[0.22] dark:opacity-[0.14]"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                to right,
                rgba(99,102,241,0.10) 0px,
                rgba(99,102,241,0.10) 1px,
                transparent 1px,
                transparent 24px
              ),
              repeating-linear-gradient(
                to bottom,
                rgba(99,102,241,0.10) 0px,
                rgba(99,102,241,0.10) 1px,
                transparent 1px,
                transparent 24px
              ),
              repeating-linear-gradient(
                to right,
                rgba(99,102,241,0.22) 0px,
                rgba(99,102,241,0.22) 1px,
                transparent 1px,
                transparent 96px
              ),
              repeating-linear-gradient(
                to bottom,
                rgba(99,102,241,0.22) 0px,
                rgba(99,102,241,0.22) 1px,
                transparent 1px,
                transparent 96px
              )
            `,
            backgroundPosition: '0 0, 0 0, 0 0, 0 0',
            maskImage:
              'linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)',
            WebkitMaskImage:
              'linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)',
          }}
        />
  
        <div
          className="absolute inset-0 hidden dark:block opacity-[0.14]"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                to right,
                rgba(103,232,249,0.09) 0px,
                rgba(103,232,249,0.09) 1px,
                transparent 1px,
                transparent 24px
              ),
              repeating-linear-gradient(
                to bottom,
                rgba(103,232,249,0.09) 0px,
                rgba(103,232,249,0.09) 1px,
                transparent 1px,
                transparent 24px
              ),
              repeating-linear-gradient(
                to right,
                rgba(103,232,249,0.18) 0px,
                rgba(103,232,249,0.18) 1px,
                transparent 1px,
                transparent 96px
              ),
              repeating-linear-gradient(
                to bottom,
                rgba(103,232,249,0.18) 0px,
                rgba(103,232,249,0.18) 1px,
                transparent 1px,
                transparent 96px
              )
            `,
            backgroundPosition: '0 0, 0 0, 0 0, 0 0',
            maskImage:
              'linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)',
            WebkitMaskImage:
              'linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)',
          }}
        />
      </div>
    )
  }
  
  export default CadGridBackground