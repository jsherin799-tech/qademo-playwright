import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly backToHomeLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.backToHomeLink = page.getByTestId('back-to-home-link');
  }

  async navigateToHome() {
    await this.page.goto('/');
  }

  async goBackToHome() {
    await this.backToHomeLink.click();
  }
}