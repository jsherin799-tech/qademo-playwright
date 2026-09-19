import { Page, Locator } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly cartNavLink: Locator;
  readonly continueShoppingButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartNavLink = page.getByTestId('navbar-cart-link');
    this.continueShoppingButton = page.getByTestId('continue-shopping-button');
  }

  async openCart() {
    await this.cartNavLink.click();
  }

  async continueShopping() {
    await this.continueShoppingButton.click();
  }
}