import useReveal from '../hooks/useReveal';

/**
 * SectionHeading
 * --------------
 * Shared eyebrow + title + subtitle block used by every section, so the
 * headers all stay visually consistent. Includes its own reveal animation.
 */
export default function SectionHeading({ eyebrow, title, subtitle }) {
  const { ref, visible } = useReveal();

  return (
    <div
      ref={ref}
      className={`reveal max-w-2xl ${visible ? 'is-visible' : ''}`}
    >
      <span className="text-xs font-semibold uppercase tracking-[0.28em] text-jungle-400">
        {eyebrow}
      </span>
      <h2 className="mt-3 font-display text-3xl font-extrabold md:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-gray-400">{subtitle}</p>}
    </div>
  );
}
