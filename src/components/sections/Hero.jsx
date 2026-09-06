import {
  ArrowRight,
  CalendarDays,
  Code2,
  MousePointer2,
} from 'lucide-react';
import topImageOne from '../../assets/images/top1black.webp';

export default function Hero() {
  return (
    <section className="hero-section blueprint" id="top">
      <div className="section-container hero-grid reveal">
        <div className="hero-copy">
          <div className="hero-code floating-code">
            <Code2 size={22} aria-hidden="true" />
          </div>
          <p className="hero-kicker">Ship Code Repeat</p>
          <h1>
            <span>Think.</span>
            <span>Build.</span>
            <span>Compete.</span>
            <strong>TechBrain 4.0</strong>
          </h1>
          <p className="hero-subtitle">
            Annual State-Level
            <br />
            Technical Competition
          </p>

          <div className="date-badge">
            <CalendarDays size={18} aria-hidden="true" />
            EVENT DATE - 1st October
          </div>

          <div className="button-row">
            <a className="primary-button" href="#events">
              Register Now
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a className="secondary-button" href="#events">
              View Events
            </a>
          </div>

          <p className="organizer">
            Computer Department <span>-</span> Anjuman-I-Islam A. R. Kalsekar Polytechnic
          </p>
        </div>

        <div className="hero-visual" aria-label="TechBrain event preview">
          <div className="hero-code-panel" aria-hidden="true">
            <div className="panel-dots">
              <i />
              <i />
              <i />
            </div>
            <ol>
              <li># TechBrain 4.0</li>
              <li>event = "PromptIgnite"</li>
              <li>team.build(ai_solution)</li>
              <li>demo.live()</li>
              <li>submit(scoreboard)</li>
            </ol>
          </div>

          <div className="hero-dashboard-panel" aria-hidden="true">
            <img src={topImageOne} alt="" width="1053" height="592" loading="eager" />
          </div>

          <span className="node-chip node-api">API</span>
          <span className="node-chip node-db">DB</span>
          <div className="code-window">
            <span>paper.review()</span>
            <span>prototype.demo()</span>
          </div>
          <div className="terminal-chip">
            <span>git commit -m</span>
            <strong>'Build the future'</strong>
          </div>
          <div className="sticker">
            SHIP
            <br />
            CODE
            <br />
            REPEAT
          </div>
          <MousePointer2 className="cursor-sketch" size={34} aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
