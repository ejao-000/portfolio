import useReveal from '../hooks/useReveal';
import SectionHeading from './SectionHeading';

const PROJECTS = [
  {
    tag: 'Live production app',
    title: 'Powersmart-Kenya',
    description:
      'Smart pre-paid electricity management platform featuring a real-time meter dashboard with kWh balance, usage trends, and depletion forecasts. Instant token vending via M-Pesa, Airtel Money, and bank transfers, with role-based portals for Tenants, Landlords, and Admins.',
    tech: ['Go', 'Gin', 'PostgreSQL', 'React', 'Tailwind', 'JWT', 'M-Pesa'],
    links: {
      preview: 'https://powersmart-kenya.web.app/',
      repo: 'https://github.com/ejao-000/powersmart-kenya',
    },
  },
  {
    tag: 'Agricultural tech',
    title: 'Farm Assist',
    description:
      'Offline-first agricultural platform for areas with unreliable internet. Farmers record inventory and sales offline, queue crop-disease images, and sync automatically when connectivity returns — backed by Go services and AI/weather integrations.',
    tech: ['Go', 'PostgreSQL', 'Flutter', 'React', 'Weather API', 'SMS API'],
    links: {
      repo: 'https://github.com/ejao-000/FarmAssist',
    },
  },
];

/**
 * Services
 * --------
 * Featured projects, each rendered from the PROJECTS data above. Keeping the
 * data separate keeps the JSX readable.
 */
export default function Services() {
  const { ref, visible } = useReveal();

  return (
    <section id="projects" className="section-shell py-16 md:py-24">
      <SectionHeading
        eyebrow="Portfolio"
        title="Featured projects"
        subtitle="Real-world applications tackling localized power management and agricultural data challenges."
      />

      <div
        ref={ref}
        className={`reveal-group mt-12 grid gap-6 lg:grid-cols-2 ${
          visible ? 'is-visible' : ''
        }`}
      >
        {PROJECTS.map((project, index) => (
          <article
            key={project.title}
            className={`glass-card border-gradient reveal reveal-delay-${
              index + 1
            } flex flex-col rounded-3xl p-8 transition-transform duration-300 hover:-translate-y-1.5`}
          >
            {/* Tag */}
            <span className="text-xs font-semibold text-jungle-400">{project.tag}</span>
            <h3 className="mt-2 font-display text-2xl font-bold">{project.title}</h3>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-gray-400">
              {project.description}
            </p>

            {/* Tech stack */}
            <ul className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <li
                  key={tech}
                  className="rounded-md border border-carbon-700 bg-carbon-950/60 px-3 py-1 text-xs text-gray-300"
                >
                  {tech}
                </li>
              ))}
            </ul>

            {/* Links */}
            <div className="mt-6 flex items-center justify-between border-t border-carbon-700/70 pt-5 text-sm">
              {project.links.preview ? (
                <a
                  href={project.links.preview}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-jungle-400 transition-colors hover:text-jungle-300"
                >
                  Live Preview <span aria-hidden>→</span>
                </a>
              ) : (
                <span className="text-gray-500">Offline-first architecture</span>
              )}
              <a
                href={project.links.repo}
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 transition-colors hover:text-white"
              >
                GitHub Repo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
