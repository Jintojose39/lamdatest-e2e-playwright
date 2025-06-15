
import { CommonPage } from "./CommonPage";
class DashboardPage extends CommonPage {
  constructor(page) {
    super(page);
    this.page = page;
    this.homeButton = page.locator(`//span[contains(text()," Home")]`);
    this.allCategories = page.locator(
      `(//button[@class="btn dropdown-toggle"])[1]`
    );
    this.productTypes = page.locator(`.dropdown-menu-left.show .dropdown-item`);
    this.logOutButton = page.locator(`//span[contains(text()," Logout")]`);
  }

  async clickOnHomeAndValidate() {
    await this.homeButton.click();
  }
  async clickOnAllCategories() {
    await this.allCategories().click();
  }

  /**
    * Click on my account and navigate to history section
    */
  async logOut() {
    await this.myAccount.hover();
    await this.logOutButton.click();
    
    
  }

  async validateTheElements(expectedTypes) {
    const actualTexts = await this.productTypes.allInnerTexts();
    console.log("Actual Product Types on Page:", actualTexts);
    for (const expected of expectedTypes) {
      if (actualTexts.some((text) => text.trim() === expected)) {
        return true;
      } else {
        return false;
      }
    }
  }
}

export { DashboardPage };
