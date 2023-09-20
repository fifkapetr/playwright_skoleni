import { expect, test } from "@playwright/test";

test("Check Create new User modal", async ({ page }) => {
  await page.goto("http://tredgate.com/pmtool/");
  await page.locator("#username").fill("pw_skoleni");
  await page.locator("#password").fill("TEG2023");
  await page.locator("//button[@type='submit']").click();
  await page.locator("//li[@id='Projects']").click();
  await expect(page.locator(".table-bordered")).toBeVisible();
  await page.locator("//button[@test_id='Add Project']").click();
  await expect(page.locator('div[data-testid="Name"] input')).toBeVisible();
  await expect(page.locator("button[type='submit']")).toHaveText("Save");
});
