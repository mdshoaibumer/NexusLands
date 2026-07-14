import puppeteer from "puppeteer";

(async () => {
  console.log("Launching browser...");
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const artifactDir = "C:/Users/mdsho/.gemini/antigravity/brain/fc39ea1a-a864-4d05-bb14-29a45c95a001";
  
  console.log("Navigating to http://localhost:5173/...");
  await page.goto("http://localhost:5173/", { waitUntil: "networkidle0" });

  // Desktop
  await page.setViewport({ width: 1440, height: 900 });
  await page.screenshot({ path: `${artifactDir}/desktop_render.png`, fullPage: true });
  console.log(`Desktop screenshot taken.`);

  // Mobile
  await page.setViewport({ width: 375, height: 812, isMobile: true, hasTouch: true });
  await page.goto("http://localhost:5173/", { waitUntil: "networkidle0" });
  await page.screenshot({ path: `${artifactDir}/mobile_render.png`, fullPage: true });
  console.log(`Mobile screenshot taken.`);

  // Tablet
  await page.setViewport({ width: 768, height: 1024 });
  await page.goto("http://localhost:5173/", { waitUntil: "networkidle0" });
  await page.screenshot({ path: `${artifactDir}/tablet_render.png`, fullPage: true });
  console.log(`Tablet screenshot taken.`);

  console.log("Closing browser...");
  await browser.close();
})();
