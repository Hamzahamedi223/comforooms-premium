import { SECTORS } from '../data.js'
import Reveal, { SectionHead } from './Reveal.jsx'

export default function Process() {
  return (
    <section className="section" id="process">
      <div className="container">
        <SectionHead center eyebrow="What we build" title={<>Fast and <em>reliable</em> service.</>} />
        <div className="sectors">
          {SECTORS.map((s, i) => (
            <Reveal key={s.title} delay={0.1 * i} className="sector">
              <img src={s.image} alt={s.title} loading="lazy" />
              <div className="sector__body">
                <span className="process__n">0{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
