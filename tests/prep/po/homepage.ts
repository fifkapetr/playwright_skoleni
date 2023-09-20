import { type Locator, type Page } from "@playwright/test";
import { LoginPage } from "./loginpage";

export class Homepage {
  readonly page: Page;
  readonly logout: Locator;

  // * Horní lišta
  public profile: Locator;
  public headerTitle: Locator;
  public bellIcon: Locator;

  // * Levé menu
  public logo: Locator;
  public dashboard: Locator;
  public projects: Locator;
  public users: Locator;
  public reports: Locator;
  public configuration: Locator;
  public applicationStructure: Locator;
  public extension: Locator;
  public tools: Locator;
  public documentation: Locator;

  // * Obsah
  public contentHeader: Locator;
  public firstParagraph: Locator;
  public secondParagraph: Locator;

  constructor(page: Page) {
    this.page = page;
    // * Horní lišta
    this.profile = page.locator("//li[@id='user_dropdown']");
    this.logout = page.locator("//li[@id='logout']");
    this.headerTitle = page.locator("//a[@class='navbar-brand']");
    this.bellIcon = page.locator(
      "//a[@class='dropdown-toggle']//i[@class='fa fa-bell-o']"
    );

    // * Levé menu
    this.logo = page.locator("//img[@title='TEG Project Management']");
    this.dashboard = page.locator("//li[@id='dashboard']//span");
    this.projects = page.locator("//li[@id='Projects']//span");
    this.users = page.locator("//li[@id='Users']//span");
    this.reports = page.locator(
      "//li[@id='Reports']//span[contains(@class,'submenu-level-0')]"
    );
    this.configuration = page.locator(
      "//li[@id='Configuration']//span[contains(@class,'submenu-level-0')]"
    );
    this.applicationStructure = page.locator(
      "//li[@id='Application Structure']//span[contains(@class,'submenu-level-0')]"
    );
    this.extension = page.locator("//li[@id='Extension']//span");
    this.tools = page.locator(
      "//li[@id='Tools']//span[contains(@class,'submenu-level-0')]"
    );
    this.documentation = page.locator(
      "//li[@id='Documentation']//span[contains(@class,'submenu-level-0')]"
    );

    // * Obsah
    this.contentHeader = page.locator("//h3[@id='welcome-page-header']");
    this.firstParagraph = page.locator(
      "//h3[@id='welcome-page-header']//..//p[1]"
    );
    this.secondParagraph = page.locator(
      "//h3[@id='welcome-page-header']//..//p[2]"
    );
  }

  async clickProfile(): Promise<Homepage> {
    await this.profile.click();
    return this;
  }

  async clickLogout(): Promise<LoginPage> {
    await this.logout.click();
    return new LoginPage(this.page);
  }
}
