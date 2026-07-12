import demoImg from '../assets/newdemo.png'
import Reveal from './Reveal'

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2}>
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  )
}

export default function VisualJourney() {
  return (
    <div className="bg-white px-4 py-4 sm:px-6">
      <section
        className="mx-auto max-w-[110rem] overflow-hidden rounded-3xl text-white"
        style={{
          background:
            'radial-gradient(120% 100% at 50% 0%, #1a2436 0%, #10141c 45%, #0b0f14 100%)',
        }}
      >
        <div className="relative flex flex-col items-center gap-10 px-6 py-14 sm:px-10 sm:py-20 lg:flex-row lg:items-center lg:gap-0">
          {/* Left: heading */}
          <Reveal className="relative z-10 flex w-full flex-col items-center text-center lg:w-[45%] lg:items-start lg:text-left" y={20}>
            <span className="text-xs font-semibold uppercase tracking-wide text-white/50">
              Explore More
            </span>
            <h2 className="mt-4 font-display text-4xl uppercase leading-[0.95] tracking-wide sm:text-5xl lg:text-6xl">
              Take a
              <br />
              Visual Journey
            </h2>
            <p className="mt-4 max-w-sm text-sm text-white/60">
              Step inside another project we&rsquo;re proud of &mdash; RH Tech Solutions.
            </p>

            <a
              href="https://rh-tech-solutions.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/90 hover:shadow-lg hover:shadow-black/30"
            >
              Visit the Site
              <ArrowIcon />
            </a>
          </Reveal>

          {/* Right: image, heading text overlaps its left edge on large screens */}
          <Reveal className="relative w-full lg:-ml-16 lg:w-[65%]" delay={150} y={20}>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/60 transition-transform duration-500 hover:scale-[1.01]">
              <img src={demoImg} alt="RH Tech Solutions" className="h-auto w-full object-cover" />
              <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/3 bg-linear-to-r from-[#0b0f14] to-transparent lg:block" />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
