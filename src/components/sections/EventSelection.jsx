import { ArrowRight } from 'lucide-react';
import { events } from '../../data/events.js';

function EventCard({ event }) {
  const MainIcon = event.icon;

  return (
    <article className="event-card blueprint">
      <div className="event-card-top">
        <span className="event-number">{event.number}</span>
        <div className="event-icon">
          {MainIcon ? <MainIcon size={44} aria-hidden="true" /> : <strong>{event.iconLabel}</strong>}
        </div>
      </div>
      <h3>{event.title}</h3>
      <p className="event-category">{event.category}</p>
      <p className="event-description">{event.description}</p>
      <div className="event-meta">
        {event.meta.map(({ icon: Icon, label }) => (
          <span key={label}>
            <Icon size={20} aria-hidden="true" />
            {label}
          </span>
        ))}
      </div>
      <p className="event-note">{event.note}</p>
      <a className="primary-button event-button" href={event.href}>
        Register
        <ArrowRight size={20} aria-hidden="true" />
      </a>
    </article>
  );
}

export default function EventSelection() {
  return (
    <section className="events-section section-container reveal" id="events">
      <div className="events-panel blueprint">
        <div className="section-heading">
          <p className="eyebrow">Two Events. One Stage.</p>
          <h2>
            Choose Your <span>Event</span>
          </h2>
          <p>Pick your challenge and represent your team.</p>

          <span className='lastdate'>(Registration  8th - 25th Sept)</span>

        </div>

        <div className="event-grid">
          {events.map((event) => (
            <EventCard event={event} key={event.slug} />
          ))}
        </div>
      </div>
    </section>
  );
}
