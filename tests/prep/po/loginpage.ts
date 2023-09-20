import { type Locator, type Page } from "@playwright/test";
import { Homepage } from "./homepage";

export class LoginPage {
  readonly page: Page;
  readonly url = "http://tredgate.com/pmtool/";
  readonly username: Locator;
  readonly password: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.username = page.locator("#username");
    this.password = page.locator("#password");
    this.loginButton = page.locator("//button[@type='submit']");
  }

  async openPmtool(): Promise<LoginPage> {
    await this.page.goto(this.url);
    return this;
  }

  async fillUsername(username: string): Promise<LoginPage> {
    await this.username.fill(username);
    return this;
  }

  async fillPassword(password: string): Promise<LoginPage> {
    await this.password.fill(password);
    return this;
  }

  async clickLoginButton(): Promise<Homepage> {
    await this.loginButton.click();
    return new Homepage(this.page);
  }
}
