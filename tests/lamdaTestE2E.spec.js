// @ts-check
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { DasboardPage } from '../pages/dasboardPage'; // Consider fixing typo to "DashboardPage"
import env from '../testData.json/env.json';
import lamdaE2Eflow from '../testData.json/lamdaE2Eflow.json';
import loginCredentials from '../testData.json/loginCredentials.json';

let userName = loginCredentials.userName;
let password = loginCredentials.password;

test.describe('Login and Dashboard Tests', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goToApplication(env.baseURL);
    await expect(page).toHaveTitle(/Your Store/);
    await loginPage.goToMyAccountAndLogin();
    await loginPage.enterTheCredentials(userName, password);
    await expect(page).toHaveURL("https://ecommerce-playground.lambdatest.io/index.php?route=account/account");
  });

  test('Click on home button and verify the all products types the dropdown', async ({ page }) => {
    const dasboardPage = new DasboardPage(page);
    await dasboardPage.clickOnHomeAndValidate();
    await expect(page).toHaveURL("https://ecommerce-playground.lambdatest.io/index.php?route=common/home");
    await dasboardPage.allCategories.click();
    const isValid = await dasboardPage.validateTheElements(lamdaE2Eflow.expectedTypes);
   expect(isValid,'Expected product types to be present in the dropdown').toBeTruthy(); 
  
  });

});
