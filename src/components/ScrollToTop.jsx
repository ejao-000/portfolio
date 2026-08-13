import { useEffect, useState } from 'react';

/**
 * ScrollToTop
 * -----------
 * Floating button that appears after the user scrolls down and glides them
 * back to the top. Hidden when near the top of the page.
 */
export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Track scroll position and show the button past ~600px.
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`scroll-top ${visible ? 'is-visible' : ''}`}
    >
      ↑
    </button>
  );
}
