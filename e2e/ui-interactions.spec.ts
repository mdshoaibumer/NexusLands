import { test, expect } from '@playwright/test';

test.describe('NexusLands UI Interactions & Animations', () => {
  
  test('Menu navigation functionality (Desktop vs Mobile)', async ({ page, isMobile }) => {
    await page.goto('/');

    if (isMobile) {
      // Open the mobile menu
      const menuButton = page.getByRole('button', { name: 'Open menu' });
      await menuButton.click();
      
      // The menu overlay should become visible
      const mobileNav = page.locator('.fixed.inset-0 nav');
      await expect(mobileNav).toBeVisible();

      // Click Services
      await page.getByRole('link', { name: 'Services', exact: true }).click();
      
      // Verify menu is closed (the nav should be hidden or have opacity 0)
      // Since it's animated out, it might still exist in DOM but be invisible
      // Playwright's toBeHidden() handles opacity 0 and display none.
      await expect(page.getByRole('button', { name: 'Close menu' })).toBeHidden();
    } else {
      // Desktop nav
      await page.getByRole('navigation').getByRole('link', { name: 'Services', exact: true }).click();
    }
    
    // Check we navigated successfully
    await expect(page).toHaveURL(/\/services/);
    await expect(page.getByRole('heading', { name: /Our Services/i })).toBeVisible();
  });

  test('Hash link scrolling behavior in Hero', async ({ page, isMobile }) => {
    if (isMobile) return; // scroll link is hidden on mobile
    await page.goto('/');
    
    // Get initial scroll position
    const initialScrollY = await page.evaluate(() => window.scrollY);
    expect(initialScrollY).toBe(0);

    // Click the "Scroll" hash link pointing to #trust
    const scrollLink = page.getByRole('link', { name: 'Scroll to next section' });
    await scrollLink.click();
    
    // Wait for the scrolling animation to finish. 
    // We can just wait for scrollY > 0.
    await page.waitForFunction(() => window.scrollY > 0, { timeout: 3000 });
    
    // Ensure the TrustBar is visible in the viewport now
    const trustSection = page.locator('#trust');
    await expect(trustSection).toBeInViewport();
  });

  test('Scroll animations trigger correctly', async ({ page }) => {
    await page.goto('/');
    
    // We'll look for an element that uses Framer Motion's whileInView or initial={opacity:0} 
    // and wait for it to become visible (opacity > 0) upon scroll.
    
    // For example, the Process section heading
    const processHeading = page.getByRole('heading', { name: /A simple, considered process./i });
    
    // It should be attached to the DOM
    await expect(processHeading).toBeAttached();
    
    // Scroll down aggressively to the process section
    await processHeading.scrollIntoViewIfNeeded();
    
    // The element should now become visible 
    // Playwright's toBeVisible automatically waits for opacity > 0
    await expect(processHeading).toBeVisible({ timeout: 2000 });
    
    // Check FAQ section as well
    const faqHeading = page.getByRole('heading', { name: /Clarity in every transaction./i });
    await faqHeading.scrollIntoViewIfNeeded();
    await expect(faqHeading).toBeVisible({ timeout: 5000 });
  });

});
