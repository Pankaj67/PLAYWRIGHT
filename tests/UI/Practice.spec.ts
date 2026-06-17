import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';


test('Login', async ({page}) => {



    await page.goto('https://www.google.com/');
    page.locator('.gLFyf').fill("pankaj");
    
    
}); 