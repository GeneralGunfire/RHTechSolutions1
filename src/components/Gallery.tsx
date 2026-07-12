import { useEffect, useState } from 'react'
import Reveal from './Reveal'
import autoenforceImg from '../assets/auto.png'
import meridianImg from '../assets/site-meridian.png'
import prospectImg from '../assets/prospect.png'
import ikhayaImg from '../assets/newsite.png'

const items = [
  { title: 'AutoEnforce ZA', image: autoenforceImg },
  { title: 'Meridian', image: meridianImg },
  { title: 'Prospect', image: prospectImg },
  { title: 'Ikhaya Analytics', image: ikhayaImg },
]

const stats = [
  { value: '15+', label: 'Platforms Shipped' },
  { value: '6', label: 'Industries Served' },
  { value: '99.9%', label: 'Uptime Delivered' },
  { value: '10+', label: 'Years Building Software' },
]

function ArrowIcon({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-4 w-4 ${flip ? 'rotate-180' : ''}`}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

export default function Gallery() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % items.length)
    }, 5000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="bg-white px-4 py-4 sm:px-6">
      <section
        id="services"
        className="mx-auto max-w-[110rem] rounded-3xl px-4 py-14 text-white sm:px-8 sm:py-18"
        style={{
          background:
            'radial-gradient(120% 100% at 50% 0%, #1a2436 0%, #10141c 45%, #0b0f14 100%)',
        }}
      >
        <div className="mx-auto max-w-7xl">
        <Reveal>
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="text-xs font-semibold uppercase tracking-wide text-white/50">
            Selected Work
          </span>
          <h2 className="max-w-2xl font-display text-4xl uppercase tracking-wide sm:text-5xl">
            What We&rsquo;ve Built
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-white/60">
            From public infrastructure to education and data platforms, we design and ship
            production software that South African organisations rely on every day.
          </p>
        </div>
        </Reveal>

        {/* Slideshow */}
        <Reveal delay={150}>
        <div className="mt-8">
          <div className="relative h-80 overflow-hidden rounded-2xl border border-white/10 bg-white/3 sm:h-112">
            {items.map((item, i) => (
              <img
                key={item.title}
                src={item.image}
                alt={item.title}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                  i === active ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}

            <button
              onClick={() => setActive((active - 1 + items.length) % items.length)}
              className="absolute left-4 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white hover:text-black"
              aria-label="Previous"
            >
              <ArrowIcon flip />
            </button>
            <button
              onClick={() => setActive((active + 1) % items.length)}
              className="absolute right-4 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white hover:text-black"
              aria-label="Next"
            >
              <ArrowIcon />
            </button>

            <div className="absolute inset-x-0 bottom-0 grid grid-cols-2 gap-3 border-t border-white/10 bg-black/50 px-6 py-3 backdrop-blur-sm sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-display text-xl tracking-wide sm:text-2xl">{stat.value}</p>
                  <p className="mt-0.5 text-xs text-white/50">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 flex items-center justify-center gap-2">
            {items.map((item, i) => (
              <button
                key={item.title}
                onClick={() => setActive(i)}
                aria-label={`Show ${item.title}`}
                className={`h-2 rounded-full transition-all ${
                  i === active ? 'w-8 bg-white' : 'w-2 bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
        </Reveal>

          <div className="mt-10 flex justify-center">
            <button className="flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-white hover:text-black hover:scale-105">
              See More Of Our Work
              <ArrowIcon />
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
