# Srikanth — Portfolio

A personal portfolio built with React + Vite, sourced entirely from Srikanth's actual resume
(MCA student, Python/JavaScript/MySQL projects, Oracle certification, NCC achievement).

## Getting started (VS Code)

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

To build a production bundle:

```bash
npm run build
npm run preview
```

## Where to edit your information

Almost everything on the site is driven by **one file**:

```
src/data/portfolioData.js
```

Update this file to change:
- Name, phone, email
- GitHub / LinkedIn / LeetCode URLs
- Professional summary
- Skills
- Projects (description, technologies, GitHub/live links)
- Education
- Experience & practical work
- Certifications
- Achievements

You should not need to touch any component file just to update your content.

## Adding real images

The site currently uses clean placeholders (initials avatar, icon-based project
thumbnails) because no images were supplied. To add real ones:

- **Profile photo:** place a photo at `public/assets/profile.jpg`. It's already
  wired up in `About.jsx` (and falls back to the initials placeholder automatically
  if the file is missing).
- **Project screenshots:** add images under `public/assets/projects/` (paths are
  already defined per-project in `portfolioData.js` as `image`), then update
  `ProjectCard.jsx` to render `<img src={project.image} />` instead of the icon
  placeholder if you want photos on the cards.
- **Resume:** `public/assets/resume.pdf` already contains your current resume — the
  Download Resume buttons in the Hero section point at it. Replace this file any
  time you update your resume, keeping the same filename.

## Adding project links

In `portfolioData.js`, each project has `githubUrl` and `liveUrl`, both currently
`null` (no repository/demo URLs were provided). Set them to real URLs once you have
public repos or a deployed demo, and the "Coming Soon" states in the project cards
and modal will automatically switch to working links.

## Certificate link

`portfolioData.certifications[0].url` is `null` because no public certificate
verification link was provided. Add one if Oracle gives you a public verification
URL, and the "Certificate Link Coming Soon" text becomes a clickable link.

## Notes

- Dark mode is the default; the toggle in the navbar stores the preference in
  `localStorage`.
- The contact form validates on submit and opens the visitor's email client with
  a pre-filled message (`mailto:`) — there's no backend, so nothing is silently
  "sent" without the visitor's own email client confirming it.
- All animations respect `prefers-reduced-motion`.
- No fabricated statistics (GitHub repo counts, LeetCode problem counts, project
  metrics) are shown anywhere — only what was verifiable from the resume.
