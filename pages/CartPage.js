class CartPage {
  constructor(page) {
    this.page = page;
    this.addToCartButton = (text) => this.page.locator(`(//h1[text()="${text}"]//ancestor::div//button[text()="Add to Cart"])[2]`);
    this.cartAlert = page.locator(`//a[@class="btn btn-primary btn-block"]`);
    this.cartCountText = page.locator(`span:has(i.fa-shopping-cart)`);

    
  }

  async goToApplication(url) {
    await this.page.goto(url);
  }

   /**
    * For add product to cart
    * @param {string} productname 
    */
  async addToCartProduct(productname) {
    await this.addToCartButton(productname).click();
    await this.cartAlert.waitFor({ state: 'visible', timeout: 10000 });
    const cartText = await this.cartCountText.textContent();
    const itemCount = cartText?.match(/\d+/)?.[0];
    console.log(itemCount);
    return itemCount ;
  }

  
  
}

export { CartPage };
