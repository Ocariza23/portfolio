import { profile, ledgerFeed } from '../data/config'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div>
          <span className="hero-eyebrow">{profile.location}</span>
          <h1 className="hero-name">{profile.name}</h1>
          <p className="hero-role">{profile.title}</p>
          <p className="hero-tagline">{profile.tagline}</p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View my work
            </a>
            <a href="#contact" className="btn btn-ghost">
              Contact me
            </a>
          </div>
        </div>

        <div className="ledger" aria-hidden="true">
          <div className="ledger-head">
            <span>inbound message queue</span>
            <span className="ledger-head-dots">
              <span /><span /><span />
            </span>
          </div>
          {ledgerFeed.map((row) => (
            <div className="ledger-row" key={row.code}>
              <span className="ledger-code">{row.code}</span>
              <span className="ledger-label">{row.label}</span>
              <span className={`ledger-status ${row.status}`}>{row.status}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
