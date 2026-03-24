import useInView from '../../hooks/useInView';
import './FadeIn.css';

const FadeIn = ({ children, delay = 0, className = '' }) => {
  const [ref, visible] = useInView();

  return (
    <div
      ref={ref}
      className={`fade-in ${visible ? 'fade-in--visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};

export default FadeIn;
