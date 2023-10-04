import { test } from "@playwright/test";
import { LoginPage } from "../page-objects/login_page";
import { HomePage } from "../page-objects/home_page";

test("Test Page Objects", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.openPmtool();
  await loginPage.fillUsername("pw_skoleni");
  await loginPage.fillPassword("TEG2023");
  await loginPage.clickLogin();
});

test("Login and Logout test", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);
  await loginPage.openPmtool();
  await loginPage.fillUsername("pw_skoleni");
  await loginPage.fillPassword("TEG2023");
  await loginPage.clickLogin();
  await homePage.clickProfile();
  await homePage.clickLogoff();
});
