import { Page, Locator } from '@playwright/test';

export class AdminPage {
  readonly page: Page;
  readonly adminHeading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.adminHeading = page.getByTestId('navbar-signin-link');
  }

  async goto() {
    await this.page.goto('/');
  }
}