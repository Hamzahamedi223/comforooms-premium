import { ArrowUp } from 'lucide-react'
import { COMPANY, SERVICES, TEXT } from '../data.js'
import { Logo } from './Navbar.jsx'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <Logo />
          <p className="footer__tag">{TEXT.footerTag}</p>
        </div>
        <div>
          <h4>Services</h4>
          <ul>{SERVICES.map((s) => <li key={s.key}><a href="#services">{s.title}</a></li>)}</ul>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            <li><a href="#about">About us</a></li>
            <li><a href="#projects">Our work</a></li>
            <li><a href="#testimonials">Reviews</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li><a href={COMPANY.phoneHref}>{COMPANY.phone}</a></li>
            <li><a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a></li>
            <li>{COMPANY.city}, United Kingdom</li>
          </ul>
        </div>
      </div>
      <div className="container footer__bottom">
        <span>© {new Date().getFullYear()} {COMPANY.legal}. All rights reserved.</span>
        <a href="#top" className="footer__top" aria-label="Back to top"><ArrowUp size={18} /></a>
      </div>
    </footer>
  )
}
