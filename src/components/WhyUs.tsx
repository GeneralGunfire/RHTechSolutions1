import Reveal from './Reveal'

const reasons = [
  {
    title: 'Tried and Trusted',
    description: "We're trusted by businesses across South Africa, just like you.",
    active: true,
  },
  {
    title: 'Reliable Support',
    description: "We're here for you. Reach out anytime by phone, email, or chat.",
    active: false,
  },
  {
    title: 'One-Stop Tech Partner',
    description: 'Your search ends here. We’ve got your entire stack covered.',
    active: false,
  },
]

function IconShield() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.6}>
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}

function IconHeadset() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.6}>
      <path d="M4 13a8 8 0 0 1 16 0" />
      <rect x="3" y="13" width="4" height="6" rx="1.5" />
      <rect x="17" y="13" width="4" height="6" rx="1.5" />
      <path d="M19 19v1a3 3 0 0 1-3 3h-3" />
    </svg>
  )
}

function IconUsers() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.6}>
      <circle cx="9" cy="8" r="3" />
      <path d="M2.5 20a6.5 6.5 0 0 1 13 0" />
      <circle cx="17.5" cy="9" r="2.5" />
      <path d="M15.5 20a5.5 5.5 0 0 1 6-5.4" />
    </svg>
  )
}

const icons = [IconShield, IconHeadset, IconUsers]

export default function WhyUs() {
  return (
    <section className="bg-white px-4 py-20 text-black sm:px-6 sm:py-28">
      <div className="mx-auto max-w-5xl text-center">
        <Reveal>
          <h2 className="font-display text-4xl uppercase tracking-wide sm:text-5xl">
            Reason For Choosing Us
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-12 sm:grid-cols-3">
          {reasons.map((reason, i) => {
            const Icon = icons[i]
            return (
              <Reveal key={reason.title} delay={i * 120}>
                <div className="flex flex-col items-center">
                  <div
                    className={`grid h-20 w-20 place-items-center rounded-full border transition-transform duration-300 hover:scale-105 [&_svg]:h-8 [&_svg]:w-8 ${
                      reason.active
                        ? 'border-black bg-black text-white'
                        : 'border-black/15 bg-black/5 text-black/70'
                    }`}
                  >
                    <Icon />
                  </div>
                  <p className="mt-5 text-lg font-semibold">{reason.title}</p>
                  <p className="mt-2.5 max-w-xs text-sm leading-relaxed text-black/50">
                    {reason.description}
                  </p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
