import useReveal from '../hooks/useReveal';
import useCountUp from '../hooks/useCountUp';

const STATS = [
  // value: 0 — 100 is a counter that grows over 10s once the strip is in view
  { value: 0, suffix: '%', label: 'Code quality focus' },
  { value: 'Real-time', suffix: null, label: 'Meter dashboards' },
  { value: 'Offline-first', suffix: null, label: 'Agricultural tech' },
  { value: 'Full-stack', suffix: null, label: 'End-to-end delivery' },
];

/**
 * StatsTicker
 * -----------
 * A quick strip of headline numbers separating the hero from the rest of
 * the page. The first stat counts up from 0 → 100 over ten seconds when
 * it scrolls into view.
 */
export default function StatsTicker() {
  const { ref, visible } = useReveal({ threshold: 0.4 });
  const quality = useCountUp(100, 10000, visible);

  return (
    <div className="border-y border-jungle-700/25 bg-carbon-900/60 py-10">
      <dl ref={ref} className="section-shell grid grid-cols-2 gap-8 text-center md:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label}>
            <dt className="sr-only">{stat.label}</dt>
            <dd className="font-display text-2xl font-extrabold text-jungle-400 md:text-3xl">
              {typeof stat.value === 'number' ? `${quality}${stat.suffix ?? ''}` : stat.value}
            </dd>
            <p className="mt-1 text-sm text-gray-400">{stat.label}</p>
          </div>
        ))}
      </dl>
    </div>
  );
}
