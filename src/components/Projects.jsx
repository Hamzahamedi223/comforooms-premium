import { useCallback, useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X, Plus } from 'lucide-react'
import { GALLERIES, TEXT } from '../data.js'
import { SectionHead } from './Reveal.jsx'

const LABELS = {
  Bathrooms: 'Bathroom Renovations',
  Outdoor: 'Outdoor Spaces',
  Extensions: 'Extensions',
  Business: 'Business Renovations',
  Kitchens: 'Kitchen Renovation',
}
const FILTERS = ['All', ...Object.keys(GALLERIES)]
const PAGE = 9

// Interleave categories so "All" shows a varied mix.
const ALL = (() => {
  const lists = Object.entries(GALLERIES).map(([cat, imgs]) => imgs.map((src) => ({ src, cat })))
  const out = []
  for (let i = 0; lists.some((l) => l[i]); i++) lists.forEach((l) => l[i] && out.push(l[i]))
  return out
})()

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const [shown, setShown] = useState(PAGE)
  const [lightbox, setLightbox] = useState(null)

  const items = useMemo(() => (filter === 'All' ? ALL : ALL.filter((p) => p.cat === filter)), [filter])
  const visible = items.slice(0, shown)

  const pick = (f) => { setFilter(f); setShown(PAGE) }

  const step = useCallback(
    (d) => setLightbox((i) => (i === null ? i : (i + d + items.length) % items.length)),
    [items.length]
  )

  useEffect(() => {
    if (lightbox === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') setLightbox(null)
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [lightbox, step])

  const current = lightbox !== null ? items[lightbox] : null

  return (
    <section className="section section--alt" id="projects">
      <div className="container">
        <div className="projects__head">
          <SectionHead eyebrow="Check our work" title={<>Our recent <em>projects</em>.</>} text={TEXT.projectsIntro} />
          <div className="filters" role="tablist">
            {FILTERS.map((f) => (
              <button key={f} role="tab" aria-selected={filter === f} className={filter === f ? 'is-active' : ''} onClick={() => pick(f)}>
                {f} <small>{f === 'All' ? ALL.length : GALLERIES[f].length}</small>
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid">
          <AnimatePresence mode="popLayout">
            {visible.map((p, i) => (
              <motion.button
                layout
                key={p.src}
                className="tile"
                onClick={() => setLightbox(i)}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <img src={p.src} alt={LABELS[p.cat]} loading="lazy" />
                <div className="tile__info">
                  <span>ComfoRooms</span>
                  <h3>{LABELS[p.cat]}</h3>
                </div>
                <span className="tile__plus"><Plus size={20} /></span>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>

        {shown < items.length && (
          <div className="center-row">
            <button className="btn btn--ghost-dark" onClick={() => setShown((n) => n + PAGE)}>
              Load more ({items.length - shown} remaining)
            </button>
          </div>
        )}
      </div>

      <AnimatePresence>
        {current && (
          <motion.div className="lightbox" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setLightbox(null)}>
            <button className="lightbox__close" aria-label="Close"><X /></button>
            <button className="lightbox__nav lightbox__nav--prev" aria-label="Previous" onClick={(e) => { e.stopPropagation(); step(-1) }}><ChevronLeft /></button>
            <motion.figure key={lightbox} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} onClick={(e) => e.stopPropagation()}>
              <img src={current.src} alt={LABELS[current.cat]} />
              <figcaption>
                <strong>{LABELS[current.cat]}</strong>
                <span>{lightbox + 1} / {items.length}</span>
              </figcaption>
            </motion.figure>
            <button className="lightbox__nav lightbox__nav--next" aria-label="Next" onClick={(e) => { e.stopPropagation(); step(1) }}><ChevronRight /></button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
