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
    <footer className="border-t border-jungle-700/25 bg-carbon-900/80 py-8">
      <div className="section-shell flex flex-col items-center justify-between gap-4 text-sm text-gray-500 md:flex-row">
        <p>
          <span className="font-bold tracking-wider text-white">ODHIAMBO EMMACULATE JANE AKINYI</span>
          {' '}— Kisumu, Kenya
        </p>

        <ul className="flex gap-6">
          {SOCIAL_LINKS.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-jungle-400"
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
