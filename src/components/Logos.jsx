const TECH_STACK = [
  'Go',
  'JavaScript',
  'TypeScript',
  'React',
  'PostgreSQL',
  'Docker',
  'Tailwind CSS',
];

/**
 * Logos
 * -----
 * A quiet strip listing the core technologies, kept intentionally muted
 * so it doesn't compete with the surrounding sections.
 */
export default function Logos() {
  return (
    <div className="py-14">
      <p className="text-center text-xs font-semibold uppercase tracking-[0.28em] text-gray-500">
        Core technologies &amp; frameworks
      </p>
      <ul className="section-shell mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-70">
        {TECH_STACK.map((tech) => (
          <li
            key={tech}
            className="font-display text-xl font-bold text-gray-300 transition-colors hover:text-jungle-400"
          >
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
}
