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
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#121214]/80 backdrop-blur-md">
      <nav className="section-shell flex h-16 items-center justify-between">
        {/* Brand */}
        <button
          type="button"
          onClick={() => onNavigate('home')}
          className="font-display text-xl font-extrabold tracking-widest text-white"
        >
          EJAO<span className="text-white">.DEV</span>
        </button>

        {/* Desktop links */}
        <ul className="hidden shrink-0 items-center gap-10 whitespace-nowrap text-sm text-gray-400 xl:gap-14 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <button
                type="button"
                onClick={() => onNavigate(link.id)}
                aria-current={active === link.id ? 'page' : undefined}
                className={`relative whitespace-nowrap py-1 transition-colors duration-300 hover:text-white ${
                  active === link.id ? 'font-semibold text-white' : ''
                }`}
              >
                {link.label}
                {/* Active underline */}
                <span
                  aria-hidden
                  className={`absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-neon-500 shadow-[0_0_10px_rgba(224,64,251,0.9)] transition-all duration-300 ${
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
          className="hidden shrink-0 rounded-full border border-neon-500/70 px-5 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-neon-500/10 hover:shadow-[0_0_20px_-4px_rgba(224,64,251,0.6)] lg:block"
        >
          Get in Touch
        </a>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="rounded-md border border-white/10 px-3 py-2 text-gray-300 lg:hidden"
        >
          {open ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <ul className="section-shell flex flex-col gap-4 border-t border-white/10 py-5 text-sm text-gray-400 lg:hidden">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <button
                type="button"
                onClick={() => {
                  onNavigate(link.id);
                  setOpen(false);
                }}
                className={`block py-1 transition-colors duration-300 hover:text-white ${
                  active === link.id ? 'font-semibold text-white' : ''
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <a
              href="mailto:odhiamboemmaculatejaneakinyi@gmail.com"
              className="inline-block rounded-full border border-neon-500/70 px-5 py-2 text-sm font-semibold text-white"
            >
              Get in Touch
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
