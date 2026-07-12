import img from '../assets/explore.jpg'
import Reveal from './Reveal'

const notes = [
  {
    text: 'Whether you’re running a growing team or an established business, we design systems around how you actually work.',
    top: '8%',
    left: '4%',
  },
  {
    text: 'Reliable support, clear reporting, and infrastructure that scales with you.',
    top: '38%',
    left: '18%',
  },
  {
    text: 'From cloud migration to day-to-day maintenance, we’ve got it covered.',
    top: '64%',
    left: '6%',
  },
]

export default function Explore() {
  return (
    <section id="blog" className="bg-white px-4 py-16 text-black sm:px-6 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
        <div className="text-center">
          <h2 className="font-display text-3xl uppercase tracking-wide sm:text-4xl">
            Explore Technology With Us
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-black/30" />
        </div>
        </Reveal>

        <Reveal delay={150} y={32}>
        <div className="group relative mt-12 overflow-hidden rounded-3xl">
          <img
            src={img}
            alt="RHTS at work"
            className="h-128 w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/20 to-transparent" />

          <div className="absolute right-6 top-6 hidden h-64 w-72 rounded-2xl border border-white/25 sm:block" />

          {notes.map((note, i) => (
            <Reveal
              key={note.text}
              className="absolute max-w-xs"
              delay={300 + i * 150}
              y={12}
              style={{ top: note.top, left: note.left }}
            >
              <div className="rounded-xl bg-black/50 p-3 text-xs leading-relaxed text-white/85 backdrop-blur-sm">
                {note.text}
              </div>
            </Reveal>
          ))}
        </div>
        </Reveal>
      </div>
    </section>
  )
}
