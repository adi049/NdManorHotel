# Hotel ND Manor Website

A Next.js 16 + React 19 website for Hotel ND Manor, Dehradun. The deployable application is at the repository root (`src/app`, `src/components`, `src/db`). The `ndmanor_work/` directory retains the original working copy and extra notes.

## Deploy

1. Import this repository into Vercel. It should detect Next.js at the root.
2. Set environment variables: `DATABASE_URL` and `NEXT_PUBLIC_SITE_URL`.
3. Apply the Drizzle schema from the repository root with `npx drizzle-kit push` using the configured database.
4. Optional email notifications need `RESEND_API_KEY`, `RESEND_FROM`, and `INQUIRY_TO`.
5. Test the contact/booking inquiry and verify domain/DNS and email delivery before advertising the site.

The form is a booking **inquiry**, not a reservation confirmation. Without `DATABASE_URL` it will not save inquiries. Reference photos are remotely hosted; confirm commercial permissions or replace them with hotel-approved images before public marketing.

## Local development

```bash
cp .env.example .env
npm install
npm run dev
```

Build checks are configured in GitHub Actions under `.github/workflows/ci.yml`. Review `AUDIT-REPORT.md` and `SETUP-NOTES.md` before production.