import { CommonPage } from "./CommonPage";
class CheckOutPage extends CommonPage {
  constructor(page) {
    super(page);
   this.page = page;
   this.checkOutButton = page.locator(`//a[@class="btn btn-secondary btn-block" and contains(text(),"Checkout")]`);
   this.firstNameInputForBilling = page.locator("#input-payment-firstname");
    this.lastNameInputForBilling = page.locator("#input-payment-lastname");
    this.companyInputForBilling = page.locator("#input-payment-company");
    this.address1InputForBilling = page.locator("#input-payment-address-1");
    this.address2InputForBilling = page.locator("#input-payment-address-2");
    this.cityInputForBilling = page.locator("#input-payment-city");
    this.postCodeInputForBilling = page.locator("#input-payment-postcode");
    this.countryInputForBilling = page.locator("#input-payment-country");
    this.countryInputForBilling = page.locator("#input-payment-country");
    this.stateInputForBilling = page.locator("#input-payment-zone");
    this.submitBillDetails = page.locator(`//button[contains(text(),"Continue")]`);
    
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
  
}

export { CheckOutPage };
