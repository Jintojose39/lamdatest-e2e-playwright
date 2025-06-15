import { faker } from "@faker-js/faker";
class CommonPage {
  constructor(page) {
    this.page = page;
    this.myAccount = page.locator(
      `(//span[contains(text()," My account")])[2]`
    );
    this.confirmCheck = page.locator('input[name="agree"]');
    this.continueButton = page.locator('input[type="submit"]');
  }

  async click(selector) {
    await locator(selector).click();
  }

  async type(selector, text) {
    await locator(selector).fill(text);
  }

  async waitForElement(selector) {
    await locator(selector).waitFor({ state: "visible" });
  }

  async getTitle() {
    return await this.page.title();
  }

  async navigateTo(url) {
    await this.page.goto(url);
  }

  async isElementVisible(selector) {
    return await locator(selector).isVisible();
  }

  async generateBillingDetails() {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const company = faker.company.name();
    const address1 = faker.location.streetAddress();
    const address2 = faker.location.secondaryAddress();
    const city = faker.location.city();
    const country = 'India'; // Fixed or you can randomize it
    const postcode = faker.location.zipCode('######'); // Pincode format
  
    return {
      firstName,
      lastName,
      company,
      address1,
      address2,
      city,
      country,
      postcode,
    };
  }
}

export { CommonPage };
