import resume from '../../data/resume';
import FadeIn from '../FadeIn/FadeIn';
import SectionHeading from '../SectionHeading/SectionHeading';
import './Education.css';

const Education = () => {
  return (
    <section id="education">
      <div className="section-container">
        <FadeIn>
          <SectionHeading number="04." title="Education & Strengths" />
        </FadeIn>

        <div className="education__grid">

          {/* Education card */}
          <FadeIn delay={0.05}>
            <div className="info-card">
              <div className="info-card__icon info-card__icon--edu">🎓</div>
              <h3 className="info-card__title">{resume.education.degree}</h3>
              <p className="info-card__sub">{resume.education.institution}</p>
              <p className="info-card__meta">{resume.education.graduation}</p>
            </div>
          </FadeIn>

          {/* Strengths card */}
          <FadeIn delay={0.12}>
            <div className="info-card">
              <div className="info-card__icon info-card__icon--str">⚡</div>
              <h3 className="info-card__title info-card__title--mb">Core Strengths</h3>
              <ul className="strengths__list">
                {resume.strengths.map((strength) => (
                  <li key={strength} className="strengths__item">
                    <span className="strengths__check">✓</span>
                    <span className="strengths__text">{strength}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};

export default Education;
