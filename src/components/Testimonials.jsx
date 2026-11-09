import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote, Star, X } from 'lucide-react'
import { TESTIMONIALS, TEXT } from '../data.js'
import { SectionHead } from './Reveal.jsx'
import { sendForm } from '../lib/email.js'

function Stars({ n, onPick, size = 16 }) {
  return (
    <div className="stars">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={size}
          fill={i <= n ? 'currentColor' : 'none'}
          onClick={onPick ? () => onPick(i) : undefined}
          style={onPick ? { cursor: 'pointer' } : undefined}
        />
      ))}
    </div>
  )
}

function ReviewModal({ onClose }) {
  const [rating, setRating] = useState(5)
  const [status, setStatus] = useState('idle')

  const submit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    const data = Object.fromEntries(new FormData(e.target))
    const ok = await sendForm({ ...data, rating, subject: 'New review submitted for approval' })
    setStatus(ok ? 'done' : 'error')
  }

  return (
    <motion.div className="modal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.div className="modal__box" initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 40, opacity: 0 }} onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose} aria-label="Close"><X /></button>
        {status === 'done' ? (
          <div className="modal__done">
            <h3>Thank you!</h3>
            <p>Your review has been submitted and will appear once approved.</p>
            <button className="btn btn--gold" onClick={onClose}>Close</button>
          </div>
        ) : (
          <form onSubmit={submit} className="form">
            <h3>Submit your review</h3>
            <p className="muted">{TEXT.testimonialsSub}</p>
            <Stars n={rating} onPick={setRating} size={26} />
            <div className="form__row">
              <label><span>Your name</span><input name="name" required /></label>
              <label><span>Task performed</span><input name="task" required /></label>
            </div>
            <label><span>Your review</span><textarea name="message" rows={4} required /></label>
            {status === 'error' && <p className="form__error">Something went wrong — please try again or email us directly.</p>}
            <button className="btn btn--gold" disabled={status === 'sending'}>
              {status === 'sending' ? 'Submitting…' : 'Submit for approval'}
            </button>
          </form>
        )}
      </motion.div>
    </motion.div>
  )
}

export default function Testimonials() {
  const [i, setI] = useState(0)
  const [dir, setDir] = useState(1)
  const [modal, setModal] = useState(false)
  const t = TESTIMONIALS[i]

  const go = (d) => {
    setDir(d)
    setI((v) => (v + d + TESTIMONIALS.length) % TESTIMONIALS.length)
  }

  useEffect(() => {
    if (modal) return
    const id = setInterval(() => go(1), 7000)
    return () => clearInterval(id)
  }, [modal, i])

  return (
    <section className="section" id="testimonials">
      <div className="container">
        <SectionHead
          center
          eyebrow="Testimonials"
          title={<>What our <em>clients</em> say.</>}
          text={TEXT.testimonialsIntro}
        />

        <div className="testimonial">
          <Quote className="testimonial__quote" size={64} />
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={i}
              custom={dir}
              initial={{ opacity: 0, x: 40 * dir }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 * dir }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="testimonial__body"
            >
              <Stars n={5} size={18} />
              <blockquote>"{t.review}"</blockquote>
              <div className="testimonial__who">
                <span className="avatar">{t.name.charAt(0)}</span>
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.task}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="testimonial__controls">
            <button onClick={() => go(-1)} aria-label="Previous review"><ChevronLeft /></button>
            <div className="dots">
              {TESTIMONIALS.map((_, k) => (
                <button key={k} className={k === i ? 'is-active' : ''} onClick={() => { setDir(k > i ? 1 : -1); setI(k) }} aria-label={`Review ${k + 1}`} />
              ))}
            </div>
            <button onClick={() => go(1)} aria-label="Next review"><ChevronRight /></button>
          </div>
        </div>

        <div className="center-row">
          <button className="btn btn--ghost-dark" onClick={() => setModal(true)}>Leave a review</button>
        </div>
      </div>

      <AnimatePresence>{modal && <ReviewModal onClose={() => setModal(false)} />}</AnimatePresence>
    </section>
  )
}
