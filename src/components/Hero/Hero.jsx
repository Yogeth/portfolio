import { useEffect, useState } from 'react';
import resume from '../../data/resume';
import './Hero.css';

const Hero = () => {
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(resume.title.slice(0, i + 1));
      i++;
      if (i >= resume.title.length) clearInterval(interval);
    }, 65);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="hero">
      <div className="hero__inner">

        {/* Avatar */}
        <div className="hero__avatar">
          <span className="hero__avatar-emoji">👨‍💻</span>
          <span className="hero__status-dot" title="Available for work" />
        </div>

        {/* Content */}
        <div className="hero__content">
          <span className="hero__badge">Available for Opportunities</span>

          <h1 className="hero__name">
            {resume.name.split(' ')[0]}
            <br />
            <span className="hero__name--accent">
              {resume.name.split(' ').slice(1).join(' ')}
            </span>
          </h1>

          <p className="hero__title">
            {typedText}
            <span className="hero__cursor">|</span>
          </p>

          <p className="hero__summary">{resume.summary}</p>

          {/* Contact */}
          <div className="hero__contact">
            <span className="hero__contact-item">📍 {resume.location}</span>
            <span className="hero__contact-item">📧 {resume.email}</span>
            <span className="hero__contact-item">📱 {resume.phone}</span>
          </div>

          {/* CTA */}
          <div className="hero__cta">
            <a
              href={resume.github}
              target="_blank"
              rel="noreferrer"
              className="hero__cta-btn hero__cta-btn--ghost"
            >
              ⚡ GitHub
            </a>
            <a
              href={resume.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hero__cta-btn hero__cta-btn--indigo"
            >
              🔗 LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll-hint">
        <span>Scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
};

export default Hero;
