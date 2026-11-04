# Ashen Disanayaka - UI/UX Designer & AI Strategist Portfolio

Personal portfolio website with typewriter hero, 3D tilt cards, glassmorphism UI, a tools section (Figma, Claude, Cursor) and a "My Work" section split into mobile apps, landing pages and dashboards.

## Project structure
- `index.html` - page markup
- `css/style.css` - all styles
- `js/script.js` - typewriter, cursor, tilt, scroll reveal, project data and filters
- `assets/` - images (see `assets/README.txt` for the file names)

## Add or move a project
Edit the `projects` array in `js/script.js`. Set `cat` to `mobile`, `landing` or `dashboard`, and give each project an `image` path and two gradient `colors`.

## Hire form
The "Hire now" button opens a project form (name, email, project type, description).
- By default, sending opens the visitor's email app with everything filled in, addressed to the email in `CONTACT_EMAIL` (`js/script.js`).
- To send straight from the page instead, create a free form at formspree.io and paste its URL into `FORM_ENDPOINT` in `js/script.js`. Submissions then arrive in your inbox with no email app needed.

## Run locally
Open `index.html` in any modern browser.

## Deploy
Upload the whole folder to GitHub Pages, Netlify, Vercel or any static host.
