import { test, expect, chromium } from "@playwright/test";
import { POManager } from "../utils/POManager";
import env from "../testData.json/env.json";
import lamdaE2Eflow from "../testData.json/lamdaE2Eflow.json";
test.describe.configure({ mode: "serial" });
let cartCount;
let orderTitle;
let orderConfirmMessage;

test.describe("End To End Flow For Ecommerce Application", () => {
  let browser;
  let context;
  let page;
  let po;
  let user;
  let userCreationMessage;

  test.beforeAll(async () => { 
    browser = await chromium.launch();
    context = await browser.newContext();
    page = await context.newPage();
    po = new POManager(page);
    await po.getLoginPage().goToApplication(env.baseURL);
    await expect(page).toHaveTitle(/Your Store/);
    await po.getRegisterPage().goToRegisterOption();
    user = await po.getRegisterPage().generateRandomUser();
    await po.getRegisterPage().registerUser(user);
    await po.getRegisterPage().registeredMessage.waitFor({ state: "visible" });
    userCreationMessage = await po
      .getRegisterPage()
      .registeredMessage.textContent();
    expect(userCreationMessage?.trim()).toBe(lamdaE2Eflow.userCreationMessage);
  });

  test("Verify product types in dropdown", async () => {
    po = new POManager(page);
    await po.getDashboardPage().clickOnHomeAndValidate();
    await expect(page).toHaveURL(
      "https://ecommerce-playground.lambdatest.io/index.php?route=common/home"
    );

    await po.getDashboardPage().allCategories.click();
    const isValid = await po
      .getDashboardPage()
      .validateTheElements(lamdaE2Eflow.expectedTypes);
    expect(
      isValid,
      "Expected product types to be present in the dropdown"
    ).toBeTruthy();
  });

  test("Search and add product to cart", async () => {
    po = new POManager(page);
    await po.getHomePage().searchTheProduct("iPod Classic");
    await po.getHomePage().clickOnProduct();
    cartCount = await po.getCartPage().addToCartProduct("iPod Classic");
    expect(cartCount.trim()).toBe("1");
  });

  test("User is able to proceed checkout the product", async () => {
    po = new POManager(page);
    await po.getCheckOutPage().proceedCheckoutProduct();
    await expect(page).toHaveURL(
      "https://ecommerce-playground.lambdatest.io/index.php?route=checkout/checkout"
    );
  });

  test("User is able to fill the billing address and Navigate to order section ", async () => {
    po = new POManager(page);
    const user = await po.getCommonPage().generateBillingDetails();
    await po.getCheckOutPage().filBillingAddress(user);
    orderTitle = await po.getOrderPage().orderPageTitle.textContent();
    expect(orderTitle.trim()).toBe("Confirm Order");
  });

  test("Verify the order details before proceed the order", async () => {
    po = new POManager(page);
    await po.getOrderPage().orderConfirmButton.click();
    orderConfirmMessage = await po
      .getOrderPage()
      .orderConfirmPageTitle.textContent();
    expect(orderConfirmMessage.trim()).toBe("Your order has been placed!");
  });

  test("Verify the order history After placed the order and log out from the account", async () => {
    po = new POManager(page);
    await po.getOrderPage().navigateToMyAccountSection();
    const { orderId, orderDate } = await po
      .getOrderPage()
      .validatingOrderIdandOrderedDate();
    expect(orderId).toBeGreaterThan(2000);
    const today = new Date();
    const formattedToday = today.toLocaleDateString("en-GB");
    expect(orderDate).toBe(formattedToday);
  });

  test.afterAll(async () => {
    po = new POManager(page);
    try {
      if (!page.isClosed()) {
        await po.getDashboardPage().logOut();
        await expect(page).toHaveURL(/route=account\/logout/);
      }
    } catch (err) {
      console.warn("⚠️ Warning during logout:", err.message);
    } finally {
      await browser?.close();
    }
  });
});
