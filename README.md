# MISSION: FIND THE IMPOSTOR (SPARK x Among Us-inspired event)

Single-page event site built with React, Vite, plain CSS and Lucide icons. No API keys, no database, no paid services.
Fan-inspired college event; not affiliated with or endorsed by Among Us / Innersloth.

## Run it
Requires Node.js 18+.
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build into dist/
npm run preview  # serve the production build locally
```

## Customize (all in `src/config.js`)
| What | Where |
|---|---|
| Event date, time, venue, eligibility, deadline, fee, team size | `EVENT.fields` (empty = shows `[INSERT ...]`) |
| Live countdown | `EVENT.dateISO`, e.g. `'2026-11-20T10:00:00+05:30'`. Empty = "MISSION DATE TO BE ANNOUNCED" |
| Registration link (Google Form etc.) | `EVENT.registrationUrl`. Hero button and form show an "Open official form" link |
| Real form submission | `EVENT.registrationEndpoint` (any endpoint accepting a JSON POST, e.g. a free Formspree URL) |
| Contact and social links | `EVENT.contactUrl`, `EVENT.social` (official links only) |
| Rules, FAQ, cards | `RULES`, `FAQ`, `FEATURES`, `MISSIONS` |
Colors are CSS variables at the top of `src/styles.css`.

## Registration: important
With `registrationEndpoint` empty the form is a **demo**: it validates input but sends and stores nothing, and says so. Success is shown only when the endpoint returns an OK response. Nothing is saved in the browser. For a school project the simplest real option is to set `registrationUrl` to the club's Google Form.

## Test checklist
1. `npm run build` completes without errors.
2. Click every nav link, the logo, both hero buttons and "JOIN THE MISSION".
3. Form: submit empty (errors appear, focus moves to first error); bad email; valid entry (demo message, or success/failure with an endpoint).
4. Set `dateISO` to a future date, then a past date, to check the countdown.
5. Resize to ~1366, 768 and 375 px wide, and zoom to 200%. Check there is no sideways scrolling.
6. Tab through the page for visible focus; enable "reduce motion" in your OS and confirm animations stop.
7. Open DevTools Console: no errors.

## Deploy free (GitHub + Vercel)
1. Create a GitHub repo, then `git init && git add . && git commit -m "SPARK site" && git branch -M main && git remote add origin <repo-url> && git push -u origin main`.
2. On vercel.com choose **Add New > Project**, import the repo. Vercel auto-detects Vite (build `npm run build`, output `dist`). Click **Deploy**.
3. Open the public URL and repeat the test checklist on it.
Netlify and GitHub Pages also work (build `npm run build`, publish `dist`).

## Structure
`src/config.js` content and settings · `src/App.jsx` page sections · `src/components/` Nav, Crewmate (SVG art), Countdown, Accordion (rules and FAQ), RegisterForm · `src/styles.css` all styling.
