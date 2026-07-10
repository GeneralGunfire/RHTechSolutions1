import heroImage from '../assets/drakensburg.png'

const navLinks = ['Home', 'Services', 'About', 'Testimonials', 'FAQ', 'Blog']

function CompassIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8}>
      <circle cx="12" cy="12" r="9" />
      <path d="M14.5 9.5 13 13l-3.5 1.5L11 11l3.5-1.5Z" />
    </svg>
  )
}

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[720px] w-full overflow-hidden text-white">
      <img
        src={heroImage}
        alt="Drakensberg mountains"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/10 to-black/70" />

      <div className="relative z-10 flex h-full w-full flex-col justify-between">
        {/* Nav */}
        <div className="px-4 pt-4 sm:px-8 sm:pt-6">
          <nav className="mx-auto flex w-full max-w-6xl items-center justify-between rounded-full border border-white/15 bg-white/10 px-4 py-2.5 shadow-lg shadow-black/10 backdrop-blur-md sm:px-6">
            <div className="flex items-center gap-2 font-semibold tracking-tight">
              <CompassIcon />
              <span className="text-lg">RHTS</span>
            </div>

            <ul className="hidden items-center gap-8 text-sm font-medium text-white/90 md:flex">
              {navLinks.map((link) => (
                <li key={link} className="cursor-pointer transition hover:text-white">
                  {link}
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3">
              <button className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-white/90 sm:block">
                Book a Call
              </button>
              <button className="grid h-9 w-9 place-items-center rounded-full border border-white/30 bg-white/10">
                <span className="text-sm">A</span>
              </button>
            </div>
          </nav>
        </div>

        {/* Giant title, sunk into the image */}
        <div className="pointer-events-none flex flex-1 items-center justify-center">
          <h1 className="mix-blend-soft-light select-none whitespace-nowrap text-center font-display uppercase leading-none tracking-wide text-white/80 text-[30vw] sm:text-[26vw] md:text-[20rem] lg:text-[24rem]">
            RHTS
          </h1>
        </div>

        {/* Tagline + stats and booking card, aligned in one bottom row */}
        <div className="mt-auto flex w-full flex-col items-start justify-between gap-8 px-6 pb-10 sm:px-10 sm:pb-14 lg:flex-row lg:items-end">
          <div className="w-full max-w-md">
            <h2 className="font-display text-4xl uppercase leading-[0.95] tracking-wide sm:text-5xl">
              Technology Solutions
              <br />
              Built on Solid Ground.
            </h2>

            <div className="mt-6 flex items-center gap-3 text-sm text-white/85">
              <div className="flex -space-x-2">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-8 w-8 rounded-full border-2 border-white/80 bg-white/20 backdrop-blur"
                  />
                ))}
              </div>
              <span>50+ Projects Delivered</span>
            </div>
          </div>

          <div className="w-full max-w-xl rounded-2xl bg-white/95 p-4 text-black shadow-2xl backdrop-blur sm:p-5">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-[1fr_1fr_1fr_auto] sm:items-end">
              <div>
                <label className="block text-xs font-medium text-black/50">Service</label>
                <p className="mt-1 truncate text-sm font-semibold">IT Consulting</p>
              </div>
              <div className="border-t border-black/10 pt-3 sm:border-l sm:border-t-0 sm:pl-4 sm:pt-0">
                <label className="block text-xs font-medium text-black/50">Date</label>
                <p className="mt-1 truncate text-sm font-semibold">Tuesday, 16 Aug 2026</p>
              </div>
              <div className="border-t border-black/10 pt-3 sm:border-l sm:border-t-0 sm:pl-4 sm:pt-0">
                <label className="block text-xs font-medium text-black/50">Team Size</label>
                <p className="mt-1 truncate text-sm font-semibold">2 People</p>
              </div>
              <button className="w-full rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-black/85 sm:w-auto">
                Book a Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
