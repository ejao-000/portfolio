import { useEffect, useRef, useState } from 'react';

/**
 * useReveal
 * ---------
 * Adds a CSS class (`is-visible`) to the element once it scrolls into view.
 * Used to drive the reveal-on-scroll animations defined in index.css.
 *
 * Usage:
 *   const { ref, visible } = useReveal();
 *   <div ref={ref} className={visible ? 'reveal is-visible' : 'reveal'}>
 */
export default function useReveal(options = { threshold: 0.15 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    // Fall back to showing immediately if IntersectionObserver is unavailable.
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target); // animate once, then stop watching
          }
        });
      },
      options
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [options]);

  return { ref, visible };
}
