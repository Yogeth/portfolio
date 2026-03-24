import resume from '../../data/resume';
import FadeIn from '../FadeIn/FadeIn';
import SectionHeading from '../SectionHeading/SectionHeading';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects">
      <div className="section-container">
        <FadeIn>
          <SectionHeading number="03." title="Projects" />
        </FadeIn>

        <div className="projects__list">
          {resume.projects.map((project) => (
            <FadeIn key={project.name} delay={0.1}>
              <div className="project-card">
                {/* Header */}
                <div className="project-card__header">
                  <div className="project-card__meta">
                    <div className="project-card__badges">
                      <span className="project-card__type">{project.type}</span>
                      <span className="project-card__period">{project.period}</span>
                    </div>
                    <h3 className="project-card__name">{project.name}</h3>
                  </div>
                  <div className="project-card__icon">🗂️</div>
                </div>

                {/* Bullet points */}
                <ul className="project-card__points">
                  {project.points.map((point, i) => (
                    <li key={i} className="project-card__point">
                      <span className="project-card__bullet">▹</span>
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div className="project-card__tech">
                  {project.tech.map((t) => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
