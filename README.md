# ByTech

Marketing site and repair-ticket system for ByTech, Renfrew.

Next.js 16 (App Router) · Tailwind CSS 3 · Framer Motion 11 · React 19.

---

## Running locally

```bash
npm install
npm run dev
```

Serves on <http://localhost:3100>.

The marketing site runs with **no configuration at all**. Copy `.env.example`
to `.env.local` only if you want the booking, tracking and admin features.

---

## What's in here

```
app/
  page.js                 marketing home page, composes every section
  book-repair/            booking form
  track-repair/           customer ticket lookup
  admin/                  login, dashboard, ticket detail
  api/                    tickets, tracking, admin auth
  globals.css             design tokens + the glass/button/motion families
components/
  hero/                   Hero, backdrop, device, floating chips, lens flare
  sections/               Services, Devices, HowItWorks, Stats,
                          Testimonials, Contact, Footer
  Navbar.js Logo.js Icons.js
lib/
  content.js              ALL site copy lives here
  motion.js               shared animation presets
  useDragScroll.js        wheel + drag scrolling for horizontal rails
  useParallax.js          cursor parallax for the hero
  auth.js auth-server.js  edge-safe admin sessions
  tickets.js              database access
public/
  brand/                  logo art and background plates
  gallery/                real repair photos, one folder per category
proxy.js                  middleware guarding /admin
tailwind.config.js        colour, type, radius, shadow and easing tokens
```

### Editing content

Almost all copy sits in `lib/content.js` — headline, subheadline, hero chips,
services, repair categories, timeline steps, stats, testimonials, contact
details, footer columns. Every section takes its text as props, so the file is
just the default wiring. You rarely need to touch a component to change words.

### The design system

`app/globals.css` and `tailwind.config.js` hold the tokens the whole site
shares. Reuse these rather than inventing new values:

- **Colour** — `brand-navy`, `brand-red`, `background-primary`,
  `background-offwhite`, `text-primary`, `text-muted`, `glass-surface`,
  `glass-border`
- **Type** — `heading-xl` … `label-sm`, `counter-xl`
- **Glass** — `glass-panel-heavy`, `glass-panel-light`, `glass-panel-outline`
- **Buttons** — `button-primary`, `button-secondary`, `button-ghost`
  (all on top of `btn-base`)
- **Motion** — `fadeUp`, `staggerContainer`, `revealOnce` from `lib/motion.js`;
  `ease-brand` and `duration-hover` in Tailwind
- **Hero scale** — `--hero-u` is one reference pixel. The hero is drawn against
  a 1344×752 comp; past that width the whole composition scales with the
  viewport. Write hero measurements as `calc(24 * var(--hero-u))`.

Each section deliberately uses a *different* structure — bento grid, scroll-snap
carousel, zigzag timeline, full-bleed strip, pull-quote, asymmetric split. Keep
that variety when adding sections: share the tokens, not the container shape.

---

## Environment variables

| Variable | Needed for | Notes |
| --- | --- | --- |
| `ADMIN_PASSWORD` | `/admin` | Password only, there is no username field |
| `SESSION_SECRET` | `/admin` | Long random string, signs the session cookie |
| `POSTGRES_URL` / `DATABASE_URL` | tickets, tracking, admin | Vercel injects these when a Postgres store is linked |

Without them the marketing site still builds and renders; the ticket routes
return errors when called.

### Database setup

The ticket routes expect one `tickets` table. Run `schema.sql` once against
your database (Neon and Vercel Postgres both have a SQL editor in the
dashboard). It is safe to re-run.

| Route | Method | Auth | Purpose |
| --- | --- | --- | --- |
| `/api/tickets` | POST | public | create a repair request |
| `/api/track` | POST | public | look a ticket up by its number |
| `/api/admin/login` | POST / DELETE | password | sign in, sign out |
| `/api/admin/tickets` | GET / PATCH | session cookie | list tickets, set status |

---

## Working in v0.dev

The project builds with **no environment variables**, which is what makes it
importable — verified with `next build` against an empty environment.

**Getting it in.** v0 works from a Git repository, so push this folder to
GitHub first and import the repo. Do not paste the whole tree in by hand.

```bash
git init
git add .
git commit -m "ByTech site"
git remote add origin <your-repo-url>
git push -u origin main
```

`.gitignore` already excludes `node_modules`, `.next`, `.vercel` and every
`.env*.local`, so no secrets travel with it. `.env.example` documents the
variable names without their values.

**What will and won't run in a v0 preview.** Everything under `app/page.js` —
the entire marketing site — is self-contained and previews fine. The routes
under `app/api/` and `app/admin/` talk to Postgres and read `ADMIN_PASSWORD`
and `SESSION_SECRET`; in a sandbox with no database and no secrets those pages
render but any action against them fails. That is expected, not a broken
import. Treat them as pass-through and do your v0 work on the marketing
sections.

**Keeping edits mergeable.** v0 leans toward TypeScript and shadcn/ui; this
project is plain JavaScript with a hand-built token layer and no component
library. If you ask v0 for new UI it will tend to generate shadcn components
and Tailwind defaults that ignore the tokens above. Either paste the design
system section of this README into your v0 prompt, or expect to translate the
result onto `glass-panel-*`, `button-*` and the colour and type scales by hand
before merging.

**Assets.** `public/` is about 12 MB, mostly the real repair photographs in
`public/gallery/`. They are referenced by path from `lib/content.js`, so they
must come across with the repo or the Devices carousel renders empty frames.

---

## Deploying

This folder is not yet linked to a Vercel project or a Git remote. To link
and deploy:

```bash
npx vercel
```

There is an existing Vercel project named `bytech` from the previous version
of the site. Link to that one to keep its domain and database connection, or
create a new project and re-link both.

Set `ADMIN_PASSWORD`, `SESSION_SECRET` and the Postgres variables in the
Vercel dashboard before the ticket features will work in production.
