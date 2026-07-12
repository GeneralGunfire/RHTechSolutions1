import { PlusIcon } from 'lucide-react'
import Reveal from './Reveal'

type Logo = {
  src: string
  alt: string
}

const cardBase =
  'flex items-center justify-center bg-white px-5 py-10 md:p-10 transition-colors duration-300 hover:bg-black/5'

function LogoCard({
  logo,
  className = '',
  children,
}: {
  logo: Logo
  className?: string
  children?: React.ReactNode
}) {
  return (
    <div className={`${cardBase} ${className}`}>
      <img
        alt={logo.alt}
        className="pointer-events-none h-5 select-none opacity-70 md:h-6"
        src={logo.src}
      />
      {children}
    </div>
  )
}

export default function LogoCloud() {
  return (
    <section className="bg-white px-4 py-28 sm:px-6 sm:py-40">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <h2 className="mb-8 text-center text-xl font-medium tracking-tight text-black/60 md:text-3xl">
            Companies we <span className="font-semibold text-black">collaborate</span> with.
          </h2>
        </Reveal>

        <Reveal delay={120}>
        <div className="relative grid grid-cols-2 border-x border-black/10 md:grid-cols-4">
          <div className="pointer-events-none absolute -top-px inset-x-0 border-t border-black/10" />

          <LogoCard
            className="relative border-r border-b border-black/10 bg-black/3"
            logo={{ src: 'https://svgl.app/library/nvidia-wordmark-light.svg', alt: 'Nvidia Logo' }}
          >
            <PlusIcon className="absolute -bottom-[12.5px] -right-[12.5px] z-10 size-6 text-black/30" strokeWidth={1} />
          </LogoCard>

          <LogoCard
            className="border-b border-black/10 md:border-r"
            logo={{ src: 'https://svgl.app/library/supabase_wordmark_light.svg', alt: 'Supabase Logo' }}
          />

          <LogoCard
            className="relative border-r border-b border-black/10 md:bg-black/3"
            logo={{ src: 'https://svgl.app/library/github_wordmark_light.svg', alt: 'GitHub Logo' }}
          >
            <PlusIcon className="absolute -bottom-[12.5px] -right-[12.5px] z-10 size-6 text-black/30" strokeWidth={1} />
            <PlusIcon className="absolute -bottom-[12.5px] -left-[12.5px] z-10 hidden size-6 text-black/30 md:block" strokeWidth={1} />
          </LogoCard>

          <LogoCard
            className="relative border-b border-black/10 bg-black/3 md:bg-white"
            logo={{ src: 'https://svgl.app/library/openai_wordmark_light.svg', alt: 'OpenAI Logo' }}
          />

          <LogoCard
            className="relative border-r border-b border-black/10 bg-black/3 md:border-b-0 md:bg-white"
            logo={{ src: 'https://svgl.app/library/turso-wordmark-light.svg', alt: 'Turso Logo' }}
          >
            <PlusIcon className="absolute -bottom-[12.5px] -right-[12.5px] z-10 size-6 text-black/30 md:hidden" strokeWidth={1} />
          </LogoCard>

          <LogoCard
            className="border-b border-black/10 bg-white md:border-r md:border-b-0 md:bg-black/3"
            logo={{ src: 'https://svgl.app/library/clerk-wordmark-light.svg', alt: 'Clerk Logo' }}
          />

          <LogoCard
            className="border-r border-black/10"
            logo={{ src: 'https://svgl.app/library/claude-ai-wordmark-icon_light.svg', alt: 'Claude AI Logo' }}
          />

          <LogoCard
            className="bg-black/3"
            logo={{ src: 'https://svgl.app/library/vercel_wordmark.svg', alt: 'Vercel Logo' }}
          />

          <div className="pointer-events-none absolute -bottom-px inset-x-0 border-b border-black/10" />
        </div>
        </Reveal>
      </div>
    </section>
  )
}
