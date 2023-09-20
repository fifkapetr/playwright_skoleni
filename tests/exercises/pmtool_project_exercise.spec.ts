import { test } from "@playwright/test";

test("Click Projects in PMTool", async ({ page }) => {
  await page.goto("http://tredgate.com/pmtool/");
  await page.locator("#username").fill("pw_skoleni");
  await page.locator("#password").fill("TEG2023");
  await page.locator("//button[@type='submit']").click();
  await page.locator("//li[@id='Projects']").click();
});
