import { test, expect } from "@playwright/test";
import { POManager } from "../utils/POManager";
import env from "../testData.json/env.json";
import lamdaE2Eflow from "../testData.json/lamdaE2Eflow.json";
import loginCredentials from "../testData.json/loginCredentials.json";

test.describe("End To End Flow For Ecommerce Application", () => {

  test.beforeEach(async ({ page }) => {
    const po = new POManager(page);
    await po.getLoginPage().goToApplication(env.baseURL);
    await expect(page).toHaveTitle(/Your Store/);
    await po.getRegisterPage().goToRegisterOption();
    const user = await po.getRegisterPage().generateRandomUser();
    await po.getRegisterPage().registerUser(user);
    await po.getRegisterPage().registeredMessage.waitFor({ state: "visible" });

    const userCreationMessage = await po.getRegisterPage().registeredMessage.textContent();
    expect(userCreationMessage?.trim()).toBe(lamdaE2Eflow.userCreationMessage);
  });

  test("Verify product types in dropdown", async ({ page }, testInfo) => {
    testInfo.annotations.push({ type: 'feature', description: 'Homepage product validation' });

    const po = new POManager(page);
    await po.getDashboardPage().clickOnHomeAndValidate();
    await expect(page).toHaveURL("https://ecommerce-playground.lambdatest.io/index.php?route=common/home");

    await po.getDashboardPage().allCategories.click();
    const isValid = await po.getDashboardPage().validateTheElements(lamdaE2Eflow.expectedTypes);

    expect(isValid, "Expected product types to be present in the dropdown").toBeTruthy();
  });

  test("Search and add product to cart", async ({ page }, testInfo) => {
    testInfo.annotations.push({ type: 'feature', description: 'Cart functionality' });

    const po = new POManager(page);
    await po.getHomePage().searchTheProduct("iPod Classic");
    await po.getHomePage().clickOnProduct();
    const cartCount = await po.getCartPage().addToCartProduct("iPod Classic");

    expect(cartCount.trim()).toBe("1");
  });

});
