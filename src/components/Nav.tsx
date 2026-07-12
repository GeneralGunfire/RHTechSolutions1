import logo from '../assets/logo.png'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Blog', href: '#blog' },
]

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-white/50" fill="none" stroke="currentColor" strokeWidth={1.8}>
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}

export default function Nav() {
  return (
    <nav className="fixed inset-x-4 top-4 z-50 mx-auto flex w-auto max-w-6xl items-center justify-between gap-4 rounded-full border border-white/10 bg-black/30 px-4 py-2.5 text-white backdrop-blur-md sm:inset-x-6 sm:top-6 sm:px-6">
      <a href="#home" className="flex items-center gap-2 font-semibold tracking-tight">
        <img src={logo} alt="RH Tech Solutions" className="h-8 w-auto rounded-md bg-white p-1" />
      </a>

      <div className="hidden flex-1 items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-xs text-white/60 sm:flex sm:max-w-xs">
        <SearchIcon />
        Search...
      </div>

      <ul className="hidden items-center gap-6 text-sm font-medium text-white/70 md:flex">
        {navLinks.map((link) => (
          <li key={link.label}>
            <a href={link.href} className="group relative transition-colors duration-300 hover:text-white">
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
            </a>
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        className="hidden rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-white/90 sm:block"
      >
        Book Now
      </a>
    </nav>
  )
}
