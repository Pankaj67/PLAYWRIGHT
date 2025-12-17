import { test, expect, Page } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';
import { RegisterPage } from '../Pages/RegisterPages';
import { OverallRatingPage } from '../Pages/OverallRatingPage';

// ================= REGISTER FUNCTION =================
async function registerUser(
  page: Page,
  username: string,
  firstName: string,
  lastName: string,
  password: string
) {
  const loginPage = new LoginPage(page);
  const registerPage = new RegisterPage(page);

  await loginPage.openHomePage();
  await loginPage.clickRegister();

  await expect(page).toHaveURL(/register/);

  await registerPage.fillRegistrationForm(
    username,
    firstName,
    lastName,
    password,
    password
  );

  await registerPage.submitRegistration();
  await page.waitForTimeout(3000);
  await expect(page).toHaveURL(/justtestit\.org/);

  await page.waitForTimeout(2000);
}

// ================= LOGIN FUNCTION =================
async function loginUser(
  page: Page,
  username: string,
  password: string
) {
  const loginPage = new LoginPage(page);

  await loginPage.openHomePage();
  await loginPage.login(username, password);
}
// ================= OVERALL RATING FUNCTION =================
async function submitOverallRating(page: Page, comment: string) {
  const overallPage = new OverallRatingPage(page);

  // Wait for overall rating link and click
  await overallPage.overallRatingLink.waitFor({ state: 'visible' });
  await overallPage.clickOverallRating();
  await page.waitForTimeout(1000); // simple wait

  // Click "View More", enter comment, and vote
  await overallPage.clickViewMore();
  await page.waitForTimeout(500); // small wait
  await overallPage.enterComment(comment);
  await page.waitForTimeout(500); // small wait
  await overallPage.clickVote();
  await page.waitForTimeout(1000); // wait after vote

  // Optional: assertion to confirm vote success
  // await expect(page.locator('text=Thank you for your vote')).toBeVisible();
}


// ================= TEST =================
test.describe('Register, Login and Overall Rating Flow', () => {

  test('Register user, login, and submit overall rating', async ({ page }) => {
    const { faker } = await import('@faker-js/faker');

    const username = faker.string.alpha({ length: 8, casing: 'lower' });
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const password = faker.string.alpha({ length: 4, casing: 'lower' }) + '@123P';
    const comment = faker.string.alpha({ length: 5 }); // 5-character comment

    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Comment:', comment);

    // 🔹 Registration
    await registerUser(page, username, firstName, lastName, password);

    // 🔹 Login
    await loginUser(page, username, password);

    // 🔹 Submit Overall Rating
    await submitOverallRating(page, comment);
  });

});
