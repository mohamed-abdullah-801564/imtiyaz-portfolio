<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Mohamed Imtiaz Portfolio Application

This project is a high-performance, interactive portfolio web application for Mohamed Imtiaz (Digital Marketer, Graphic Designer & Social Media Manager).

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies:
   `npm install`
2. Run dev server:
   `npm run dev`

---

## Typography

### Card Internal Typography System
Establish a rigid typography hierarchy inside all cards (Experience, Expertise, and Clients):

- **Card Title / Company Name**: Semi-bold or Medium weight, clean sizing (e.g., `text-sm` or `text-base`), using high-contrast foreground color (`text-foreground` / `text-white`).
- **Card Subtitle / Date / Role**: Muted smaller font (`text-xs` or `text-sm`), using secondary text color (`text-muted-foreground` / `text-zinc-400`).
- **Card Body Description**: Clean, readable paragraph styling with tight line-height (`leading-relaxed`), constrained font size (`text-xs`), and strict padding inside the cards (minimum `p-4` or `p-5`) to prevent text from touching card borders or getting clipped.
