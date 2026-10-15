# Hotel ND Manor Website

The Next.js application source is in [`ndmanor_work/`](./ndmanor_work/).

## Deploy on Vercel
1. Import this GitHub repository into Vercel.
2. Set **Root Directory** to `ndmanor_work` in Project Settings.
3. Use the default Next.js build (`npm run build`).
4. Configure `DATABASE_URL` and `NEXT_PUBLIC_SITE_URL`. To send inquiry email, configure `RESEND_API_KEY`, `RESEND_FROM`, and `INQUIRY_TO`.
5. Run the database schema setup using the instructions in `ndmanor_work/README.md`.
6. Verify domain/DNS, submit a test inquiry, and confirm delivery before sharing the live URL.

This site uses PostgreSQL and a server-side inquiry API; GitHub Pages is not a compatible host without removing/reworking the API. Read [`ndmanor_work/SETUP-NOTES.md`](./ndmanor_work/SETUP-NOTES.md) and [`ndmanor_work/AUDIT-REPORT.md`](./ndmanor_work/AUDIT-REPORT.md) for launch blockers. No live deployment is claimed until a host build succeeds and the domain is verified.