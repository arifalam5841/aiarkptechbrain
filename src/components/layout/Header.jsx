import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import mainLogo from '../../assets/images/mainlogo.png';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Events', href: '#events' },
  { label: 'Highlights', href: '#highlights' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Venue', href: '#venue' },
  { label: 'Contact', href: '#contact' },
  { label: 'Register', href: '#events' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="TechBrain 4.0 home">
        <img className="brand-logo" src={mainLogo} alt="" />
        <span>A.I.A.R.K. POLYTECHNIC</span>
      </a>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {links.slice(0, -1).map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <a className="compact-register" href="#events">
          Register
        </a>
        <button
          className="icon-button"
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={24} /> : <Menu size={26} />}
        </button>
      </div>

      <div className={`mobile-menu ${open ? 'is-open' : ''}`}>
        {links.map((link) => {
          return (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          );
        })}
      </div>
    </header>
  );
}
