import useReveal from '../hooks/useReveal';

/**
 * Support
 * -------
 * Contact CTA — email and phone, front and center at the end of the page.
 */
export default function Support() {
  const { ref, visible } = useReveal();

  return (
    <section id="contact" className="section-shell py-16 md:py-24">
      <div
        ref={ref}
        className={`reveal glass-card border-gradient mx-auto max-w-2xl rounded-3xl p-10 text-center md:p-12 ${
          visible ? 'is-visible' : ''
        }`}
      >
        <span className="text-xs font-semibold uppercase tracking-[0.28em] text-jungle-400">
          Contact
        </span>
        <h2 className="mt-3 font-display text-3xl font-extrabold md:text-4xl">
          Let's build something great together
        </h2>
        <p className="mt-4 text-sm text-gray-400">
          Open to backend, frontend, or full-stack roles and collaborations.
          Reach out directly by email or phone.
        </p>

        <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="mailto:odhiamboemmaculatejaneakinyi@gmail.com"
            className="rounded-lg bg-jungle-500 px-6 py-3 text-sm font-bold text-carbon-950 shadow-glow-green transition-all hover:-translate-y-0.5 hover:bg-jungle-400"
          >
            Send Email
          </a>
          <a
            href="tel:+254114122314"
            className="rounded-lg border border-carbon-700 px-6 py-3 text-sm font-semibold text-gray-200 transition-colors hover:border-jungle-500/60 hover:text-jungle-300"
          >
            Call +254 114 122 314
          </a>
        </div>
      </div>
    </section>
  );
}
