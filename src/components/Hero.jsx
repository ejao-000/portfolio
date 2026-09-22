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
