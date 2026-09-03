import { reasons } from '../../data/content.js';

export default function WhyParticipate() {
  return (
    <section className="section-container panel-section why-participate-section reveal">
      <p className="eyebrow">Why Participate</p>
      <div className="reason-grid">
        {reasons.map(({ icon: Icon, title, text }) => (
          <article className="dark-card" key={title}>
            <Icon size={44} aria-hidden="true" />
            <h2>{title}</h2>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
