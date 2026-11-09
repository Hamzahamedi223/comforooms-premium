import { ABOUT_IMAGE, COMPANY, DIRECTOR_IMAGE, DIRECTOR_MESSAGE, FEATURES } from '../data.js'
import Reveal from './Reveal.jsx'

export default function About() {
  return (
    <section className="section section--alt" id="about">
      <div className="container about">
        <div className="about__media">
          <Reveal className="about__img about__img--main"><img src={ABOUT_IMAGE} alt="ComfoRooms extension project" loading="lazy" /></Reveal>
          <Reveal delay={0.2} className="about__img about__img--director">
            <img src={DIRECTOR_IMAGE} alt={`${COMPANY.director}, Director of ${COMPANY.legal}`} loading="lazy" />
          </Reveal>
          <Reveal delay={0.35} className="about__badge">
            <span><strong>{COMPANY.director}</strong><br />Director · Civil Engineer</span>
          </Reveal>
        </div>

        <div className="about__text">
          <Reveal><span className="eyebrow">About us</span></Reveal>
          <Reveal delay={0.08}><h2 className="h2">A message from <em>our director</em>.</h2></Reveal>
          <Reveal delay={0.16}>
            <blockquote className="about__quote">{DIRECTOR_MESSAGE}</blockquote>
          </Reveal>
          <Reveal delay={0.22}>
            <div className="signature">{COMPANY.director}</div>
          </Reveal>

          <div className="stats">
            {FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={0.1 * i} className="stat">
                <strong>{f.title}</strong>
                <span>{f.text}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
