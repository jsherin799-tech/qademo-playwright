import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly signInNavButton: Locator;
  readonly googleSignInButton: Locator;

  constructor(page: Page) {
    this.page = page;
    // Specific test ID for navbar signin button
    this.signInNavButton = page.getByTestId('navbar-signin-link');
    this.googleSignInButton = page.getByTestId('google-signin-button');
  }

  async goto() {
    await this.page.goto('/');
  }

  async clickSignIn() {
    await this.signInNavButton.click();
  }

  async signInWithGoogle() {
    await this.googleSignInButton.click();
  }
}