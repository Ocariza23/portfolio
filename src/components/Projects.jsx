import { projects } from '../data/config'

function initials(name) {
  return name
    .split(' ')
    .filter((w) => w.length > 0)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()
}

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <span className="section-kicker">Projects</span>
        <h2 className="section-heading">Things I've built</h2>
        <p className="section-intro">
          A mix of shipped work and examples — swap the placeholders in{' '}
          <code>src/data/config.js</code> for your own.
        </p>

        <div className="project-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.name}>
              <div className="project-glyph">{initials(project.name)}</div>
              <h3 className="project-name">{project.name}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span className="project-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a
                  className={`project-link ${project.github ? '' : 'disabled'}`}
                  href={project.github || undefined}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a
                  className={`project-link ${project.demo ? '' : 'disabled'}`}
                  href={project.demo || undefined}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
