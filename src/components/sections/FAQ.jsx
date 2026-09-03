import { Minus, Plus } from 'lucide-react';
import { useState } from 'react';
import { faqs } from '../../data/faq.js';

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="faq-section section-container panel-section reveal" id="faq">
      <span className="ghost-word">FAQ</span>
      <p className="eyebrow">Frequently Asked Questions</p>
      <div className="faq-list">
        {faqs.map((item, index) => {
          const active = open === index;
          const contentId = `faq-answer-${index}`;
          return (
            <article className={`faq-item ${active ? 'is-open' : ''}`} key={item.question}>
              <button
                type="button"
                aria-expanded={active}
                aria-controls={contentId}
                onClick={() => setOpen(active ? -1 : index)}
              >
                <span>{item.question}</span>
                {active ? <Minus size={19} /> : <Plus size={19} />}
              </button>
              <div className="faq-answer" id={contentId}>
                <p>{item.answer}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
