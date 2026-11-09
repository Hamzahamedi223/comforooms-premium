import { motion } from 'framer-motion'

export default function Reveal({ children, delay = 0, y = 32, className, as = 'div' }) {
  const M = motion[as]
  return (
    <M
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </M>
  )
}

export function SectionHead({ eyebrow, title, text, center }) {
  return (
    <div className={`section-head ${center ? 'center' : ''}`}>
      <Reveal><span className="eyebrow">{eyebrow}</span></Reveal>
      <Reveal delay={0.08}><h2 className="h2">{title}</h2></Reveal>
      {text && <Reveal delay={0.16}><p className="lead">{text}</p></Reveal>}
    </div>
  )
}
