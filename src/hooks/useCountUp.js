import { useEffect, useRef, useState } from 'react';

/**
 * useCountUp
 * ----------
 * Animates a number from `start` to `target` over `duration` ms using
 * requestAnimationFrame with an ease-out curve, so it decelerates toward
 * the end. The animation only begins once `start` becomes true.
 *
 * Returns the current (rounded) value.
 */
export default function useCountUp(target, duration, start) {
  const [value, setValue] = useState(0);
  const frame = useRef(null);

  useEffect(() => {
    if (!start) return undefined;

    const begin = performance.now();

    const tick = (now) => {
      const elapsed = Math.min((now - begin) / duration, 1);
      // Ease-out cubic: fast at first, gentle near the target.
      const eased = 1 - Math.pow(1 - elapsed, 3);
      setValue(Math.round(eased * target));

      if (elapsed < 1) {
        frame.current = requestAnimationFrame(tick);
      }
    };

    frame.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame.current);
  }, [start, target, duration]);

  return value;
}
