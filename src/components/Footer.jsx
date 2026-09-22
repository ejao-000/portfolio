const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com/ejao-000' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/emmaculate-jane-akinyi-odhiambo-479215403/' },
  { label: 'Dev.to', href: 'https://dev.to/emma_jane' },
];

/**
 * Footer
 * ------
 * Simple closing bar — name, social links, and copyright.
 */
export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-black/40 py-8">
      <div className="section-shell flex flex-col items-center justify-between gap-5 text-xs text-gray-500 md:flex-row">
        <p className="tracking-wide">
          <span className="font-semibold text-gray-300">
            ODHIAMBO EMMACULATE JANE AKINYI
          </span>
          <span className="text-gray-600"> — Kisumu, Kenya</span>
        </p>

        <ul className="flex gap-6">
          {SOCIAL_LINKS.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="transition-colors duration-300 hover:text-neon-400"
              >
                {social.label}
              </a>
            </li>
          ))}
        </ul>

        <p>© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
}
