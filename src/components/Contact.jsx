import { useState } from 'react'
import { Mail, MapPin, Phone, Send, CheckCircle2 } from 'lucide-react'
import { COMPANY, SERVICES, TEXT } from '../data.js'
import Reveal, { SectionHead } from './Reveal.jsx'
import { sendForm } from '../lib/email.js'

export default function Contact() {
  const [status, setStatus] = useState('idle')

  const submit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    const data = Object.fromEntries(new FormData(e.target))
    const ok = await sendForm({ ...data, subject: `New enquiry: ${data.service}` })
    setStatus(ok ? 'done' : 'error')
    if (ok) e.target.reset()
  }

  const cards = [
    { icon: Phone, label: 'Give us a call', value: COMPANY.phone, href: COMPANY.phoneHref },
    { icon: Mail, label: 'Email us', value: COMPANY.email, href: `mailto:${COMPANY.email}` },
    { icon: MapPin, label: 'Our address', value: COMPANY.city },
  ]

  return (
    <section className="section section--alt" id="contact">
      <div className="container contact">
        <div className="contact__info">
          <SectionHead
            eyebrow="Reach out"
            title={<>Get in <em>touch</em>.</>}
            text={TEXT.contactIntro}
          />
          <div className="contact__cards">
            {cards.map(({ icon: Icon, label, value, href }, i) => (
              <Reveal key={label} delay={0.08 * i}>
                {href ? (
                  <a href={href} className="contact__card"><Icon size={20} /><div><span>{label}</span><strong>{value}</strong></div></a>
                ) : (
                  <div className="contact__card"><Icon size={20} /><div><span>{label}</span><strong>{value}</strong></div></div>
                )}
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.1} className="contact__form">
          {status === 'done' ? (
            <div className="form__success">
              <CheckCircle2 size={48} />
              <h3>Message sent</h3>
              <p>Thank you — we'll be in touch shortly.</p>
              <button className="btn btn--ghost-dark" onClick={() => setStatus('idle')}>Send another</button>
            </div>
          ) : (
            <form className="form" onSubmit={submit}>
              <div className="form__row">
                <label><span>Full name</span><input name="name" autoComplete="name" required /></label>
                <label><span>Phone</span><input name="phone" type="tel" autoComplete="tel" /></label>
              </div>
              <label><span>Email</span><input name="email" type="email" autoComplete="email" required /></label>
              <label>
                <span>Service</span>
                <select name="service" defaultValue={SERVICES[0].title}>
                  {SERVICES.map((s) => <option key={s.key}>{s.title}</option>)}
                  <option>Something else</option>
                </select>
              </label>
              <label><span>Tell us about your project</span><textarea name="message" rows={5} required /></label>
              {status === 'error' && <p className="form__error">Something went wrong — please call or email us directly.</p>}
              <button className="btn btn--gold btn--block" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : <>Send message <Send size={16} /></>}
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}
