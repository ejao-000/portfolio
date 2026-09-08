import useReveal from '../hooks/useReveal';
import SectionHeading from './SectionHeading';

/**
 * Solutions
 * ---------
 * Experience & education spotlight — a wide gradient banner linking out to
 * the LinkedIn profile.
 */
export default function Solutions() {
  const { ref, visible } = useReveal();

  return (
    <section className="section-shell py-16 md:py-24">
      <div className="space-y-12">
        <SectionHeading
          eyebrow="Experience & education"
          title="Where the craft comes from"
          subtitle="A rigorous training environment paired with a formal computer science foundation."
        />

        <div
          ref={ref}
          className={`reveal-group border-gradient flex flex-col items-center gap-8 rounded-3xl bg-gradient-to-r from-jungle-900/80 via-jungle-850 to-carbon-900/60 p-8 md:flex-row md:justify-between md:p-12 ${
            visible ? 'is-visible' : ''
          }`}
        >
          <div className="reveal max-w-xl text-center md:text-left">
            <h3 className="font-display text-2xl font-extrabold md:text-3xl">
              Zone 01 Kisumu &amp; Polytechnic
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Rigorous peer-to-peer software engineering training at Zone 01 Kisumu,
              building on a Diploma in Computer Science from The Kisumu National
              Polytechnic.
            </p>

            {/* Education timeline */}
            <ul className="mt-8 space-y-5 text-left">
              <li className="flex gap-4">
                <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-jungle-400 shadow-[0_0_10px_rgba(178,139,159,0.9)]" />
                <div>
                  <p className="text-sm font-semibold">Zone 01 Kisumu — Software Engineering</p>
                  <p className="text-xs text-gray-500">Current · Peer-to-peer, project-based training</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-jungle-700" />
                <div>
                  <p className="text-sm font-semibold">Kisumu National Polytechnic — Computer Science</p>
                  <p className="text-xs text-gray-500">Diploma</p>
                </div>
              </li>
            </ul>
          </div>

          <a
            href="https://linkedin.com/in/emmaculate-jane-akinyi-odhiambo"
            target="_blank"
            rel="noreferrer"
            className="reveal shrink-0 rounded-lg bg-jungle-500 px-6 py-3 text-sm font-bold text-carbon-950 shadow-glow-green transition-all hover:-translate-y-0.5 hover:bg-jungle-400"
          >
            View LinkedIn Profile
          </a>
        </div>
      </div>
    </section>
  );
}
