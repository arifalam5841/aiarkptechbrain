import { Phone } from 'lucide-react';
import { socialLinks } from '../../data/content.js';

export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="section-container footer-grid">
        <div className="footer-brand">
          <h2>A.I.A.R.K. POLYTECHNIC</h2>
          <p>Computer Department</p>
          <div className="social-row" aria-label="Social links">
            {socialLinks.map(({ icon: Icon, label, href }) => (
              <a key={label} href={href} aria-label={label}>
                <Icon size={17} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <a className="contact-card" href="https://wa.me/917385594910" target="_blank" rel="noreferrer">
          <strong>Mansi Shimpi</strong>
          <span>Lecturer, CO Dept</span>
          <span className="contact-phone">
            <Phone size={14} aria-hidden="true" />
            +91 73855 94910
          </span>
        </a>

        <a className="contact-card" href="https://wa.me/919167788884" target="_blank" rel="noreferrer">
          <strong>Arif Alam</strong>
          <span>Volunteer</span>
          <span className="contact-phone">
            <Phone size={14} aria-hidden="true" />
            +91 91677 88884
          </span>
        </a>

        <a className="contact-card" href="https://wa.me/919594810602" target="_blank" rel="noreferrer">
          <strong>Qureshi Zaid</strong>
          <span>Volunteer</span>
          <span className="contact-phone">
            <Phone size={14} aria-hidden="true" />
            +91 95948 10602
          </span>
        </a>
      </div>

      <div className="section-container footer-bottom">
        <p>© 2026 A.I.A.R.K. Polytechnic. All rights reserved.</p>
        <div>
          <a href="/privacy">Privacy Policy</a>
          <span>|</span>
          <a href="/terms">Terms</a>
        </div>
      </div>
    </footer>
  );
}
