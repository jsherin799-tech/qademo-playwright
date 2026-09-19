import { test, expect } from '@playwright/test';
import { AdminPage } from '../pages/AdminPage';

test.describe('Admin Tests', () => {
  test('Admin dashboard check', async ({ page }) => {
    const adminPage = new AdminPage(page);
    await adminPage.goto();
    await expect(adminPage.adminHeading).toBeVisible();
  });
});