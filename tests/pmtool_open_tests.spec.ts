import { test } from "@playwright/test";

test("Open PMTool and fill username and password", async ({ page }) => {
  await page.goto("http://tredgate.com/pmtool/");
  await page.locator("#username").fill("username");
  await page.locator("#password").fill("password");
});
