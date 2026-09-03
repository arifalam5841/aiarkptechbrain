import { ArrowRight, Braces, Send } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="final-cta blueprint reveal">
      <div className="section-container cta-inner">
        <Braces size={46} aria-hidden="true" />
        <h2>
          Ready To Prove
          <br />
          Your <span>Tech Brain?</span>
        </h2>
        <Send className="plane-icon" size={46} aria-hidden="true" />
        <div className="cta-action">
          <a className="primary-button" href="#events">
            Register for TechBrain 4.0
            <ArrowRight size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
