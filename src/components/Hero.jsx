import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, ShieldCheck, Zap, BadgeCheck } from 'lucide-react'
import { HERO, HERO_IMAGE } from '../data.js'

const ease = [0.22, 1, 0.36, 1]

export default function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 800], [0, 160])
  const scale = useTransform(scrollY, [0, 800], [1.05, 1.15])
  const [first, ...rest] = HERO.title.split(', ')

  return (
    <section className="hero" id="top">
      <motion.div className="hero__bg" style={{ y, scale, backgroundImage: `url(${HERO_IMAGE})` }} />
      <div className="hero__shade" />
      <div className="container hero__content">
        <motion.span className="eyebrow" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease }}>
          {HERO.eyebrow}
        </motion.span>
        <motion.h1 className="h1" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.1, ease }}>
          {first},<br /><em>{rest.join(', ')}</em>
        </motion.h1>
        <motion.p className="hero__lead" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.25, ease }}>
          {HERO.lead}
        </motion.p>
        <motion.div className="hero__actions" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4, ease }}>
          <a href="#contact" className="btn btn--gold">Contact us <ArrowRight size={18} /></a>
          <a href="#projects" className="btn btn--ghost">Check our work</a>
        </motion.div>

        <motion.ul className="hero__badges" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, delay: 0.7 }}>
          <li><Zap size={18} /> Fast and reliable service</li>
          <li><ShieldCheck size={18} /> Warranty on all work</li>
          <li><BadgeCheck size={18} /> Satisfaction guaranteed</li>
        </motion.ul>
      </div>
      <a href="#services" className="hero__scroll" aria-label="Scroll to services"><span /></a>
    </section>
  )
}
