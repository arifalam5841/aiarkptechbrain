import ideaMeetImage from '../../assets/images/ideameet.webp';
import { aboutChips } from '../../data/content.js';

export default function AboutEvent() {
  return (
    <section className="about-section section-container reveal" id="about">
      <div className="about-copy">
        <p className="eyebrow">About TechBrain</p>
        <h2>
          Where Ideas
          <br />
          Meet Opportunity
        </h2>
        <p>
          TechBrain 4.0 is an annual state-level technical competition where students
          present ideas, build AI solutions and compete beyond the classroom.
        </p>
        <div className="chip-row">
          {aboutChips.map(({ icon: Icon, title }) => (
            <span className="mini-chip" key={title}>
              <Icon size={20} aria-hidden="true" />
              {title}
            </span>
          ))}
        </div>
      </div>

      <div className="about-visual">
        <span className="drawn-arrow">↗</span>
        <img
          className="about-photo"
          src={ideaMeetImage}
          alt="Students reviewing a technical dashboard and system diagrams"
          width="1800"
          height="946"
          loading="lazy"
        />
        <span className="stacked-sticker">
          Build
          <br />
          Present
          <br />
          Compete
        </span>
      </div>
    </section>
  );
}
