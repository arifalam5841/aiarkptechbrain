import { useEffect, useState } from 'react';
import { bottomNav } from '../../data/content.js';

export default function MobileBottomNav() {
  const [active, setActive] = useState('events');

  useEffect(() => {
    const sections = bottomNav
      .filter((item) => item.href.startsWith('#'))
      .map((item) => document.getElementById(item.section))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: '-35% 0px -50% 0px', threshold: 0.01 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="mobile-bottom-nav" aria-label="Mobile section navigation">
      {bottomNav.map(({ icon: Icon, label, href, section }) => (
        <a
          key={label}
          className={active === section ? 'is-active' : ''}
          href={href}
          aria-current={active === section ? 'page' : undefined}
        >
          <Icon size={22} aria-hidden="true" />
          <span>{label}</span>
        </a>
      ))}
    </nav>
  );
}
