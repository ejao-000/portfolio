import useReveal from '../hooks/useReveal';

const HIGHLIGHTS = [
  { title: 'Real-time systems', detail: 'Live meter dashboards and event-driven backends in Go.' },
  { title: 'Offline-first design', detail: 'Apps that keep working without connectivity and sync later.' },
  { title: 'End-to-end delivery', detail: 'From database schema to polished React interfaces.' },
];

/**
 * About
 * -----
 * Personal introduction section — who she is, what she focuses on, and a
 * few standout strengths. Kept brief so it reads like a real bio.
 *
 * `onNavigate` lets the CTA jump to the Contact page.
 */
export default function About({ onNavigate }) {
  const { ref, visible } = useReveal();

  return (
    <section id="about" className="section-shell py-16 md:py-24">
      <div
        ref={ref}
        className={`reveal reveal-group grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] ${
          visible ? 'is-visible' : ''
        }`}
      >
        {/* Intro copy */}
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-jungle-400">
            About me
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold md:text-4xl">
            A developer who cares about code that actually works
          </h2>
          <p className="mt-5 leading-relaxed text-gray-400">
            I'm Emmaculate Jane Akinyi, a full-stack developer based in Kisumu,
            Kenya. My work sits where dependable backend engineering meets
            thoughtful, usable interfaces — mostly in Go and React.
          </p>
          <p className="mt-4 leading-relaxed text-gray-400">
            I'm currently deepening my craft through rigorous peer-to-peer
            training at Zone 01 Kisumu, and I love solving problems that matter
            locally: smart energy management, agriculture, and tools for people
            with unreliable internet.
          </p>

          <button
            type="button"
            onClick={() => onNavigate('contact')}
            className="mt-8 inline-flex items-center gap-2 rounded-lg border border-jungle-500/50 px-6 py-3 text-sm font-semibold text-jungle-300 transition-all hover:-translate-y-0.5 hover:bg-jungle-500/10"
          >
            Let's work together <span aria-hidden>→</span>
          </button>
        </div>

        {/* Strength highlights */}
        <div className="space-y-4">
          {HIGHLIGHTS.map((item, index) => (
            <div
              key={item.title}
              className={`glass-card border-gradient reveal reveal-delay-${
                index + 1
              } rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1`}
            >
              <h3 className="flex items-center gap-3 font-bold">
                <span className="h-2 w-2 rounded-full bg-jungle-400 shadow-[0_0_8px_rgba(178,139,159,0.9)]" />
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
