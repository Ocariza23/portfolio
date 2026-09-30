import { skills } from '../data/config'

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <span className="section-kicker">Skills</span>
        <h2 className="section-heading">What I build with</h2>
        <p className="section-intro">
          Grouped by where each tool shows up in my day-to-day work, from the interfaces
          people use down to the data underneath them.
        </p>

        <div className="skill-rows">
          {skills.map((group) => (
            <div className="skill-row" key={group.group}>
              <span className="skill-row-title">{group.group}</span>
              <div className="skill-tags">
                {group.items.map((item) => (
                  <span className="skill-tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
