import { test, expect } from "@playwright/test";
import { POManager } from "../utils/POManager";
import env from "../testData.json/env.json";
import lamdaE2Eflow from "../testData.json/lamdaE2Eflow.json";
import loginCredentials from "../testData.json/loginCredentials.json";
let userName = loginCredentials.userName;
let password = loginCredentials.password;

test.describe("End To Flow For Ecommerce Applciation", () => {
  test.beforeEach(async ({ page }) => {
    const po = new POManager(page);
    await po.getLoginPage().goToApplication(env.baseURL);
    await expect(page).toHaveTitle(/Your Store/);
    await po.getRegisterPage().goToRegisterOption();
    const user = await po.getRegisterPage().generateRandomUser();
    await po.getRegisterPage().registerUser(user);
    await po.getRegisterPage().registeredMessage.waitFor({ state: "visible" });
    let userCreationMessage = await po
      .getRegisterPage()
      .registeredMessage.textContent();
    console.log(userCreationMessage);
    expect(userCreationMessage?.trim()).toBe(lamdaE2Eflow.userCreationMessage);
    /*
    await po.getLoginPage().goToApplication(env.baseURL);
    await expect(page).toHaveTitle(/Your Store/);
    await po.getLoginPage().goToMyAccountAndLogin();
    await po.getLoginPage().enterTheCredentials(user);
    await expect(page).toHaveURL(
      "https://ecommerce-playground.lambdatest.io/index.php?route=account/account"
    );
    */
  });

  // test("Click on home button and verify the all products types the dropdown", async ({
  //   page,
  // }) => {
  //   const po = new POManager(page);
  //   await po.getDashboardPage().clickOnHomeAndValidate();
  //   await expect(page).toHaveURL(
  //     "https://ecommerce-playground.lambdatest.io/index.php?route=common/home"
  //   );
  //   await po.getDashboardPage().allCategories.click();
  //   const isValid = await po
  //     .getDashboardPage()
  //     .validateTheElements(lamdaE2Eflow.expectedTypes);
  //   expect(
  //     isValid,
  //     "Expected product types to be present in the dropdown"
  //   ).toBeTruthy();
  // });

  test("Search the product and and proceed add to cart", async ({
    page,
  }) => {
    const po = new POManager(page);
    await po.getHomePage().searchTheProduct("iPod Classic");
    await po.getHomePage().clickOnProduct();
    let cartCount = await po.getCartPage().addToCartProduct("iPod Classic");
    expect(cartCount.trim()).toBe("1");
  });
});
