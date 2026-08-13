import { useState } from 'react';

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

/**
 * Navbar
 * ------
 * Sticky top bar with a glassy black-green finish. It's controlled by App:
 * `active` is the current page, and `onNavigate(id)` switches pages. On
 * small screens the links collapse behind a hamburger toggle.
 */
export default function Navbar({ active, onNavigate }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-jungle-700/30 bg-carbon-950/80 backdrop-blur-md">
      <nav className="section-shell flex h-16 items-center justify-between">
        {/* Brand */}
        <button
          type="button"
          onClick={() => onNavigate('home')}
          className="font-display text-xl font-extrabold tracking-widest"
        >
          EJAO<span className="text-jungle-400">.DEV</span>
        </button>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 text-sm text-gray-300 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <button
                type="button"
                onClick={() => onNavigate(link.id)}
                aria-current={active === link.id ? 'page' : undefined}
                className={`relative py-1 transition-colors hover:text-jungle-400 ${
                  active === link.id ? 'font-semibold text-jungle-400' : ''
                }`}
              >
                {link.label}
                {/* Active underline */}
                <span
                  aria-hidden
                  className={`absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-jungle-400 transition-all duration-300 ${
                    active === link.id ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="mailto:odhiamboemmaculatejaneakinyi@gmail.com"
          className="hidden rounded-lg bg-jungle-500 px-5 py-2 text-sm font-bold text-carbon-950 shadow-glow-green transition-all hover:bg-jungle-400 md:block"
        >
          Get in Touch
        </a>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="rounded-md border border-carbon-700 px-3 py-2 text-gray-300 md:hidden"
        >
          {open ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <ul className="section-shell flex flex-col gap-4 border-t border-carbon-700 py-5 text-sm text-gray-300 md:hidden">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <button
                type="button"
                onClick={() => {
                  onNavigate(link.id);
                  setOpen(false);
                }}
                className={`block py-1 transition-colors hover:text-jungle-400 ${
                  active === link.id ? 'font-semibold text-jungle-400' : ''
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <a
              href="mailto:odhiamboemmaculatejaneakinyi@gmail.com"
              className="inline-block rounded-lg bg-jungle-500 px-5 py-2 text-sm font-bold text-carbon-950"
            >
              Get in Touch
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
