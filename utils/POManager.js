import { HomePage } from '../pages/HomePage.js';
import { LoginPage } from '../pages/LoginPage.js';
import { DashboardPage } from '../pages/DashboardPage.js';
import { RegisterPage } from '../pages/RegisterPage.js';
import {CommonPage} from '../pages/CommonPage.js';
import {CartPage} from '../pages/CartPage.js'
import { CheckOutPage } from '../pages/CheckOutPage.js';
import { OrderPage } from '../pages/OrderPage.js';

export class POManager {
  constructor(page) {
    this.page = page;
    this.homePage = new HomePage(page);
    this.loginPage = new LoginPage(page);
    this.dashboardPage = new DashboardPage(page);
    this.commonPage = new CommonPage(page);
    this.registerPage = new RegisterPage(page);
    this.cartPage = new CartPage(page);
    this.checkOutPage = new CheckOutPage(page);
    this.orderPage = new OrderPage(page);
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

  getCommonPage() {
    return this.commonPage;
  }
  getCartPage() {
    return this.cartPage;
  }
  getCheckOutPage() {
    return this.checkOutPage;
  }
  getOrderPage() {
    return this.orderPage;
  }
}
