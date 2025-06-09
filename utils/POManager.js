import { HomePage } from '../pages/HomePage.js';
import { LoginPage } from '../pages/LoginPage.js';
import { DashboardPage } from '../pages/DashboardPage.js';
import { RegisterPage } from '../pages/RegisterPage.js';
import {Common} from '../pages/Common.js'

export class POManager {
  constructor(page) {
    this.page = page;
    //this.homePage = new HomePage(page);
    this.loginPage = new LoginPage(page);
    this.dashboardPage = new DashboardPage(page);
    this.common = new Common(page);
    //this.registerPage = new RegisterPage(page);
  }

  getHomePage() {
    return this.homePage;
  }

  getLoginPage() {
    return this.loginPage;
  }

  getDashboardPage() {
    return this.dashboardPage;
  }

  getRegisterPage() {
    return this.registerPage;
  }
}
