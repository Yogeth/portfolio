import './SectionHeading.css';

const SectionHeading = ({ number, title }) => {
  return (
    <div className="section-heading">
      <span className="section-heading__number">{number}</span>
      <h2 className="section-heading__title">{title}</h2>
      <div className="section-heading__line" />
    </div>
  );
};

export default SectionHeading;
