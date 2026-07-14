import { test, expect } from '@playwright/test';

test.describe('NexusLands E2E User Journey', () => {
  test('should navigate across pages and submit contact form successfully', async ({ page, isMobile }) => {
    // 1. Load Homepage
    await page.goto('/');
    await expect(page).toHaveTitle(/NexusLands/);

    // 2. Navigation
    if (isMobile) {
      // Test mobile hamburger menu
      await page.getByRole('button', { name: 'Open menu' }).click();
      await page.getByRole('link', { name: 'About', exact: true }).click();
    } else {
      // Test desktop navigation
      await page.getByRole('navigation').getByRole('link', { name: 'About' }).click();
    }
    
    // Check we are on About page
    await expect(page).toHaveURL(/\/about/);
    await expect(page.getByRole('heading', { name: /About NexusLands/i })).toBeVisible();

    // 3. Go to Contact Page
    await page.goto('/contact');
    
    // 4. Fill and submit the form
    await page.getByLabel('Full name').fill('QA Tester');
    await page.getByLabel('Phone').fill('9999999999');
    await page.getByLabel('Property location (village / taluk)').fill('10 Acres in Sathgalli');
    await page.getByLabel('Tell us about your enquiry').fill('This is an automated E2E test to verify form submission.');
    
    // In Playwright, opening a new tab (target="_blank" in window.open) needs to be handled 
    // or we can just mock/intercept it. Since window.open happens after 1.5 seconds, 
    // we just verify the UX state changes to "Redirecting to WhatsApp..."
    
    // Wait for the button and click it
    const submitButton = page.getByRole('button', { name: /Request Evaluation/i });
    await submitButton.click();
    
    // Verify the UX transition state appears
    await expect(page.getByRole('button', { name: /Redirecting to WhatsApp/i })).toBeVisible({ timeout: 2000 });
  });
});
