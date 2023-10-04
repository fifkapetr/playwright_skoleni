import { type Locator, type Page } from "@playwright/test";
import { FluentHomePage } from "./fluent_home_page";
import { FluentLostPasswordPage } from "./fluent_lost_password_page";

export class FluentLoginPage {
  readonly page: Page;
  readonly url = "http://tredgate.com/pmtool/";
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly lostPasswordAnchor: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator("#username");
    this.passwordInput = page.locator("#password");
    this.loginButton = page.locator("//button[@type='submit']");
    this.lostPasswordAnchor = page.locator("//a[@id='forget_password']");
  }

  async openPmtool(): Promise<FluentLoginPage> {
    await this.page.goto(this.url);
    return this;
  }

  async fillUsername(username: string): Promise<FluentLoginPage> {
    await this.usernameInput.fill(username);
    return this;
  }

  async fillPassword(password: string): Promise<FluentLoginPage> {
    await this.passwordInput.fill(password);
    return this;
  }

  async clickLogin(): Promise<FluentHomePage> {
    await this.loginButton.click();
    return new FluentHomePage(this.page);
  }

  async clickLostPassword(): Promise<FluentLostPasswordPage> {
    await this.lostPasswordAnchor.click();
    return new FluentLostPasswordPage(this.page);
  }
}
