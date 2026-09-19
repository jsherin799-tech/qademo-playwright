import { test, expect } from '@playwright/test';
import { ProductsPage } from '../pages/ProductsPage';

test.describe('Product Tests', () => {
  test('Add product to cart', async ({ page }) => {
    const productsPage = new ProductsPage(page);
    await page.goto('/');
    await productsPage.browseProducts();
    await productsPage.addProductToCart('18');
  });
});