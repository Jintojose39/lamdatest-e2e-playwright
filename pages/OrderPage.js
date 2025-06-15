import { CommonPage } from "./CommonPage";
class OrderPage extends CommonPage {
  constructor(page) {
    super(page);
   this.page = page;
   this.orderPageTitle = page.locator(`//h1[@class="page-title mb-3"]`); 
   this.orderConfirmButton = page.locator(`//button[contains(text(),"Confirm Order")]`);
   this.orderConfirmPageTitle = page.locator(`//h1[@class="page-title my-3"]`);
   this.myAccountButton = page.locator(`//a[text()="my account"]`);
   this.myOrderButton = page.locator(`//a[contains(@href, "account/order") and contains(text(), "Order History")]`);
   this.orderView = page.locator(`(//i[@class="fa fa-eye"])[1]`);
   this.orderDetails = page.locator(`(//td[@class="text-left"])[2]`);
  }

 
   /**
    * Click on Checkout Button 
    */
  async proceedCheckoutProduct() {
    await this.checkOutButton.click();
    
  }

  async filBillingAddress(user) {
    await this.firstNameInputForBilling.fill(user.firstName);
    await this.lastNameInputForBilling.fill(user.lastName);
    await this.companyInputForBilling.fill(user.company);
    await this.address1InputForBilling.fill(user.address1);
    await this.address2InputForBilling.fill(user.address2);
    await this.cityInputForBilling.fill(user.city);
    await this.countryInputForBilling.selectOption('India') //dropdown
    await this.stateInputForBilling.selectOption('Kerala')
    await this.confirmCheck.check({ force: true });
    await this.submitBillDetails.click();
    
  }

   /**
    * Click on my account and navigate to history section
    */
   async navigateToMyAccountSection() {
    await this.myAccountButton.click();
    await this.myOrderButton.click();
    
    
  }

  async validatingOrderIdandOrderedDate() {
    await this.orderView.click();
    let orderInformation  = await this.orderDetails.textContent();
    const orderIdMatch = orderInformation.match(/Order ID:\s*#(\d+)/);
    const dateMatch = orderInformation.match(/Date Added:\s*([\d/]+)/);
    const orderId = orderIdMatch ? parseInt(orderIdMatch[1]) : null;
    const orderDate = dateMatch ? dateMatch[1].trim() : null;
    return { orderId, orderDate };  
  }
  
}

export { OrderPage };
