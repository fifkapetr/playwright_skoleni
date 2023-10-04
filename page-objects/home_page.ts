import { type Locator, type Page } from "@playwright/test";

export class HomePage {
  readonly page: Page;
  readonly profileButton: Locator;
  readonly logOffButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.profileButton = page.locator("//li[@id='user_dropdown']");
    this.logOffButton = page.locator("//li[@id='logout']");
  }

  async clickProfile() {
    await this.profileButton.click();
  }

  async clickLogoff() {
    await this.logOffButton.click();
  }
}
