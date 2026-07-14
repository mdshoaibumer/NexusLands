# Maintenance & Content Updates

This document outlines how to maintain the NexusLands website post-launch.

## Updating Content

The website utilizes standard React components. Content is maintained directly within the `.tsx` files in the `/src/components/sections/` directory.

### To update the FAQ:
1. Open `src/components/sections/Faq.tsx`.
2. Locate the `const items = [ ... ]` array.
3. Add, edit, or remove objects with `{ q: "Question", a: "Answer" }`.
4. The JSON-LD SEO schema is automatically generated based on this array.

### To update Contact Info:
1. Core phone numbers and URLs are stored in `src/lib/constants.ts`.
2. Update `WHATSAPP_NUMBER` and `WA_URL`.
3. Office address details can be updated directly in `Contact.tsx` and `Footer.tsx`.

## Updating Images

Images are stored in `src/assets/images/`.
- Ensure new images are optimized (use WebP format or TinyPNG to compress).
- Update the import statement in the respective component. 
For example, to update the Hero background:
```tsx
import heroImg from "@/assets/images/new-hero.jpg";
```

## SEO Management

SEO is managed via the `src/lib/seo.ts` utility. 
- Open `src/lib/seo.ts` to edit default meta descriptions.
- The `robots.txt` and `sitemap.xml` are located in the `/public/` directory and should be manually updated if new routes are added.
