import puppeteer from "puppeteer";

(async () => {
  console.log("Launching browser...");
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Set a standard desktop viewport
  await page.setViewport({ width: 1440, height: 900 });

  console.log("Navigating to http://localhost:5173/...");
  await page.goto("http://localhost:5173/", { waitUntil: "networkidle0" });

  // Take screenshot
  const screenshotPath =
    "C:/Users/mdsho/.gemini/antigravity/brain/2d931f76-1fb2-4ac6-a257-7b2f28b02247/nexuslands_home.png";
  console.log(`Taking screenshot to ${screenshotPath}...`);
  await page.screenshot({ path: screenshotPath, fullPage: true });

  console.log("Closing browser...");
  await browser.close();

  console.log("Screenshot successfully taken!");
})();
