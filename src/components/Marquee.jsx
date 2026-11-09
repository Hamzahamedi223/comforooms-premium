const ITEMS = ['Bathroom Renovations', 'Business Renovations', 'Outdoor Spaces', 'Extensions', 'Kitchen Renovation', 'Landscaping', 'Plumbing', 'Refurbishment']

export default function Marquee() {
  const row = [...ITEMS, ...ITEMS]
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {row.map((t, i) => (
          <span key={i}>{t}<i>✦</i></span>
        ))}
      </div>
    </div>
  )
}
