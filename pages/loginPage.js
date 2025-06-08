class LoginPage {
  constructor(page) {
    this.page = page;
    this.myAccount = page.locator(
      `(//span[contains(text()," My account")])[2]`
    );
    this.userName = page.locator("#input-email");
    this.password = page.locator("#input-password");
    this.loginButton = page.locator(`//span[contains(text()," Login")]`);
    this.signInButton = page.locator("[value='Login']");
  }

  async goToApplication(url) {
    await this.page.goto(url);
  }

  async goToMyAccountAndLogin() {
    await this.myAccount.hover();
    await this.loginButton.click();
    await this.page.waitForTimeout(3000);
  }
  async enterTheCredentials(userName, password) {
    await this.userName.fill(userName);
    await this.password.fill(password);
    await this.signInButton.click();
  }

  async validLogin(username, password) {
    await this.userName.fill(username);
    await this.password.fill(password);
    await this.signInButton.click();
    await this.page.waitForLoadState("networkidle");
  }
}

export { LoginPage };
