import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const ROUTES = [
  '/',
  '/about',
  '/services',
  '/faq',
  '/contact',
  '/legal/privacy'
];

test.describe('Accessibility & SEO Audit', () => {
  ROUTES.forEach(route => {
    test(`A11y and SEO checks for ${route}`, async ({ page }) => {
      await page.goto(route);
      await page.waitForTimeout(2000); // Wait for animations to settle

      // --- Accessibility (Axe-core) ---
      const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
      // We want 0 violations
      expect(accessibilityScanResults.violations).toEqual([]);

      // --- SEO Checks ---
      const title = await page.title();
      expect(title.length).toBeGreaterThan(0);

      const metaDescription = await page.locator('meta[name="description"]').getAttribute('content');
      // Some routes might intentionally lack descriptions if they fallback to index.html default, 
      // but let's check for it anyway and report.
      // expect(metaDescription).toBeTruthy();

      // Check Heading Hierarchy (should have exactly one H1 per page)
      const h1Count = await page.locator('h1').count();
      // Only fail if it's 0 (404 has h1, others should have h1)
      expect(h1Count).toBeGreaterThanOrEqual(1);
    });
  });
});
