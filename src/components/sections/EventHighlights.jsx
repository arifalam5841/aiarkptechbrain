import { ArrowRight } from 'lucide-react';
import { highlights } from '../../data/content.js';
import momentOne from '../../assets/images/moment1.jpeg';
import momentTwo from '../../assets/images/moment2.jpeg';
import momentThree from '../../assets/images/moment3.jpeg';

const momentImages = [momentOne, momentTwo, momentThree];

export default function EventHighlights() {
  return (
    <section className="section-container panel-section reveal" id="highlights">
      <div className="highlight-heading">
        <h2>Previous <span>Moments</span></h2>
        <p>Demos, Q&A, awards, and winning moments.</p>
      </div>
      <div className="highlight-row">
        {highlights.map((item, index) => (
          <article className="highlight-card" key={item.title}>
            <img src={momentImages[index]} alt={item.title} loading="lazy" />
            <div className="highlight-label">
              <strong>{item.title}</strong>
              <span>
                <ArrowRight size={18} aria-hidden="true" />
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
