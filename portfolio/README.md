# Mayur Bagul — Portfolio

A dark/techy developer portfolio. No build step — plain HTML, CSS (Tailwind via CDN), and vanilla JS.

## Files (keep them together when hosting)
- `index.html` — the main portfolio page
- `resume.html` — standalone résumé page, styled like a Word document (opens in a new tab)
- `profile.jpg` — your headshot (used in the hero)
- `resume.pdf` — downloadable résumé (linked from the résumé page's "Download PDF" button)
- `netlify.toml` — Netlify deploy config
- `README.md` — this file

## What's inside
- Terminal/IDE-inspired dark theme (JetBrains Mono + Inter).
- Sections: Hero (photo + code window), About, Skills, Experience (animated timeline), Projects, Contact.
- Animations: hero typing effect, scroll reveals, and a multi-step experience-timeline animation. Respects `prefers-reduced-motion`.
- Content (skills, jobs, projects) lives in JS arrays near the bottom of `index.html` — edit those to update the site.

## Profile photo
Your headshot is already in place as `profile.jpg`. To change it, replace that file (a square image works best). If `profile.jpg` is ever missing, an "MB" placeholder shows instead.

## Résumé
- The nav "Resume ↗" and hero "View résumé ↗" buttons open `resume.html` in a new tab.
- `resume.html` is hardcoded (no external file needed) and styled to look like a Word document.
- It has a toolbar (screen only): Back to portfolio, Print / Save as PDF (fits on ONE page), and Download PDF (serves `resume.pdf`).

## Contact form — Netlify Forms (works automatically on Netlify)
The form is wired for Netlify Forms. There's no key or signup. When you deploy on Netlify:
1. Netlify detects the form at deploy time (via the `name="contact"` + `data-netlify="true"` attributes).
2. Submissions collect in your Netlify dashboard under **Forms → contact**.
3. To get emailed on new submissions: Netlify dashboard → **Forms → Settings & notifications → Add notification → Email notification**, send to `mbagul30@gmail.com`.

A hidden honeypot field is included to quietly reject spam bots.
**Important:** Netlify Forms only works while the site is hosted on Netlify. If you move hosts, the form needs a different backend.

## Host it for free — Netlify (recommended, so the form works)
Option A — drag and drop:
1. Zip nothing — just go to https://app.netlify.com/drop and drag the whole folder in.
2. Netlify gives you a live URL instantly (e.g. `your-site.netlify.app`).

Option B — from a Git repo (gets auto-deploys on every push):
1. Push these files to a GitHub repo.
2. In Netlify: **Add new site → Import an existing project → pick the repo.**
3. Build command: leave empty. Publish directory: `.` (root). Deploy.

After the first deploy, submit the contact form once yourself to confirm it appears under Forms.

### Other free hosts
GitHub Pages, Cloudflare Pages, and Vercel all host this fine — but the **contact form will not work** on them (Netlify Forms is Netlify-only). Everything else (résumé page, links, animations) works anywhere.

## Custom domain (optional)
In Netlify: **Domain settings → Add a custom domain**, then follow the DNS instructions.

## Editing tips
- Colors: the `tailwind.config` block in `index.html`'s `<head>` (the `colors` object).
- Add a job / skill group / project: copy an object in the `experience`, `skills`, or `projects` arrays in `index.html`.
- Résumé content: edit `resume.html` directly (it's plain HTML).
