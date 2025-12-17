import { Page, Locator } from '@playwright/test';

export class RegisterPage {
  readonly page: Page;
  readonly username: Locator;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly password: Locator;
  readonly confirmPassword: Locator;
  readonly registerBtn: Locator;
  readonly cancelBtn: Locator;

  constructor(page: Page) {
    this.page = page;

    this.username = page.locator('#username');
    this.firstName = page.locator('#firstName');
    this.lastName = page.locator('#lastName');
    this.password = page.locator('#password');
    this.confirmPassword = page.locator('#confirmPassword');
    this.registerBtn = page.locator("//button[normalize-space()='Register']");
    this.cancelBtn = page.locator("//a[normalize-space()='Cancel']");
  }

  // ✅ UPDATED: confirmPassword added explicitly
  async fillRegistrationForm(
    username: string,
    firstName: string,
    lastName: string,
    password: string,
    confirmPassword: string
  ) {
    await this.username.fill(username);
    await this.firstName.fill(firstName);
    await this.lastName.fill(lastName);
    await this.password.fill(password);
    await this.confirmPassword.fill(confirmPassword);
  }

  async submitRegistration() {
    await this.registerBtn.click();
  }

  async cancelRegistration() {
    await this.cancelBtn.click();
  }
}
