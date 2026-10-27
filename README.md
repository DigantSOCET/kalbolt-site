# KalBOLT PVT LTD website (Vercel)

"/" serves `public/site.html` (the site; edit its CONFIG block for content). `/api/inquiry` and `/api/training-inquiry` validate server-side, rate-limit, sanitise and email the inquiry. Nothing is stored in a database: inquiries live only in the receiving mailbox (set a retention rule there). A success message appears only after the email provider accepts the message.

## Run locally
npm install && cp .env.example .env.local   # fill values, or DEV_SIMULATE_SUBMISSIONS=true
npm run dev   # http://localhost:3000

## Deploy to Vercel
1. Push this folder to a GitHub repo. 2. vercel.com > Add New > Project > import it.
3. Add the env vars from .env.example. 4. Deploy.
5. Resend: create account, add domain kalbolt.com, add the DNS records it shows in GoDaddy (SPF/DKIM), wait for "Verified", then create the API key.
6. Vercel > Settings > Domains: add kalbolt.com and www.kalbolt.com; copy the DNS records Vercel shows into GoDaddy DNS (remove the default parked A record). Keep mail records.
7. Submit both forms on the live site and confirm both emails arrive.

## Before launch
Replace placeholders (logo/colours, photos, contact details, advisory profiles), real monitored privacy@ and info@ mailboxes, legal review of the policy pages, add Cloudflare Turnstile or Vercel KV rate limiting, and confirm what analytics (if any) you use.
