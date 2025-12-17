import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly username: Locator;
  readonly password: Locator;
  readonly loginBtn: Locator;
  readonly registerBtn: Locator;
    readonly overallRatingLink: Locator;


  constructor(page: Page) {
    this.page = page;

    this.username = page.locator("//input[@name='login']");
    this.password = page.locator("//input[@name='password']");
    this.loginBtn = page.locator("//button[normalize-space()='Login']");
   
    this.registerBtn = page.locator("//a[normalize-space()='Register']");
  this.overallRatingLink = page.locator("a[href='/overall']");
  }

  async openHomePage() {
    await this.page.goto('/');
  }

  async login(user: string, pass: string) {
    await this.username.fill(user);
    await this.password.fill(pass);
    await this.loginBtn.click();
  }

  async clickRegister() {
    await this.registerBtn.click();
  }

  async clickOverallRating() {
    await this.overallRatingLink.click();
  }
} 
