import useReveal from '../hooks/useReveal';
import SectionHeading from './SectionHeading';

const PROJECTS = [
  {
    tag: 'Live production app',
    title: 'Powersmart-Kenya',
    bullets: [
      'Full-stack prepaid electricity platform pairing a Go/Gin + PostgreSQL backend with a React + Tailwind frontend for real-time kWh balance, usage trends, and depletion forecasts.',
      'Designed REST APIs and a transactional PostgreSQL schema for instant token vending via M-Pesa, Airtel Money, and bank transfers, with end-to-end transaction tracking.',
      'Built role-based portals and an admin console for Tenants, Landlords, and Admins, wiring frontend state to backend APIs.',
      'Secured the stack end-to-end with bcrypt password hashing, JWT auth, rate limiting, and input validation.',
    ],
    tech: ['Go', 'Gin', 'PostgreSQL', 'React', 'Tailwind', 'JWT', 'M-Pesa', 'Docker'],
    links: {
      preview: 'https://powersmart-kenya-frontend.onrender.com',
      repo: 'https://github.com/ejao-000/powersmart-kenya',
    },
  },
  {
    tag: 'AI-Powered Job Search Assistant',
    title: 'SkillMatch',
    bullets: [
      'AI-powered job search platform connecting a React, TypeScript, and Vite frontend to a Go backend through REST APIs, giving users a single dashboard for their entire job-search journey.',
      'Integrated Amazon Bedrock for personalized recommendations and AI chat, Amazon S3 for resume storage, and CockroachDB for persistence.',
      'Built a responsive interface covering authentication, profile management, resume uploads, job discovery, saved jobs, and application tracking.',
      'Implemented JWT-based authentication and consumed backend APIs for recommendations that adapt to user activity.',
    ],
    tech: ['React', 'TypeScript', 'Vite', 'Go', 'CockroachDB', 'Amazon Bedrock', 'Amazon S3', 'JWT'],
    links: {
      repo: 'https://github.com/Ashomondi/Skill-match.git',
    },
  },
  {
    tag: 'Agricultural tech',
    title: 'Farm Assist',
    bullets: [
      'Offline-first agricultural platform pairing a Flutter app and React dashboard with Go backend services for areas with unreliable internet.',
      'Built Go services for data synchronization, weather integration, background disease detection, AI assistance, and SMS notifications.',
      'Let farmers record inventory and sales offline and queue crop-disease images that sync automatically once connectivity returns.',
    ],
    tech: ['Go', 'PostgreSQL', 'Flutter', 'React', 'Weather API', 'SMS API'],
    links: {
      preview: 'https://farmassist-frontend.onrender.com',
      repo: 'https://github.com/ejao-000/FarmAssist',
    },
  },
  {
    tag: 'Hackathon',
    title: 'EcoRoute',
    bullets: [
      'End-to-end circular waste platform combining a Go route optimizer with a React dashboard that tracks bin fill-levels live on an interactive map.',
      'Shipped a dependency-free Go optimizer that cuts distance, fuel, and time on every collection run \u2014 roughly 8 km saved per route.',
      'Enabled residents to report overflows and illegal dumping, auto-escalating affected bins to critical without admin intervention.',
      'Used AI to forecast next-day fill levels so trucks arrive before overflow, while keeping the dashboard fully functional if the AI service goes down.',
    ],
    tech: ['Go', 'React', 'AI', 'IoT'],
    links: {
      repo: 'https://github.com/Ashomondi/EcoRoute.git',
    },
  },
];

/**
 * Services
 * --------
 * Featured projects, each rendered from the PROJECTS data above. Keeping the
 * data separate keeps the JSX readable.
 */
function ProjectCard({ project, direction }) {
  const { ref, visible } = useReveal();

  return (
    <article
      ref={ref}
      className={`glass-card border-gradient card-shine ${
        direction === 'left' ? 'reveal-left' : 'reveal-right'
      } ${visible ? 'is-visible' : ''} flex flex-col rounded-3xl p-8 transition-transform duration-300 hover:-translate-y-1.5`}
    >
      {/* Tag */}
      <span className="text-xs font-semibold text-jungle-400">{project.tag}</span>
      <h3 className="mt-2 font-display text-2xl font-bold">{project.title}</h3>
      <ul className="mt-4 flex-1 space-y-2 text-sm leading-relaxed text-gray-400">
        {project.bullets.map((bullet) => (
          <li key={bullet} className="flex gap-2">
            <span className="mt-0.5 shrink-0 text-jungle-400" aria-hidden>
              ▸
            </span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      {/* Tech stack */}
      {project.tech.length > 0 && (
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
      )}

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
          <span className="text-gray-500">Details on request</span>
        )}
        {project.links.repo && (
          <a
            href={project.links.repo}
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 transition-colors hover:text-white"
          >
            GitHub Repo
          </a>
        )}
      </div>
    </article>
  );
}

export default function Services() {
  return (
    <section id="projects" className="section-shell py-16 md:py-24">
      <SectionHeading
        eyebrow="Portfolio"
        title="Featured projects"
        subtitle="Full-stack applications spanning Go services, React interfaces, payment integrations, offline-first syncing, and AI features."
      />

      <div className="mt-12 flex flex-col gap-6">
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            direction={index % 2 === 0 ? 'right' : 'left'}
          />
        ))}
      </div>
    </section>
  );
}
