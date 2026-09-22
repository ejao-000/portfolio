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
    <section id="about" className="section-shell relative py-16 md:py-24">
      <div
        ref={ref}
        className={`reveal reveal-group grid items-start gap-12 lg:grid-cols-[3fr_2fr] ${
          visible ? 'is-visible' : ''
        }`}
      >
        {/* Intro copy */}
        <div className="flex h-full flex-col">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-gradient-to-r from-neon-500 to-transparent" />
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-gray-400">
              About me
            </span>
          </div>

          <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-white md:text-5xl">
            A developer who cares about{' '}
            <span className="text-gradient-jungle">code that actually works</span>
          </h2>

          <p className="mt-6 max-w-2xl leading-relaxed text-gray-400">
            I am a Kenya-based software engineer, Zone01 Kisumu cohort member,
            and holder of a Diploma in Computer Science. As a versatile
            full-stack developer, I specialize in building robust, decentralized
            backend systems using Go and Python, alongside crafting responsive,
            user-centric frontend interfaces with HTML, CSS, and JavaScript.
          </p>
          <p className="mt-4 max-w-2xl leading-relaxed text-gray-400">
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
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-gray-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-neon-500/60 hover:text-neon-400 hover:shadow-[0_10px_30px_-10px_rgba(224,64,251,0.6)]"
            >
              Let's work together
              <span
                aria-hidden
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </button>
          </div>
        </div>

        {/* Strength bento stack */}
        <div className="relative">
          {/* Ambient glow behind the stack */}
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-neon-500/10 blur-3xl"
          />

          <div className="space-y-4">
            {HIGHLIGHTS.map((item, index) => (
              <div
                key={item.title}
                className={`group reveal reveal-delay-${
                  index + 1
                } relative overflow-hidden rounded-xl border border-white/5 bg-white/[0.03] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-neon-500/40 hover:bg-white/[0.05] hover:shadow-[0_18px_50px_-18px_rgba(224,64,251,0.55)]`}
              >
                {/* Faint index watermark */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-1 -top-4 font-display text-6xl font-extrabold text-white/[0.04] transition-colors duration-500 group-hover:text-neon-500/10"
                >
                  {String(index + 1).padStart(2, '0')}
                </span>

                {/* Top accent line revealed on hover */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon-500/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />

                <h3 className="relative flex items-center gap-3 font-bold text-white">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon-500/60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-neon-500 shadow-[0_0_10px_rgba(224,64,251,0.9)]" />
                  </span>
                  {item.title}
                </h3>
                <p className="relative mt-2 pl-5 text-sm leading-relaxed text-gray-400">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
