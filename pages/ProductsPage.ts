import { Page, Locator } from '@playwright/test';

export class ProductsPage {
  readonly page: Page;
  readonly browseProductsButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.browseProductsButton = page.getByTestId('browse-products-button');
  }

  async browseProducts() {
    await this.browseProductsButton.click();
  }

  async selectProductById(productId: string) {
    await this.page.getByTestId(`product-link-${productId}`).click();
  }

  async addProductToCart(productId: string) {
    await this.selectProductById(productId);
  }
}