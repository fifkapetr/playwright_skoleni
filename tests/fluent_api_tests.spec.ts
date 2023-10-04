import { test } from "@playwright/test";
import { FluentLoginPage } from "../page-objects/fluent/fluent_login_page";

test("Fluent - login, logout test", async ({ page }) => {
  const loginPage = new FluentLoginPage(page);
  await loginPage
    .openPmtool()
    .then((page) => page.fillUsername("pw_skoleni"))
    .then((page) => page.fillPassword("TEG2023"))
    .then((page) => page.clickLogin())
    .then((page) => page.waitOnPage())
    .then((page) => page.clickProfile())
    .then((page) => page.clickLogoff());
});
