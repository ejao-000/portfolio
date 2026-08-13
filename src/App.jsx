import { useCallback, useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsTicker from './components/StatsTicker';
import Logos from './components/Logos';
import About from './components/About';
import Features from './components/Features';
import Services from './components/Services';
import Solutions from './components/Solutions';
import Support from './components/Support';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

/**
 * App
 * ----
 * Top-level layout. Instead of one long scrolling page, each nav section is
 * its own "page": clicking a nav item swaps the visible section with a
 * horizontal slide. The active section is tracked in state.
 */

// Order drives which direction the slide travels.
const NAV_ORDER = ['home', 'about', 'skills', 'projects', 'contact'];

export default function App() {
  const [active, setActive] = useState('home');
  const [direction, setDirection] = useState('next');

  // Move between pages — earlier → later slides in from the right,
  // later → earlier from the left.
  const navigate = useCallback(
    (section) => {
      const from = NAV_ORDER.indexOf(active);
      const to = NAV_ORDER.indexOf(section);
      if (to === -1 || to === from) return;
      setDirection(to > from ? 'next' : 'prev');
      setActive(section);
    },
    [active]
  );

  // Jump to the top whenever the page changes.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [active]);

  return (
    <div className="relative min-h-screen bg-forest text-white">
      {/* Decorative background — fixed so it never scrolls with content */}
      <div aria-hidden className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-forest" />
        <div className="absolute inset-0 grid-overlay" />
      </div>

      <Navbar active={active} onNavigate={navigate} />

      {/* The active page, keyed so it remounts and replays the slide */}
      <main
        key={active}
        className={direction === 'next' ? 'page-enter-right' : 'page-enter-left'}
      >
        {renderView(active, navigate)}
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

/**
 * Maps a section id to its page content.
 */
function renderView(active, navigate) {
  switch (active) {
    case 'about':
      return (
        <>
          <About onNavigate={navigate} />
          <Solutions />
        </>
      );
    case 'skills':
      return <Features />;
    case 'projects':
      return <Services />;
    case 'contact':
      return <Support />;
    default:
      return (
        <>
          <Hero onNavigate={navigate} />
          <StatsTicker />
          <Logos />
        </>
      );
  }
}
