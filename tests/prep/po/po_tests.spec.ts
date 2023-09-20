import { test } from "@playwright/test";
import { LoginPage } from "./loginpage";

test("Test Page Objects", async ({ page }) => {
  const loginPage = await new LoginPage(page);
  await loginPage
    .openPmtool()
    .then((page) => page.fillUsername("pw_skoleni"))
    .then((page) => page.fillPassword("TEG2023"))
    .then((page) => page.clickLoginButton())
    .then((page) => page.clickProfile())
    .then((page) => page.clickLogout());
});
