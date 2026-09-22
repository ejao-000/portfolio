import { useState } from 'react';
import useReveal from '../hooks/useReveal';
import useTypewriter from '../hooks/useTypewriter';

const HERO_PHRASES = [
  'Building Scalable Backends.',
  'Engineering Intelligent Systems.',
  'Architecting High-Performance Backends & AI-Driven Solutions',
  'From Robust Decentralized Architectures to Smart AI Integrations',
  'Designing Resilient Systems from the Core Backend to the User Interface',
];

/**
 * Hero
 * ----
 * The landing section. Left side carries the intro copy, the right side is a
 * profile-photo frame with a jungle-green glow.
 *
 * Photo slot:
 *   Drop your picture at /public/images/profile.jpg. If the file is missing,
 *   the <img> fails and we swap in a placeholder SVG — so the layout never
 *   breaks while you're setting it up.
 *
 * `onNavigate` lets the CTA jump straight to the Projects page.
 */
export default function Hero({ onNavigate }) {
  // Track whether the real photo loaded successfully.
  const [photoFailed, setPhotoFailed] = useState(false);
  const intro = useReveal();
  const photo = useReveal();
  const typed = useTypewriter(HERO_PHRASES, { holdTime: 5000 });

  return (
    <section id="home" className="relative">
      <div className="section-shell grid items-center gap-14 py-20 md:py-28 lg:grid-cols-[1.15fr_0.85fr]">
        {/* ----- Intro copy ----- */}
        <div ref={intro.ref} className={`reveal ${intro.visible ? 'is-visible' : ''}`}>
          <h1 className="flex min-h-[4.4em] items-start font-display text-3xl font-extrabold leading-[1.1] tracking-tight md:min-h-[3.3em] md:text-5xl">
            <span className="text-gradient-jungle">{typed}</span>
            <span className="typewriter-cursor" aria-hidden />
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-400 md:text-lg">
            Hi, I'm a Kenya-based Software Engineer specializing in robust
            backend architectures, responsive user interfaces, and the next
            frontier of AI-driven solutions.
          </p>

          {/* Call to action */}
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => onNavigate('projects')}
              className="animate-alert-flash inline-flex items-center gap-2 rounded-lg bg-red-500 px-6 py-3 text-sm font-bold text-white transition-transform hover:-translate-y-0.5"
            >
              <span aria-hidden className="text-base leading-none">⚠</span>
              Explore Projects <span aria-hidden>→</span>
            </button>
            <a
              href="https://github.com/ejao-000"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-carbon-700 px-6 py-3 text-sm font-semibold text-gray-300 transition-colors hover:border-jungle-500/60 hover:text-jungle-300"
            >
              GitHub Profile
            </a>
            <a
              href="https://www.linkedin.com/in/emmaculate-jane-akinyi-odhiambo-479215403/"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-carbon-700 px-6 py-3 text-sm font-semibold text-gray-300 transition-colors hover:border-jungle-500/60 hover:text-jungle-300"
            >
              LinkedIn
            </a>
            <a
              href="https://dev.to/emma_jane"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-carbon-700 px-6 py-3 text-sm font-semibold text-gray-300 transition-colors hover:border-jungle-500/60 hover:text-jungle-300"
            >
              Dev.to
            </a>
          </div>

          {/* WhatsApp prompt */}
          <a
            href="https://wa.me/254114122314"
            target="_blank"
            rel="noreferrer"
            className="group mt-7 inline-flex items-center gap-3 rounded-2xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-400/60 hover:bg-emerald-400/15 hover:shadow-[0_14px_40px_-14px_rgba(37,211,102,0.8)]"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm0 18.15c-1.53 0-3.03-.41-4.34-1.19l-.31-.18-3.12.82.83-3.04-.2-.32a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23 4.54 0 8.23 3.69 8.23 8.23s-3.69 8.24-8.23 8.24z" />
                <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35z" />
              </svg>
            </span>
            <span className="text-left">
              <span className="block text-xs font-medium text-emerald-300/80">
                Have a project in mind?
              </span>
              <span className="text-sm font-semibold text-emerald-100">
                Chat on WhatsApp · +254 114 122 314
              </span>
            </span>
          </a>
        </div>

        {/* ----- Profile photo + floating stat cards ----- */}
        <div
          ref={photo.ref}
          className={`reveal relative mx-auto w-full max-w-sm ${photo.visible ? 'is-visible' : ''}`}
        >
          {/* Soft glow behind the photo */}
          <div
            aria-hidden
            className="absolute -inset-6 rounded-[2rem] bg-jungle-500/10 blur-2xl"
          />

          {/* Photo frame */}
          <div className="relative">
            <div className="frame-light" aria-hidden />
            <div className="relative aspect-square overflow-hidden rounded-[1.75rem] border border-jungle-500/30 bg-jungle-900/60 shadow-card-green">
              {photoFailed ? (
                <img
                  src="/images/profile-placeholder.svg"
                  alt="Placeholder — add your photo at public/images/emmaakinyi.jpg"
                  className="animate-photo-breathe h-full w-full object-cover"
                />
              ) : (
                <img
                  src="/images/emmaakinyi.jpg"
                  alt="Portrait of Odhiambo Emmaculate Jane Akinyi"
                  className="animate-photo-breathe h-full w-full object-cover"
                  onError={() => setPhotoFailed(true)}
                />
              )}

              {/* Gradient at the bottom so the name chip reads clearly */}
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-carbon-950/90 to-transparent" />
            </div>
          </div>

          {/* Name chip pinned to the photo */}
          <div className="absolute -bottom-5 left-1/2 w-max -translate-x-1/2 rounded-full border border-jungle-500/40 bg-carbon-900/90 px-5 py-2 text-xs font-bold tracking-wide text-jungle-300 backdrop-blur">
            EMMACULATE JANE · KISUMU, KE
          </div>
        </div>
      </div>
    </section>
  );
}
