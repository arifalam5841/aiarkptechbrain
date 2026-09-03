import { quickFacts } from '../../data/content.js';

export default function QuickFacts() {
  return (
    <section className="quick-facts section-container reveal" aria-label="Quick event facts">
      {quickFacts.map(({ icon: Icon, title, text }) => (
        <article className="fact-card" key={title}>
          <Icon size={44} aria-hidden="true" />
          <div>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
        </article>
      ))}
    </section>
  );
}
