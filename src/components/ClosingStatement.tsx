import Reveal from './Reveal'

export default function ClosingStatement() {
  return (
    <section className="bg-white px-4 py-24 text-center text-black sm:px-6 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <h2 className="font-display text-5xl uppercase leading-[0.95] tracking-wide sm:text-7xl">
            Innovate With
            <br />
            Prospect
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="mx-auto mt-6 max-w-lg text-sm leading-relaxed text-black/50 sm:text-base">
            Dependable technology, built by people who answer the phone. Let&rsquo;s build what
            your business needs next.
          </p>
        </Reveal>

        <Reveal delay={220}>
          <a
            href="#contact"
            className="mt-10 inline-block rounded-full bg-black px-9 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-black/85 hover:shadow-lg hover:shadow-black/20"
          >
            Book a Call
          </a>
        </Reveal>
      </div>
    </section>
  )
}
