import resume from '../../data/resume';
import FadeIn from '../FadeIn/FadeIn';
import SectionHeading from '../SectionHeading/SectionHeading';
import './Skills.css';

const Skills = () => {
  return (
    <section id="skills">
      <div className="section-container">
        <FadeIn>
          <SectionHeading number="02." title="Technical Skills" />
        </FadeIn>

        <div className="skills__grid">
          {resume.skills.map((skill, index) => (
            <FadeIn key={skill.category} delay={index * 0.07}>
              <div className="skill-card">
                <p className="skill-card__category">{skill.category}</p>
                <div className="skill-card__tags">
                  {skill.items.map((item) => (
                    <span key={item} className="skill-tag">{item}</span>
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

export default Skills;
