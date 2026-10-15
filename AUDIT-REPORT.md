# Hotel ND Manor website update report

## Included changes
- Added the Next.js website source and supporting metadata, environment template, and setup notes.
- Added SEO metadata, robots.txt and sitemap routes.
- Booking is implemented as an inquiry only, not an automatic reservation.

## Important blockers before a public launch
- Verify that `NEXT_PUBLIC_SITE_URL` matches a domain actually controlled by the hotel.
- Configure `DATABASE_URL` in the hosting provider and apply Drizzle schema.
- Add valid Resend credentials and a confirmed sender/recipient if inquiry emails are needed.
- The project references remote photos from third-party travel listings. Public availability does not mean commercial reuse is licensed. Obtain permission or replace these with owner-provided/licensed files.
- This is a Node.js Next.js app and cannot run on GitHub Pages as a static site without significant architecture changes. Deploy to Vercel or another Node.js-compatible host.
- Build and browser tests were not run in this environment. Run `npm install`, `npm run typecheck`, `npm run lint`, and `npm run build` after installation and fix any reported issues before production.
