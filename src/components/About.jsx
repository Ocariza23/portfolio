import { profile } from '../data/config'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container about-grid">
        <div>
          <span className="section-kicker">About</span>
          <h2 className="section-heading">Software that has to work the first time</h2>
          <p className="about-text">{profile.intro}</p>
        </div>

        <ul className="focus-list">
          {profile.focus.map((line, i) => (
            <li key={i}>
              <span className="focus-marker">·</span>
              <span>{line}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
