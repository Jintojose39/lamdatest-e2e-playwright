import { faker } from "@faker-js/faker";
import { CommonPage } from "./CommonPage";

class RegisterPage extends CommonPage {
  constructor(page) {
    super(page);
    this.page = page;
    this.firstNameInput = page.locator("#input-firstname");
    this.lastNameInput = page.locator("#input-lastname");
    this.emailInput = page.locator("#input-email");
    this.telephoneInput = page.locator("#input-telephone");
    this.passwordInput = page.locator("#input-password");
    this.confirmPasswordInput = page.locator("#input-confirm");
    this.registerButton = page.locator(`//span[contains(text()," Register")]`);
    this.registeredMessage = page.locator(`//h1//following-sibling::p[2]`);
  }

  async generateRandomUser() {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const email = faker.internet.email({ firstName, lastName });
    const telephone = faker.phone.number("9#########");
    const password = faker.internet.password(10);
    return { firstName, lastName, email, telephone, password };
  }

  async registerUser(user) {
    await this.firstNameInput.fill(user.firstName);
    await this.lastNameInput.fill(user.lastName);
    await this.emailInput.fill(user.email);
    await this.telephoneInput.fill(user.telephone);
    await this.passwordInput.fill(user.password);
    await this.confirmPasswordInput.fill(user.password);
    await this.confirmCheck.check({ force: true });
    await this.continueButton.click();
    
  }

  /**
   * For click Register button
   */
  async goToRegisterOption() {
    await this.myAccount.hover();
    await this.registerButton.click();
    await this.page.waitForTimeout(3000);
  }
}

export { RegisterPage };
