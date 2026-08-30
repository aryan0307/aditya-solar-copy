# Deployment Guide for Suraj Timber & Plywood Co.

## 1. How to change the basename
1. Open `src/config.js`
2. Update the `BASENAME` variable:
   - For root domain deployment: set to `''`
   - For subdirectory deployment: set to your subdirectory (e.g., `'/surajtimber'`)
3. Optionally update `SITE_URL` to your actual domain

## 2. Build commands
- Install dependencies: `npm install`
- Production build: `npm run build`
  - Output is in the `dist/` directory

## 3. Environment Variables
No additional environment variables needed

## 4. Sitemap & Robots
- `sitemap.xml`: located in `public/`, update domain and basename as needed
- `robots.txt`: located in `public/`, update `Sitemap:` URL as needed

## 5. SEO Configuration
- Meta tags are configured in `src/App.jsx` using `react-helmet-async`
- Update `SITE_URL` in `src/config.js` for canonical URLs and Open Graph

## 6. Asset Structure
- All images and assets are properly imported as ES modules and optimized by Vite
- Logo: `src/assets/logo.png`
- Product images: `src/assets/products/`
- Office/Showroom images: `src/assets/office/`
- Brand logos: `src/assets/brands/`

## Notes
- Favicon and Open Graph image placeholders are referenced in meta tags; replace with actual images
