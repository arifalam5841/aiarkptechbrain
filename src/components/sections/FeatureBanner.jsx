import { ArrowRight, BrainCircuit } from 'lucide-react';

export default function FeatureBanner() {
  return (
    <section className="section-container reveal">
      <div className="feature-banner blueprint">
        <BrainCircuit className="brain-icon" size={92} aria-hidden="true" />
        <div>
          <h2>TechBrain 4.0</h2>
          <p>Build ideas. Present boldly. Compete statewide.</p>
          <a className="primary-button" href="#events">
            Register Your Team
            <ArrowRight size={18} aria-hidden="true" />
          </a>
        </div>
        <span className="banner-arrow">↗</span>
      </div>
    </section>
  );
}
