import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:5173',
    trace: 'on-first-retry',
  },
  projects: [
    // Desktop Viewports
    {
      name: 'Desktop 1920x1080',
      use: { browserName: 'chromium', viewport: { width: 1920, height: 1080 } },
    },
    {
      name: 'Desktop 1600x900',
      use: { browserName: 'chromium', viewport: { width: 1600, height: 900 } },
    },
    {
      name: 'Desktop 1440x900',
      use: { browserName: 'chromium', viewport: { width: 1440, height: 900 } },
    },
    {
      name: 'Desktop 1366x768',
      use: { browserName: 'chromium', viewport: { width: 1366, height: 768 } },
    },
    // Tablet Viewports
    {
      name: 'iPad Air',
      use: { browserName: 'chromium', ...devices['iPad Air'] },
    },
    {
      name: 'iPad Pro',
      use: { browserName: 'chromium', ...devices['iPad Pro 11'] }, // iPad Pro 11 is available
    },
    // Android Mobile Viewports
    {
      name: 'Pixel 7',
      use: { browserName: 'chromium', ...devices['Pixel 7'] },
    },
    {
      name: 'Pixel 8 (Custom Viewport)',
      use: { browserName: 'chromium', viewport: { width: 412, height: 892 }, hasTouch: true, isMobile: true },
    },
    {
      name: 'Galaxy S23 (Custom Viewport)',
      use: { browserName: 'chromium', viewport: { width: 360, height: 780 }, hasTouch: true, isMobile: true },
    },
    // iPhone Viewports (Using Chromium as requested)
    {
      name: 'iPhone 13',
      use: { browserName: 'chromium', ...devices['iPhone 13'] },
    },
    {
      name: 'iPhone 14 Pro',
      use: { browserName: 'chromium', ...devices['iPhone 14 Pro'] },
    },
    {
      name: 'iPhone 15 Pro Max',
      use: { browserName: 'chromium', ...devices['iPhone 15 Pro Max'] },
    },
  ],
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:5173',
    reuseExistingServer: !process.env.CI,
  },
});
