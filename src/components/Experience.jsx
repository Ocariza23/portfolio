import { experience } from '../data/config'

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <span className="section-kicker">Experience</span>
        <h2 className="section-heading">Where I've worked</h2>
        <p className="section-intro">
          Two years split between building enterprise banking software and leading a
          trainee engineering team.
        </p>

        <div className="timeline">
          {experience.map((job) => (
            <div className="timeline-item" key={job.company}>
              <span className="timeline-period">{job.period}</span>
              <h3 className="timeline-role">{job.role}</h3>
              <p className="timeline-company">{job.company}</p>
              <p className="timeline-stack">{job.stack}</p>
              <ul className="timeline-points">
                {job.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
