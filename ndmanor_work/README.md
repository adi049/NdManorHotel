# Hotel ND Manor, Dehradun

Premium hotel website built with Next.js, Tailwind CSS and PostgreSQL (Drizzle).

## Setup
1. Copy `.env.example` to `.env` and set `DATABASE_URL` and `NEXT_PUBLIC_SITE_URL` to the verified production domain.
2. Run `npm install`.
3. Run `npx drizzle-kit push` to create the `inquiries` table.
4. Run `npm run dev` for development or `npm run build && npm run start` for production.

## Booking flow
The form sends a booking inquiry to PostgreSQL using `POST /api/inquiries`. This does not confirm a reservation or take payment. Hotel staff must confirm availability directly.

## Before production
- Confirm room details, genuine hotel photos and permission to use them.
- Configure production database and Resend email credentials.
- Confirm final domain and DNS/HTTPS.
- Validate policies, contact details and all claims on the site.

See `IMAGE-SOURCES.md` and `AUDIT-REPORT.md` for important limitations.