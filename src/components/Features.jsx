import useReveal from '../hooks/useReveal';

const SKILL_GROUPS = [
  {
    index: '01',
    status: 'Core Foundation',
    title: 'Languages',
    summary:
      'The languages I reach for to build dependable services and polished, responsive interfaces.',
    tech: ['Go', 'Python', 'JavaScript', 'HTML', 'CSS'],
    scope: 'Primary: Backend & Web',
    tier: 'Production Ready',
    tierClass: 'text-neon-500/70',
  },
  {
    index: '02',
    status: 'Active Stack',
    title: 'Frameworks & Stack',
    summary:
      'Battle-tested frameworks and tooling I use to ship fast APIs and modern frontends.',
    tech: ['Gin', 'React', 'Next.js', 'Tailwind CSS', 'SQLite', 'Docker', 'Docker Compose'],
    scope: 'Architecture: Microservices',
    tier: 'High Performance',
    tierClass: 'text-purple-400/70',
  },
  {
    index: '03',
    status: 'DevOps & Infra',
    title: 'Tools & Ecosystem',
    summary:
      'Everyday tools and platforms that keep versioning, integration, and delivery smooth.',
    tech: ['REST APIs', 'Git', 'GitHub', 'SQL', 'Node.js', 'npm'],
    scope: 'Workflow: CI/CD & Versioning',
    tier: 'Daily Drivers',
    tierClass: 'text-sky-400/70',
  },
];

/**
 * Features
 * --------
 * Skills section — three bento cards grouping the language, framework, and
 * tool stacks used day to day. Cards reveal with a short stagger.
 */
export default function Features() {
  const { ref, visible } = useReveal();

  return (
    <section id="skills" className="section-shell relative py-16 md:py-24">
      {/* Section heading */}
      <div className="max-w-2xl">
        <span className="inline-flex items-center gap-2 rounded-full border border-neon-500/30 bg-neon-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-neon-400">
          <span className="h-1.5 w-1.5 rounded-full bg-neon-500 shadow-[0_0_8px_rgba(224,64,251,0.9)]" />
          Skills
        </span>
        <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-white md:text-5xl">
          Technical skills &amp; expertise
        </h2>
        <p className="mt-4 text-gray-400">
          A focused toolkit for building high-performance distributed systems
          and web applications, end to end.
        </p>
      </div>

      {/* Skill bento cards */}
      <div
        ref={ref}
        className={`reveal-group mt-12 grid gap-6 md:grid-cols-3 ${
          visible ? 'is-visible' : ''
        }`}
      >
        {SKILL_GROUPS.map((group, index) => (
          <article
            key={group.index}
            className={`group reveal reveal-delay-${
              index + 1
            } relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-neon-500/30 hover:bg-white/[0.04] hover:shadow-[0_24px_60px_-24px_rgba(224,64,251,0.5)]`}
          >
            {/* Header row */}
            <div className="flex items-center justify-between gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-neon-500/30 bg-neon-500/10 font-display text-xs font-bold text-neon-400">
                [{group.index}]
              </span>
              <span className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-500">
                <span className="h-1.5 w-1.5 rounded-full bg-neon-500 shadow-[0_0_8px_rgba(224,64,251,0.9)]" />
                {group.status}
              </span>
            </div>

            {/* Title & summary */}
            <h3 className="mt-6 font-display text-2xl font-bold text-white">
              {group.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-400">
              {group.summary}
            </p>

            {/* Tech badge cluster */}
            <ul className="mt-6 flex flex-wrap gap-2">
              {group.tech.map((tech) => (
                <li
                  key={tech}
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-gray-300 transition-all duration-300 hover:border-neon-500/50 hover:bg-neon-500/10 hover:text-white"
                >
                  <span className="flex h-4 w-4 items-center justify-center rounded-[5px] bg-neon-500/15 text-[9px] font-bold text-neon-400">
                    {tech.charAt(0)}
                  </span>
                  {tech}
                </li>
              ))}
            </ul>

            {/* Footer metadata */}
            <div className="mt-auto flex items-center justify-between gap-3 border-t border-white/[0.06] pt-4 text-[11px]">
              <span className="text-gray-500">{group.scope}</span>
              <span className={`font-semibold ${group.tierClass}`}>
                {group.tier}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
