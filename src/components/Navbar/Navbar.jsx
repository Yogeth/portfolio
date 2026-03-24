import { useEffect, useState } from 'react';
import resume from '../../data/resume';
import './Navbar.css';

const NAV_LINKS = ['About', 'Skills', 'Projects', 'Education'];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]     = useState('About');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((n) => document.getElementById(n.toLowerCase()));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const id = e.target.id;
            setActive(id.charAt(0).toUpperCase() + id.slice(1));
          }
        });
      },
      { threshold: 0.45 }
    );
    sections.forEach((s) => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__logo">
        YCR<span className="navbar__logo-dot">.</span>
      </div>

      <div className="navbar__links">
        {NAV_LINKS.map((link) => (
          <button
            key={link}
            className={`navbar__link ${active === link ? 'navbar__link--active' : ''}`}
            onClick={() => scrollTo(link)}
          >
            {link}
          </button>
        ))}
        <a href={`mailto:${resume.email}`} className="navbar__hire-btn">
          Hire Me
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
