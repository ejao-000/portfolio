import useReveal from '../hooks/useReveal';
import SectionHeading from './SectionHeading';

const SKILL_AREAS = [
  {
    index: '01',
    title: 'Languages',
    detail: 'Go, HTML, CSS, TypeScript, JavaScript, SQL/SQLite, Dockerfile.',
  },
  {
    index: '02',
    title: 'Frameworks & Stack',
    detail: 'Gin, React + Next.js, Tailwind CSS, SQLite, Docker & Docker Compose.',
  },
  {
    index: '03',
    title: 'Tools & Ecosystem',
    detail: 'Git, GitHub, SQL, Firebase, Node.js, npm, REST APIs.',
  },
];

/**
 * Features
 * --------
 * Skills section — three cards grouping the language, framework, and tool
 * stacks used day to day. Cards reveal with a short stagger.
 */
export default function Features() {
  const { ref, visible } = useReveal();

  return (
    <section id="skills" className="section-shell py-16 md:py-24">
      <SectionHeading
        eyebrow="Skills"
        title="Technical skills & expertise"
        subtitle="A focused toolkit for building high-performance distributed systems and web applications, end to end."
      />

      {/* Skill cards */}
      <div
        ref={ref}
        className={`reveal-group mt-12 grid gap-6 md:grid-cols-3 ${
          visible ? 'is-visible' : ''
        }`}
      >
        {SKILL_AREAS.map((area, index) => (
          <article
            key={area.index}
            className={`glass-card border-gradient reveal reveal-delay-${index + 1} rounded-3xl p-8 transition-transform duration-300 hover:-translate-y-1.5`}
          >
            <div className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-jungle-500/30 bg-jungle-500/10 font-display text-sm font-bold text-jungle-400">
              {area.index}
            </div>
            <h3 className="text-xl font-bold">{area.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">{area.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
