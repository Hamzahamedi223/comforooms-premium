import { ArrowRight, Phone } from 'lucide-react'
import { COMPANY, CTA_IMAGE } from '../data.js'
import Reveal from './Reveal.jsx'

export default function CTA() {
  return (
    <section className="cta" style={{ backgroundImage: `url(${CTA_IMAGE})` }}>
      <div className="cta__shade" />
      <div className="container cta__inner">
        <Reveal><span className="eyebrow">We make your dreams reality</span></Reveal>
        <Reveal delay={0.1}><h2 className="h2">Building dream, <em>crafting reality</em>.</h2></Reveal>
        <Reveal delay={0.2} className="cta__actions">
          <a href="#contact" className="btn btn--gold">Contact us <ArrowRight size={18} /></a>
          <a href={COMPANY.phoneHref} className="btn btn--ghost"><Phone size={16} /> {COMPANY.phone}</a>
        </Reveal>
      </div>
    </section>
  )
}
