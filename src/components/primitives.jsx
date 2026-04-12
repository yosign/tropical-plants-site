export function Button({ children, variant = 'primary', className = '', ...props }) {
  return <button className={`btn ${variant === 'secondary' ? 'btn-secondary' : 'btn-primary'} ${className}`.trim()} {...props}>{children}</button>
}

export function Badge({ children }) {
  return <span className="badge">{children}</span>
}

export function Card({ children, className = '', clickable = false, ...props }) {
  return <article className={`shell-card ${className} ${clickable ? 'is-clickable' : ''}`.trim()} {...props}>{children}</article>
}

export function CardHeader({ children }) {
  return <div className="card-header">{children}</div>
}

export function CardTitle({ children }) {
  return <h3>{children}</h3>
}

export function CardContent({ children }) {
  return <div className="card-content">{children}</div>
}

export function StatCard({ label, value }) {
  return <article className="stat-card"><span>{label}</span><strong>{value}</strong></article>
}

export function SectionHeader({ badgeLabel, title, description = '', compact = false }) {
  return (
    <div className={`section-header ${compact ? 'section-header--tight' : ''}`.trim()}>
      <div>
        <Badge>{badgeLabel}</Badge>
        <h2>{title}</h2>
      </div>
      {description ? <p>{description}</p> : null}
    </div>
  )
}

export function PlantCard({ plant, onClick }) {
  return (
    <Card className="plant-card" clickable onClick={onClick}>
      <div className="plant-card__media"><img src={plant.cover} alt={plant.nameCn} className="plant-card__image" /></div>
      <div className="plant-card__body">
        <div className="card-topline"><Badge>{plant.familyNameCn}</Badge><Badge>{plant.genusNameCn}</Badge></div>
        <h3>{plant.nameCn}</h3>
        <p className="latin">{plant.nameLatin}</p>
        <p>{plant.headline}</p>
        <div className="plant-card__meta"><span>难度：{plant.difficulty}</span><span>{plant.placement}</span></div>
      </div>
    </Card>
  )
}
