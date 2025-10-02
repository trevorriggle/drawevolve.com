# drawevolve.com
DrawEvolve marketing site - AI-powered drawing feedback for artists

## Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Waitlist:** Tally.so form embed (see setup below)
- **Future Auth:** Supabase (for iOS app authentication)

## Waitlist Setup (Tally.so)

The iPad beta waitlist uses Tally.so for email collection. To set it up:

1. Go to [tally.so](https://tally.so) and create a free account
2. Create a new form with an email field
3. Get the embed code (Share → Embed)
4. Replace `YOUR_FORM_ID` in `components/marketing/EmailCapture.tsx` with your actual form ID
5. View submissions in your Tally dashboard
6. Export to CSV or integrate with email tools as needed

**Note:** The old `/api/subscribe` endpoint is still available but unused. It was set up for Supabase but we're using Tally instead for simplicity. Supabase will be used for iOS app authentication later.

## Development

```bash
npm install
npm run dev
```

Build for production:
```bash
npm run build
```
