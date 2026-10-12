import { useState } from 'react'
import { Link, NavLink } from 'react-router'
import { Menu, X } from 'lucide-react'
import { SiteFooter } from '../components/SiteFooter'
import { Reveal } from '../components/Reveal'

const navLinks = [
  { to: '/voyages', label: 'Voyages' },
  { to: '/ships', label: 'Ships We Sail' },
  { to: '/social-mission', label: 'Social Mission' },
  { to: '/club', label: 'The Club' },
  { to: '/about', label: 'About Us' },
]

const pillars = [
  {
    to: '/voyages',
    icon: '/images/icon-voyages.png',
    title: 'Voyages',
    text: 'Under sail, at walking pace, with a warm galley waiting below.',
  },
  {
    to: '/social-mission',
    icon: '/images/icon-mission.png',
    title: 'Social Mission',
    text: 'The sea should belong to everyone but those who would benefit the most access it the least.',
  },
  {
    to: '/club',
    icon: '/images/icon-club.png',
    title: 'The Club',
    text: 'A working sailing community built around traditional tall ships.',
  },
]

export function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero */}
      <section className="relative w-full">
        <img
          src="/images/hero-home.jpeg"
          alt="A traditional sailing ship under full canvas, a red sun rising over coastal cliffs"
          className="h-[72vh] w-full object-cover object-center md:h-[88vh]"
        />
        <div className="absolute left-5 top-6 flex flex-col items-center md:left-16 md:top-10">
          <img src="/images/logo.png" alt="High Canvas" className="w-32 md:w-52" />
          <div className="hc-divider my-4 md:my-5" />
          <p
            className="text-center text-[0.6rem] font-bold uppercase leading-relaxed md:text-[0.7rem]"
            style={{ letterSpacing: '0.22em', color: 'var(--hc-navy)' }}
          >
            Old Ships
            <br />
            New Horizons
          </p>
        </div>

        {/* Top-right menu (same as subpages) */}
        <div className="absolute right-4 top-4 md:right-8 md:top-8">
          <button
            className="flex h-11 w-11 items-center justify-center rounded-full"
            style={{ backgroundColor: 'rgba(247,240,223,0.85)' }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} color="var(--hc-navy)" /> : <Menu size={24} color="var(--hc-navy)" />}
          </button>

          {menuOpen && (
            <nav
              className="absolute right-0 mt-3 w-56 border p-5"
              style={{ backgroundColor: 'var(--hc-cream)', borderColor: 'rgba(18,63,98,0.2)' }}
              aria-label="Main navigation"
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((l) => (
                  <NavLink
                    key={l.to}
                    to={l.to}
                    onClick={() => setMenuOpen(false)}
                    className="hc-navlink block py-1 text-sm"
                  >
                    {l.label}
                  </NavLink>
                ))}
                <div
                  className="mt-1 flex gap-5 border-t pt-4"
                  style={{ borderColor: 'rgba(18,63,98,0.15)' }}
                >
                  <a href="https://instagram.com/highcanvasclub" target="_blank" rel="noreferrer" aria-label="Instagram">
                    <img src="/images/icon-instagram.png" alt="" className="h-5 w-5 object-contain" />
                  </a>
                  <a href="https://facebook.com/highcanvas" target="_blank" rel="noreferrer" aria-label="Facebook">
                    <img src="/images/icon-facebook.png" alt="" className="h-5 w-5 object-contain" />
                  </a>
                </div>
              </div>
            </nav>
          )}
        </div>
      </section>

      {/* Mission statement */}
      <section className="mx-auto w-full max-w-3xl px-5 pt-16 text-center md:px-8 md:pt-24">
        <Reveal>
          <p
            className="text-xl leading-relaxed md:text-2xl"
            style={{ fontFamily: "'Libre Baskerville', serif", color: 'var(--hc-navy)' }}
          >
            High Canvas Sailing Community keeps heritage sailing skills alive — chartering our
            decks for conservation, campaigning and cargo missions.
          </p>
          <div className="hc-divider mx-auto my-8 w-24" />
        </Reveal>
      </section>

      {/* Three pillars */}
      <main className="mx-auto w-full max-w-6xl flex-1 px-5 pb-4 pt-8 md:px-8 md:pt-12">
        <div className="grid grid-cols-1 gap-14 sm:grid-cols-3 md:gap-10">
          {pillars.map((p) => (
            <Reveal key={p.to}>
              <Link to={p.to} className="group flex flex-col items-center text-center">
                <img
                  src={p.icon}
                  alt=""
                  className="h-28 w-auto object-contain transition-transform duration-500 group-hover:scale-105 md:h-36"
                />
                <h2
                  className="mt-7 text-lg font-bold uppercase transition-colors duration-300 group-hover:text-[var(--hc-rust)] md:text-xl"
                  style={{ letterSpacing: '0.18em', color: 'var(--hc-rust)' }}
                >
                  {p.title}
                </h2>
                <div className="hc-divider my-5" />
                <p className="hc-body max-w-xs">{p.text}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
