import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import { COMPANY } from '../data.js'

const LINKS = [
  ['Services', '#services'],
  ['About', '#about'],
  ['Our Work', '#process'],
  ['Projects', '#projects'],
  ['Reviews', '#testimonials'],
  ['Contact', '#contact'],
]

export function Logo() {
  return (
    <a href="#top" className="logo" aria-label={`${COMPANY.name} home`}>
      <svg viewBox="0 0 64 64" width="34" height="34" aria-hidden="true">
        <path d="M14 34 32 18l18 16" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 30v16h24V30" fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
        <path d="M29 46v-8h6v8" fill="none" stroke="currentColor" strokeWidth="3" opacity=".6" />
      </svg>
      <span>Comfo<em>Rooms</em></span>
    </a>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <header className={`nav ${scrolled ? 'nav--solid' : ''}`}>
      <div className="container nav__inner">
        <Logo />
        <nav className="nav__links" aria-label="Primary">
          {LINKS.map(([label, href]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </nav>
        <div className="nav__cta">
          <a href={COMPANY.phoneHref} className="nav__phone"><Phone size={15} /> {COMPANY.phone}</a>
          <a href="#contact" className="btn btn--gold btn--sm">Free Quote</a>
        </div>
        <button className="nav__toggle" onClick={() => setOpen(true)} aria-label="Open menu"><Menu /></button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="drawer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button className="drawer__close" onClick={() => setOpen(false)} aria-label="Close menu"><X /></button>
            <nav>
              {LINKS.map(([label, href], i) => (
                <motion.a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i + 0.1 }}
                >
                  {label}
                </motion.a>
              ))}
            </nav>
            <a href={COMPANY.phoneHref} className="btn btn--gold"><Phone size={16} /> Call {COMPANY.phone}</a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
