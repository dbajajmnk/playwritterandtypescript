import { Locator, Page } from '@playwright/test';

export class DashboardPage {
  readonly page: Page;
  readonly section: Locator;
  readonly welcomeMessage: Locator;
  readonly logoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.section = page.locator('#dashboard-section');
    this.welcomeMessage = page.getByTestId('welcome-message');
    this.logoutButton = page.getByRole('button', { name: 'Logout' });
  }

  async logout() {
    await this.logoutButton.click();
  }
}
