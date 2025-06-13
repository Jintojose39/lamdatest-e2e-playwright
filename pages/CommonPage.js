class CommonPage {
  constructor(page) {
    this.page = page;
    this.myAccount = page.locator(
      `(//span[contains(text()," My account")])[2]`
    );
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
}

export { CommonPage };
