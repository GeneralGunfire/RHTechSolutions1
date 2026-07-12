import heroImage from '../assets/drakensburg.png'

const sidebarSteps = ['01', '02', '03', '04']

const features = [
  { title: 'Be Yourself', description: 'With new expertise on your side' },
  { title: 'Solid Infrastructure', description: 'Discover a partner you can rely on' },
  { title: 'Be a Partner', description: 'With new-generation technology' },
  { title: 'New Opportunity', description: 'Grow your business with us' },
]

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.8}>
      <path d="M12 21s7-6.5 7-11.5A7 7 0 0 0 5 9.5C5 14.5 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.2" />
    </svg>
  )
}

export default function Hero() {
  return (
    <section id="home" className="bg-white px-4 pb-4 text-white sm:px-6">
      {/* Hero image card, nav + sidebar + wordmark all live inside it, flush to the top */}
      <div className="relative mx-auto h-[85vh] min-h-160 w-full max-w-[110rem] overflow-hidden rounded-b-3xl text-white">
        <img
          src={heroImage}
          alt="Drakensberg mountains"
          className="animate-fade-in absolute inset-0 h-full w-full scale-105 object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/10 to-black/80" />

        {/* Numbered sidebar */}
        <div className="animate-fade-in absolute left-6 top-1/2 z-20 hidden -translate-y-1/2 flex-col items-center gap-6 text-xs font-medium text-white/50 sm:flex" style={{ animationDelay: '600ms' }}>
          {sidebarSteps.map((step, i) => (
            <div key={step} className="flex flex-col items-center gap-4">
              {i > 0 && <span className="h-8 w-px bg-white/25" />}
              <span className={i === 0 ? 'text-white' : ''}>{step}</span>
            </div>
          ))}
        </div>

        {/* Wordmark, centered, nudged up */}
        <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-6 pb-20 text-center sm:pb-28">
          <h1 className="animate-fade-up select-none font-wordmark font-bold uppercase leading-none tracking-tight text-white text-[18vw] sm:text-[15vw] md:text-[12rem] lg:text-[13.5rem]">
            RHTS
          </h1>
          <p
            className="animate-fade-up mt-4 max-w-md text-sm text-white/80 sm:text-base"
            style={{ animationDelay: '150ms' }}
          >
            Build Your Technology Future. Discover With Us.
          </p>
        </div>

        {/* Feature strip, inside the frame at the bottom */}
        <div
          className="animate-fade-up absolute inset-x-0 bottom-0 z-10 border-t border-white/15 bg-black/30 px-6 py-10 backdrop-blur-sm sm:px-10 sm:py-14"
          style={{ animationDelay: '300ms' }}
        >
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.title} className="flex items-start gap-3 transition-transform duration-300 hover:-translate-y-0.5">
                <PinIcon />
                <div>
                  <p className="font-wordmark text-lg font-medium tracking-tight text-white">
                    {feature.title}
                  </p>
                  <p className="mt-1.5 text-sm leading-snug text-white/50">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
