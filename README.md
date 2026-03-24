# Yogeth C R — Portfolio

A single-page responsive portfolio built with **React + Vite**.

## Project Structure

```
portfolio/
├── index.html                      # Vite entry HTML (root level)
├── vite.config.js                  # Vite configuration
├── package.json
├── README.md
└── src/
    ├── App.jsx                     # Root component
    ├── main.jsx                    # Vite entry point
    ├── data/
    │   └── resume.js               # All resume content (edit here)
    ├── hooks/
    │   └── useInView.js            # Intersection observer hook
    ├── styles/
    │   └── global.css              # CSS variables & global styles
    └── components/
        ├── FadeIn/                 # Scroll-triggered fade animation
        ├── SectionHeading/         # Reusable section title
        ├── Navbar/                 # Sticky nav with active link tracking
        ├── Hero/                   # Landing section with typewriter effect
        ├── Skills/                 # Skills grid
        ├── Projects/               # Project cards with tech tags
        ├── Education/              # Education + Strengths cards
        └── Footer/
```

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Customisation

All content lives in **`src/data/resume.js`** — update your name, skills,
projects, and education there. The UI updates automatically.

To change the accent colour, edit `--color-teal` in `src/styles/global.css`.
