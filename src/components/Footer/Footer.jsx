import resume from '../../data/resume';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__line">
        Built with <span className="footer__heart">♥</span> by{' '}
        <span className="footer__name">{resume.name}</span>
      </p>
      <p className="footer__meta">
        {resume.email} · {resume.phone}
      </p>
    </footer>
  );
};

export default Footer;
