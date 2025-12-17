import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';

test.describe('Buggy Cars Central Login', () => {

  test('Valid Login', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.openHomePage();
    await loginPage.login('pankaj@gmail.com', 'pankaj@123P');

    // Assertion – username appears after login
    await expect(page.locator("//a[contains(text(),'Profile')]")).toBeVisible();
  });

  test('Navigate to Register Page', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.openHomePage();
    await loginPage.clickRegister();

    await expect(page).toHaveURL(/register/);
  });git add 

});
