import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router'
import { Menu, X } from 'lucide-react'

const links = [
  { to: '/voyages', label: 'Voyages' },
  { to: '/ships', label: 'Ships We Sail' },
  { to: '/social-mission', label: 'Social Mission' },
  { to: '/club', label: 'The Club' },
  { to: '/about', label: 'About Us' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="w-full" style={{ backgroundColor: 'var(--hc-cream)' }}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 md:px-8 md:py-7">
        <Link to="/" className="flex items-center gap-3" aria-label="High Canvas home">
          <img src="/images/nav-mark.png" alt="" className="h-9 w-auto md:h-11" />
          <span
            className="text-sm font-bold uppercase md:text-base"
            style={{ letterSpacing: '0.22em', color: 'var(--hc-navy)' }}
          >
            High Canvas
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex lg:gap-9" aria-label="Main navigation">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={({ isActive }) => `hc-navlink ${isActive ? 'active' : ''}`}>
              {l.label}
            </NavLink>
          ))}
          <a href="https://instagram.com/highcanvasclub" target="_blank" rel="noreferrer" aria-label="Instagram" className="ml-2">
            <img src="/images/icon-instagram.png" alt="" className="h-5 w-5 object-contain" />
          </a>
          <a href="https://facebook.com/highcanvas" target="_blank" rel="noreferrer" aria-label="Facebook">
            <img src="/images/icon-facebook.png" alt="" className="h-5 w-5 object-contain" />
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="flex h-11 w-11 items-center justify-center md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={24} color="var(--hc-navy)" /> : <Menu size={24} color="var(--hc-navy)" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t px-5 pb-6 pt-4 md:hidden" style={{ borderColor: 'rgba(18,63,98,0.15)' }} aria-label="Mobile navigation">
          <div className="flex flex-col gap-5">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={`hc-navlink block py-2 text-sm ${location.pathname === l.to ? 'active' : ''}`}
              >
                {l.label}
              </NavLink>
            ))}
            <div className="flex gap-5 pt-2">
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
    </header>
  )
}
