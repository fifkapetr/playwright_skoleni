import { type Locator, type Page } from "@playwright/test";

export class GeneralPOPage {
  readonly page: Page;
  readonly someElement: Locator;

  constructor(page: Page) {
    this.page = page;
    this.someElement = page.locator("locator");
  }

  async someFunction() {
    await this.someElement.click();
  }
}
