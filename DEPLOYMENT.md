# Deployment Guide

This project is optimized for deployment on **Vercel**, offering zero-configuration deployments, edge caching, and automated PR previews.

## Vercel Deployment Steps

1. Create an account on [Vercel](https://vercel.com).
2. Connect your GitHub/GitLab repository.
3. Import the `NexusLands` repository.
4. **Build Settings**: Vercel will automatically detect Vite. 
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. **Environment Variables**: Add the following variables to the Vercel dashboard:
   - `VITE_GA_ID`: Your Google Analytics 4 Measurement ID (e.g., `G-XXXXXXX`)
   - `VITE_GTM_ID`: Your Google Tag Manager ID (e.g., `GTM-XXXXXXX`)
   - `VITE_CLARITY_ID`: Your Microsoft Clarity ID.

## Security & Caching Configuration

The repository includes a `vercel.json` file which automatically enforces:
- Strict HTTPS Transport Security (HSTS).
- Content-Security-Policy (CSP) headers.
- Immutable caching for `/assets/` (CSS/JS files).
- Clean URLs (without `.html`).

## Cloudflare Pages (Alternative)
If you prefer Cloudflare Pages:
1. Connect the repository.
2. Build command: `npm run build`
3. Output directory: `dist`
4. Add the environment variables similarly. 
*Note: `vercel.json` headers will not apply to Cloudflare natively; you may need to use Cloudflare Pages `_headers` file.*
