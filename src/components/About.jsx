import useReveal from '../hooks/useReveal';

const HIGHLIGHTS = [
  {
    title: 'Decentralized Backends',
    detail: 'Building robust, autonomous backend architectures using Go and Python.',
  },
  {
    title: 'Responsive Interfaces',
    detail: 'Crafting highly responsive, user-centric frontends with HTML, CSS, and JavaScript.',
  },
  {
    title: 'AI Integration',
    detail: 'Expanding full-stack foundations to implement smart capabilities and AI-driven solutions.',
  },
];

/**
 * About
 * -----
 * Personal introduction section — who she is, what she focuses on, and a
 * few standout strengths. Left column carries the bio, right column is a
 * stacked bento grid of strengths.
 *
 * `onNavigate` lets the CTA jump to the Contact page.
 */
export default function About({ onNavigate }) {
  const { ref, visible } = useReveal();

  return (
    <section id="about" className="section-shell py-16 md:py-24">
      <div
        ref={ref}
        className={`reveal reveal-group grid items-start gap-12 lg:grid-cols-[3fr_2fr] ${
          visible ? 'is-visible' : ''
        }`}
      >
        {/* Intro copy */}
        <div className="flex h-full flex-col">
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-gray-400">
            About me
          </span>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-white md:text-5xl">
            A developer who cares about code that actually works
          </h2>
          <p className="mt-6 leading-relaxed text-gray-400">
            I am a Kenya-based software engineer, Zone01 Kisumu cohort member,
            and holder of a Diploma in Computer Science. As a versatile
            full-stack developer, I specialize in building robust, decentralized
            backend systems using Go and Python, alongside crafting responsive,
            user-centric frontend interfaces with HTML, CSS, and JavaScript.
          </p>
          <p className="mt-4 leading-relaxed text-gray-400">
            Passionate about continuous learning and problem-solving, I
            regularly test my skills and collaborate with diverse tech talent
            through hackathons. Building upon my strong foundation in full-stack
            engineering, I am currently expanding my expertise toward Artificial
            Intelligence, with a keen focus on integrating intelligent systems
            and specializing in AI-driven solutions. I thrive in dynamic
            environments and am always eager to connect with industry peers and
            explore new opportunities.
          </p>

          <div className="mt-auto pt-8">
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-6 py-3 text-sm font-semibold text-gray-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-neon-500/60 hover:text-neon-400"
            >
              Let's work together <span aria-hidden>→</span>
            </button>
          </div>
        </div>

        {/* Strength bento stack */}
        <div className="space-y-4">
          {HIGHLIGHTS.map((item, index) => (
            <div
              key={item.title}
              className={`reveal reveal-delay-${
                index + 1
              } rounded-xl border border-white/5 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-neon-500/40 hover:bg-white/[0.05]`}
            >
              <h3 className="flex items-center gap-3 font-bold text-white">
                <span className="h-2 w-2 rounded-full bg-neon-500 shadow-[0_0_10px_rgba(224,64,251,0.9)]" />
                {item.title}
              </h3>
              <p className="mt-2 pl-5 text-sm text-gray-400">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
