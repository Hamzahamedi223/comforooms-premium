import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { SERVICES, TEXT } from '../data.js'
import Reveal, { SectionHead } from './Reveal.jsx'

export default function Services() {
  const [active, setActive] = useState(0)
  const s = SERVICES[active]

  return (
    <section className="section" id="services">
      <div className="container">
        <SectionHead
          eyebrow="Our services"
          title={<>Complete construction, <em>start</em> to finish.</>}
          text={TEXT.servicesIntro}
        />

        <div className="services">
          <Reveal className="services__list">
            {SERVICES.map((item, i) => (
              <button
                key={item.key}
                className={`services__item ${i === active ? 'is-active' : ''}`}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
              >
                <span className="services__num">0{i + 1}</span>
                <span className="services__title">{item.title}</span>
                <ArrowUpRight className="services__arrow" size={22} />
              </button>
            ))}
          </Reveal>

          <Reveal delay={0.1} className="services__panel">
            <AnimatePresence mode="wait">
              <motion.div
                key={s.key}
                className="services__card"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="services__img" style={{ backgroundImage: `url(${s.image})` }} />
                <div className="services__body">
                  <h3>{s.title}</h3>
                  <p>{s.blurb}</p>
                  <a href="#contact" className="link-gold">Get in touch <ArrowUpRight size={16} /></a>
                </div>
              </motion.div>
            </AnimatePresence>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
