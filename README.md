# Emma Akinyi — Portfolio

Personal portfolio of Odhiambo Emmaculate Jane Akinyi, a full-stack developer based in Kisumu, Kenya, building scalable software with Go and React.

Built with React and Vite, styled with Tailwind CSS.

## Features

- **Section-based navigation** — each nav item swaps the visible page with a horizontal slide instead of one long scrolling page.
- **Animated hero** — portrait breathes inside its frame (scales to 140% and back), while the Go & React and Zone 01 badges slide to the right outside the frame.
- **Scroll reveal** — content fades in as it enters the viewport via an IntersectionObserver hook.
- **Count-up stats** — headline numbers animate from zero when scrolled into view.
- **Jungle theme** — deep near-black canvas with green accents, glass cards, and a subtle grid overlay.

## Pages

| Section   | Route key | Content                                     |
| --------- | --------- | ------------------------------------------- |
| Home      | `home`    | Hero, animated stats ticker, trusted-by logos |
| About     | `about`   | Bio, strength highlights, focus solutions   |
| Skills    | `skills`  | Core skill areas as feature cards           |
| Projects  | `projects`| Services and engagements                    |
| Contact   | `contact` | Ways to reach the developer                 |

## Getting started

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev

# Create a production build
npm run build

# Preview the production build
npm run preview
```

## Project structure

```
src/
  App.jsx                 # Top-level shell and page routing
  main.jsx                # React entry point
  index.css               # Global theme, utilities, animations
  hooks/
    useReveal.js          # IntersectionObserver scroll-reveal
    useCountUp.js         # Animated number counter
  components/             # One component (or page) per file
public/
  images/                 # Static assets (hero portrait)
```

## Customizing

- **Theme** — colors, fonts, shadows, and keyframe animations live in `tailwind.config.js`.
- **Portrait** — drop your photo at `public/images/emmaakinyi.jpg` (or update the `src` in `src/components/Hero.jsx`).
- **Content** — each page's copy is defined in its component under `src/components/`.

## License

[MIT](LICENSE)
