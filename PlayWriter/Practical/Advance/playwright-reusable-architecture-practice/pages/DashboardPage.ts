import { Locator, Page } from '@playwright/test';

// PAGE LAYER / POM
// DashboardPage contains locators and actions related to dashboard only.
export class DashboardPage {
  readonly page: Page;
  readonly title: Locator;
  readonly welcomeMessage: Locator;
  readonly profileRole: Locator;
  readonly logoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.getByTestId('dashboard-title');
    this.welcomeMessage = page.getByTestId('welcome-message');
    this.profileRole = page.getByTestId('profile-role');
    this.logoutButton = page.getByTestId('logout-button');
  }

  async logout(): Promise<void> {
    await this.logoutButton.click();
  }
}
