class DashboardPage {
  constructor(page) {
    this.page = page;
    this.homeButton = page.locator(`//span[contains(text()," Home")]`);
    this.allCategories = page.locator(
      `(//button[@class="btn dropdown-toggle"])[1]`
    );
    this.productTypes = page.locator(`.dropdown-menu-left.show .dropdown-item`);
  }

  async clickOnHomeAndValidate() {
    await this.homeButton.click();
  }
  async clickOnAllCategories() {
    await this.allCategories().click();
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
