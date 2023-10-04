import { test } from "@playwright/test";
import { FluentLoginPage } from "../page-objects/fluent/fluent_login_page";

test("Lost Password test", async ({ page }) => {
  const loginPage = new FluentLoginPage(page);
  await loginPage
    .openPmtool()
    .then((page) => page.clickLostPassword())
    .then((page) => page.fillEmail("email@test"))
    .then((page) => page.fillUsername("abcd"))
    .then((page) => page.clickSubmit())
    .then((page) => page.clickBack());
});
