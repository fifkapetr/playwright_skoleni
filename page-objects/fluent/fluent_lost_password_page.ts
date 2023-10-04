import { type Locator, type Page } from "@playwright/test";
import { FluentLoginPage } from "./fluent_login_page";

export class FluentLostPasswordPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly submitButton: Locator;
  readonly emailInput: Locator;
  readonly backButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator("//input[@placeholder='Username']");
    this.submitButton = page.locator("//button[@type='submit']");
    this.emailInput = page.locator("//input[@placeholder='Email']");
    this.backButton = page.locator("//button[@id='back-btn']");
  }

  async fillUsername(username: string): Promise<FluentLostPasswordPage> {
    await this.usernameInput.fill(username);
    return this;
  }

  async clickSubmit(): Promise<FluentLostPasswordPage> {
    await this.submitButton.click();
    return this;
  }

  async fillEmail(email: string): Promise<FluentLostPasswordPage> {
    await this.emailInput.fill(email);
    return this;
  }

  async clickBack(): Promise<FluentLoginPage> {
    await this.backButton.click();
    return new FluentLoginPage(this.page);
  }
}
