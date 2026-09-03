import { participantInfo } from '../../data/content.js';

export default function ParticipantInfo() {
  return (
    <section className="section-container panel-section compact-panel reveal" aria-label="Participant information">
      <p className="eyebrow">Participant Info</p>
      <div className="info-grid">
        {participantInfo.map(({ icon: Icon, title }) => (
          <article className="info-card" key={title}>
            <Icon size={34} aria-hidden="true" />
            <h2>{title}</h2>
          </article>
        ))}
      </div>
    </section>
  );
}
