import { test, expect } from '@playwright/test';

const ROUTES = [
  '/',
  '/about',
  '/services',
  '/services/outright-property-sale',
  '/services/joint-venture',
  '/services/joint-development',
  '/faq',
  '/contact',
  '/legal/terms',
  '/legal/privacy',
  '/legal/disclaimer',
  '/404-test-page'
];

test.describe('Comprehensive QA Audit', () => {
  ROUTES.forEach(route => {
    test(`QA checks for ${route}`, async ({ page, isMobile }) => {
      const consoleErrors: string[] = [];
      const jsErrors: Error[] = [];

      page.on('console', msg => {
        if (msg.type() === 'error') {
          consoleErrors.push(msg.text());
        }
      });
      page.on('pageerror', error => {
        jsErrors.push(error);
      });

      await page.goto(route);

      // Give some time for client-side routing/hydration and animations
      await page.waitForTimeout(2000);

      // Check for console/js errors
      expect(consoleErrors).toEqual([]);
      expect(jsErrors).toEqual([]);

      // Check for horizontal scrolling / overflow
      const hasHorizontalScroll = await page.evaluate(() => {
        return document.documentElement.scrollWidth > document.documentElement.clientWidth;
      });
      expect(hasHorizontalScroll, 'Page has horizontal scrolling / overflow').toBe(false);

      // Scroll to bottom to trigger lazy-loaded images
      await page.evaluate(async () => {
        await new Promise<void>((resolve) => {
          let totalHeight = 0;
          const distance = 1000;
          let maxScrolls = 20; // Bound to max 20 scrolls (20k pixels)
          const timer = setInterval(() => {
            const scrollHeight = document.body.scrollHeight;
            window.scrollBy(0, distance);
            totalHeight += distance;
            maxScrolls--;

            if (totalHeight >= scrollHeight || maxScrolls <= 0) {
              clearInterval(timer);
              resolve();
            }
          }, 50);
        });
      });

      // Wait a bit for network requests of lazy images to finish
      await page.waitForTimeout(1000);

      // Check for broken images
      const brokenImages = await page.evaluate(() => {
        return Array.from(document.images).filter(img => {
          return img.naturalWidth === 0 && img.getAttribute('src') !== null;
        }).length;
      });
      expect(brokenImages, 'Found broken images').toBe(0);
    });
  });
});
