# Muhammad Haseeb — Portfolio

Personal engineering portfolio for **Muhammad Haseeb**, Full-Stack Software Engineer and AI/ML Engineer.

**Live:** https://portfolio-lyart-xi-5uiolk4l8b.vercel.app/

---

## Overview

A single-page React portfolio covering capabilities, proficiency, professional experience, education, 27 selected projects, and contact details. The projects section is filterable by engineering domain (AI & Machine Learning, Full-Stack, Frontend, Desktop) and links out to each repository and live deployment.

## Highlights

- **Token-based theming** — the full palette is defined once as CSS custom properties in `src/index.css`, with a light and dark set. Every component reads from those tokens, so the whole site re-themes from one place.
- **Instant dark mode** — persisted to `localStorage`, defaults to the OS `prefers-color-scheme`.
- **Filterable project grid** — 27 projects grouped by domain, with per-project tech stacks and repository / live links.
- **Lightweight scroll reveals** — a small `IntersectionObserver` component (`src/components/reveal/Reveal.js`) replaces the heavier animation library the template shipped with; it honours `prefers-reduced-motion`.
- **SEO ready** — descriptive metadata, Open Graph and Twitter cards, a canonical URL, and `Person` JSON-LD structured data.
- **Accessible and responsive** — semantic landmarks, ARIA labels on interactive controls, keyboard-navigable filters, and layouts that hold from 320px upward with no horizontal overflow.

## Tech stack

| Layer | Technology |
|-------|------------|
| UI | React 16, Create React App |
| Styling | Sass, CSS custom properties |
| Motion | IntersectionObserver reveals, CSS transitions, Lottie |
| Icons | Font Awesome 5 |
| Type | Inter, Space Grotesk, JetBrains Mono |
| Hosting | Vercel |

## Project structure

```text
src/
├── portfolio.js              # All site content — the single source of truth
├── index.css                 # Design tokens (light + dark) and base typography
├── _globalColor.scss         # SCSS mirror of the colour tokens
├── components/               # Header, buttons, cards, reveal, social, toggle
└── containers/               # Hero, skills, proficiency, experience,
                              # education, projects, competencies, contact
```

## Editing the content

Everything shown on the site lives in **`src/portfolio.js`** — no component changes are needed for content edits.

- `greeting` — name, rotating roles, summary, current role badge, profile image
- `heroStats` — the metrics band under the hero
- `skillsSection` — capability statements and the technology chips
- `techStack` — proficiency bars
- `workExperiences` — roles, dates, and bullet points
- `educationInfo` — schools and coursework
- `bigProjects` — project cards: category, description, tech list, and links
- `achievementSection` — core competency cards
- `contactInfo` — email, phone, and contact copy

To replace the profile photo, drop a new image at `src/assets/images/muhammadHaseebProfile.png`.

## Running locally

```bash
npm install
npm start
```

The app runs at http://localhost:3000.

## Building

```bash
npm run build
```

Outputs a production bundle to `build/`.

## Formatting

```bash
npm run format
```

## Deployment

Pushes to `main` deploy automatically to Vercel.

## Credits

Originally scaffolded from [developerFolio](https://github.com/saadpasta/developerFolio) (MIT), then substantially rewritten — new design system, layout, components, and content.

## License

MIT — see [LICENSE](LICENSE).
