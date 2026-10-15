# Deployment notes

This is a Next.js app, not a static HTML website. Use Vercel or another Node.js-supported host. GitHub Pages will not run the PostgreSQL-backed inquiry API.

1. Import `adi049/NdManorHotel` into Vercel.
2. Set the project Root Directory to `ndmanor_work`.
3. Add `DATABASE_URL` and `NEXT_PUBLIC_SITE_URL` environment variables.
4. Run `npx drizzle-kit push` from the project root against the production database, using a trusted secure connection.
5. Add `RESEND_API_KEY`, `RESEND_FROM`, and `INQUIRY_TO` if email notifications are wanted.
6. Verify the hotel owns/configures the domain, then test inquiry submissions and email delivery.

The domain, database and mail credentials need owner action. Do not commit `.env` or secrets. Run `npm install`, `npm run typecheck`, `npm run lint`, and `npm run build` before announcing launch.