import techImg from '../assets/cool.webp'
import Reveal from './Reveal'

// Each shape is a window into one shared image. The image (source 1052x755,
// ratio ~1.39) is rendered at native ratio inside every window, sized to
// cover the full grid footprint, then shifted up/left by that window's
// offset within the grid so the visible slice lines up seamlessly.
const SOURCE_RATIO = 1052 / 755
const GRID_W = 816 // px, approx width of the 2-col grid at desktop size
const GRID_H = 736 // px, approx height (two rows + gap + vertical offsets)
const IMG_H = Math.max(GRID_H, GRID_W / SOURCE_RATIO)
const IMG_W = IMG_H * SOURCE_RATIO

const shapes = [
  { className: 'h-80 w-full', top: 0, left: 0 },
  { className: 'mt-10 h-80 w-full', top: 40, left: 416 },
  { className: 'h-60 w-full', top: 376, left: 0 },
  { className: '-mt-10 h-60 w-full', top: 336, left: 416 },
]

export default function AboutStats() {
  return (
    <div className="bg-white px-4 py-4 sm:px-6">
      <section
        id="about"
        className="mx-auto max-w-[110rem] rounded-3xl px-4 py-24 text-white sm:px-8 sm:py-32"
        style={{
          background:
            'radial-gradient(120% 100% at 50% 0%, #1a2436 0%, #10141c 45%, #0b0f14 100%)',
        }}
      >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <Reveal y={32}>
        <div className="relative grid grid-cols-2 gap-5">
          {shapes.map((shape, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-2xl transition-transform duration-500 hover:scale-[1.02] ${shape.className}`}
            >
              <img
                src={techImg}
                alt="RHTS technology"
                className="absolute max-w-none"
                style={{
                  width: IMG_W,
                  height: IMG_H,
                  top: -shape.top,
                  left: -shape.left,
                }}
              />
              <div className="absolute inset-0 bg-black/55" />
            </div>
          ))}
        </div>
        </Reveal>

        <Reveal delay={150}>
        <div>
          <h2 className="font-display text-4xl uppercase leading-[0.95] tracking-wide sm:text-5xl">
            Here&rsquo;s What Makes RHTS the Right Fit for You
          </h2>
          <div className="mt-5 h-px w-20 bg-white/30" />

          <p className="mt-8 max-w-lg text-base leading-relaxed text-white/60">
            Whether you&rsquo;re running a small team or scaling across the country, dependable
            technology is what keeps you moving. From infrastructure to support, we build systems
            that hold up under real-world pressure and a team that answers when you call.
          </p>

          <a
            href="#contact"
            className="mt-10 inline-block rounded-full bg-white px-9 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/90 hover:shadow-lg hover:shadow-black/30"
          >
            Book Now
          </a>
        </div>
        </Reveal>
      </div>
      </section>
    </div>
  )
}
