import { ChevronLeft, ChevronRight } from 'lucide-react';

const topics = ['AI Hackathon', 'Paper Presentation', 'Innovation', 'Compete', 'Create'];

export default function MarqueeBar() {
  return (
    <div className="marquee-bar" aria-label="Event topics">
      <ChevronLeft size={24} aria-hidden="true" />
      <div className="marquee-track">
        <div>
          {[...topics, ...topics, ...topics].map((topic, index) => (
            <span key={`${topic}-${index}`}>
              {topic}
              <i />
            </span>
          ))}
        </div>
      </div>
      <ChevronRight size={24} aria-hidden="true" />
    </div>
  );
}
