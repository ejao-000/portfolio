import { useEffect, useState } from 'react';

/**
 * useTypewriter
 * -------------
 * Types out each phrase character-by-character, holds the finished phrase
 * for `holdTime` ms, deletes it, then moves on to the next one — looping
 * forever. Returns the portion of the current phrase to render.
 *
 * Usage:
 *   const text = useTypewriter(PHRASES, { holdTime: 20000 });
 *   <h1>{text}<span className="typewriter-cursor" /></h1>
 */
export default function useTypewriter(
  phrases,
  { typeSpeed = 55, deleteSpeed = 28, holdTime = 20000 } = {}
) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[index % phrases.length];
    let timer;

    if (!deleting && text === current) {
      // Fully typed — hold before deleting.
      timer = setTimeout(() => setDeleting(true), holdTime);
    } else if (deleting && text === '') {
      // Fully deleted — advance to the next phrase.
      setDeleting(false);
      setIndex((i) => (i + 1) % phrases.length);
    } else {
      const delay = deleting ? deleteSpeed : typeSpeed;
      timer = setTimeout(() => {
        setText((prev) =>
          deleting
            ? current.slice(0, prev.length - 1)
            : current.slice(0, prev.length + 1)
        );
      }, delay);
    }

    return () => clearTimeout(timer);
  }, [text, deleting, index, phrases, typeSpeed, deleteSpeed, holdTime]);

  return text;
}
