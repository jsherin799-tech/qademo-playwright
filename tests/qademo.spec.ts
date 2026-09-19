import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ProductsPage } from '../pages/ProductsPage';
import { LoginPage } from '../pages/LoginPage';
import { CartPage } from '../pages/CartPage';

test.describe('QA Demo E-Commerce Flow', () => {
  test('User navigation, product view, and cart flow', async ({ page }) => {
    const homePage = new HomePage(page);
    const productsPage = new ProductsPage(page);
    const loginPage = new LoginPage(page);
    const cartPage = new CartPage(page);

    // 1. Go to Home Page & Browse Products
    await homePage.navigateToHome();
    await productsPage.browseProducts();

    // 2. Click Product 18
    await productsPage.selectProductById('18');

    // 3. Login Actions
    await loginPage.clickSignIn();
    await loginPage.signInWithGoogle();

    // 4. Return Home & Check Cart
    await homePage.goBackToHome();
    await cartPage.openCart();
    await cartPage.continueShopping();

    // 5. Click Product 15
    await productsPage.selectProductById('15');
  });
});