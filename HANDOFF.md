# High Canvas — Website Handoff Notes

React + TypeScript + Vite + Tailwind CSS rebuild of the High Canvas Framer site.

## Run it locally
```
npm install
npm run dev      # local dev server
npm run build    # production build -> dist/
```

## Where things live
- `src/pages/` — one file per page (Home, Voyages, SocialMission, Club, + 4 form pages). All wording is plain text in these files.
- `src/components/` — SiteHeader (nav), SiteFooter, PageHero, FormPage, Reveal (scroll animation).
- `src/index.css` — brand theme at the top: `--hc-cream: #F7F0DF`, `--hc-navy: #123F62`, `--hc-rust: #B44328`. Fonts: Libre Baskerville + Inter (loaded in `index.html`).
- `public/images/` — all artwork (logo, hero, watercolor icons, illustrations).
- `src/App.tsx` — the routes: /, /voyages, /social-mission, /club, /mailing-list, /book-a-berth, /join-the-crew, /partner-with-us.

## Known gaps / TODO
- Forms show a confirmation but don't send/store submissions yet.
- Voyage schedule, prices, testimonials, and About/founders content are not added yet.
- Social icons link to placeholder instagram.com / facebook.com — replace with real profiles.
