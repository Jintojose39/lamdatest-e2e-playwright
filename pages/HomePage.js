class HomePage {
     constructor(page) {
       this.page = page;
       this.homeButton = page.locator(`//span[contains(text()," Home")]`);
       this.searchBar = page.locator(`(//input[@name="search"])[1]`);
       this.searchButton = page.locator(`//button[text()="Search"]`);
       this.searchHeader = page.locator(`//h1[contains(text(),"Search - iPod Classic")]`);
       this.productButton = page.locator(`(//div[@class="carousel-item active"])[1]`);
       this.addTocart = page.locator(`(//i[@class="fas fa-shopping-cart"])[1]`);
       this.cartButton = page.locator(`(//span[@class="badge badge-pill badge-info cart-item-total"])[1]`);
       
     }
   
     async searchTheProduct(productname) {
       await this.searchBar.fill(productname);
       await this.searchButton.click();
       await this.searchHeader.waitFor({ state: 'visible', timeout: 10000 });
     }

     async clickOnProduct() {
          await this.productButton.hover();
          await this.productButton.click();
        }


     
   }
   
   export { HomePage };
   