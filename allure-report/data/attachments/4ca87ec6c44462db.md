# Test info

- Name: End To Flow For Ecommerce Applciation >> @smoke Search the product and and proceed add to cart
- Location: C:\Users\JINTO\lamdatest-e2e-playwright\tests\lamdaTestE2E.spec.js:52:7

# Error details

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('xpath=(//h1[text()="iPod Classic"]//ancestor::div//button[text()="Add to Cart"])[2]')
    - locator resolved to <button type="button" title="Add to Cart" data-loading-text="Loading..." class="text btn btn-md btn-secondary btn-block btn-cart button-cart cart-48">Add to Cart</button>
  - attempting click action
    - waiting for element to be visible, enabled and stable

    at CartPage.addToCartProduct (C:\Users\JINTO\lamdatest-e2e-playwright\pages\CartPage.js:20:45)
    at C:\Users\JINTO\lamdatest-e2e-playwright\tests\lamdaTestE2E.spec.js:58:44
```

# Page snapshot

```yaml
- heading "Top categories close" [level=5]:
  - text: Top categories
  - link "close":
    - /url: "#mz-component-1626147655"
    - text: 
- navigation:
  - list:
    - listitem:
      - link "Components":
        - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=25
        - img
        - text: Components
    - listitem:
      - link "Cameras":
        - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=33
        - img
        - text: Cameras
    - listitem:
      - link "Phone, Tablets & Ipod":
        - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=57
        - img
        - text: Phone, Tablets & Ipod
    - listitem:
      - link "Software":
        - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=17
        - img
        - text: Software
    - listitem:
      - link "MP3 Players":
        - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=34
        - img
        - text: MP3 Players
    - listitem:
      - link "Laptops & Notebooks":
        - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=18
        - img
        - text: Laptops & Notebooks
    - listitem:
      - link "Desktops and Monitors":
        - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=28
        - img
        - text: Desktops and Monitors
    - listitem:
      - link "Printers & Scanners":
        - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=30
        - img
        - text: Printers & Scanners
    - listitem:
      - link "Mice and Trackballs":
        - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=29
        - img
        - text: Mice and Trackballs
    - listitem:
      - link "Fashion and Accessories":
        - /url: ""
        - img
        - text: Fashion and Accessories
    - listitem:
      - link "Beauty and Saloon":
        - /url: ""
        - img
        - text: Beauty and Saloon
    - listitem:
      - link "Autoparts and Accessories":
        - /url: ""
        - img
        - text: Autoparts and Accessories
    - listitem:
      - link "Washing machine":
        - /url: ""
        - img
        - text: Washing machine
    - listitem:
      - link "Gaming consoles":
        - /url: ""
        - img
        - text: Gaming consoles
    - listitem:
      - link "Air conditioner":
        - /url: ""
        - img
        - text: Air conditioner
    - listitem:
      - link "Web Cameras":
        - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=32
        - img
        - text: Web Cameras
- heading "Quick Links close" [level=5]:
  - text: Quick Links
  - link "close":
    - /url: "#mz-component-162614767"
    - text: 
- navigation:
  - list:
    - listitem:
      - link " Special Hot":
        - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/special
    - listitem:
      - link " Wishlist":
        - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/wishlist
    - listitem:
      - link " Compare":
        - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/compare
    - listitem:
      - link " My account":
        - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/account
    - listitem:
      - link " Blog":
        - /url: https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/blog/home
    - listitem:
      - link " Tracking":
        - /url: https://ecommerce-playground.lambdatest.io/index.php?route=information/tracking
    - listitem:
      - link " Contact us":
        - /url: https://ecommerce-playground.lambdatest.io/index.php?route=information/contact
- separator
- paragraph: Place here any module, widget, design or HTML. for example menu, categories
- heading "Cart close" [level=5]:
  - text: Cart
  - link "close":
    - /url: "#cart-total-drawer"
    - text: 
- paragraph: Your shopping cart is empty!
- table:
  - rowgroup:
    - 'row "Sub-Total: $0.00"':
      - cell "Sub-Total:"
      - cell "$0.00":
        - strong: $0.00
    - 'row "Total: $0.00"':
      - cell "Total:"
      - cell "$0.00":
        - strong: $0.00
- button " Edit cart"
- button " Checkout"
- banner:
  - button ""
  - figure:
    - link "Poco Electro":
      - /url: https://ecommerce-playground.lambdatest.io/index.php?route=common/home
      - img "Poco Electro"
  - button "All Categories"
  - textbox "Search For Products": iPod Classic
  - button "Search"
  - link "Compare":
    - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/compare
    - img
  - link "Wishlist":
    - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/wishlist
    - img
  - button "0":
    - img
    - text: "0"
  - button "Shop by Category":
    - img
    - text: Shop by Category
  - navigation:
    - list:
      - listitem:
        - link "Home":
          - /url: https://ecommerce-playground.lambdatest.io/index.php?route=common/home
      - listitem:
        - link "Special Hot":
          - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/special
      - listitem:
        - link "Blog":
          - /url: https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/blog/home
      - listitem:
        - button "Mega Menu"
      - listitem:
        - button "AddOns Featured"
      - listitem:
        - button " My account"
  - paragraph:
    - strong: This is a dummy website for Web Automation Testing
- figure:
  - link "Apple Cinema 30\"":
    - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=42
    - img "Apple Cinema 30\""
- navigation "breadcrumb":
  - list:
    - listitem:
      - link "Home":
        - /url: https://ecommerce-playground.lambdatest.io/index.php?route=common/home
        - text: 
    - listitem:
      - text: /
      - link "Software":
        - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=17
    - listitem:
      - text: /
      - link "Search":
        - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/search&search=iPod Classic
    - listitem: / iPod Classic
- button ""
- link "iPod Classic":
  - /url: https://ecommerce-playground.lambdatest.io/image/cache/catalog/maza/demo/mz_poco/megastore-2/product/17-500x500.webp
  - img "iPod Classic"
- link "iPod Classic":
  - /url: https://ecommerce-playground.lambdatest.io/image/cache/catalog/maza/demo/mz_poco/megastore-2/product/10-500x500.webp
  - img "iPod Classic"
- link "iPod Classic":
  - /url: https://ecommerce-playground.lambdatest.io/image/cache/catalog/maza/demo/mz_poco/megastore-2/product/8-500x500.webp
  - img "iPod Classic"
- link "iPod Classic":
  - /url: https://ecommerce-playground.lambdatest.io/image/cache/catalog/maza/demo/mz_poco/megastore-2/product/8-500x500.webp
  - img "iPod Classic"
- link "iPod Classic":
  - /url: https://ecommerce-playground.lambdatest.io/image/cache/catalog/maza/demo/mz_poco/megastore-2/product/7-500x500.webp
  - img "iPod Classic"
- text:    
- tablist:
  - listitem:
    - tab "Description"
  - listitem:
    - tab "Reviews"
  - listitem:
    - tab "Custom"
- heading "iPod Classic" [level=1]
- list:
  - listitem: "Product Code: product 20"
- separator
- list:
  - listitem:
    - text: "Brand:"
    - link "Apple":
      - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/manufacturer/info&manufacturer_id=8
  - listitem: "Viewed: 62968"
  - listitem: "Availability: In Stock"
- figure:
  - link "Apple":
    - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/manufacturer/info&manufacturer_id=8
    - img "Apple"
- separator
- heading "$122.00" [level=3]
- text: 
- button "Decrease quantity": 
- spinbutton "Qty": "1"
- button "Increase quantity": 
- button "Add to Cart"
- button "Buy now"
- button " Compare this Product"
- button "Size chart":  Size chart
- button "Popup":  Popup
- button "Ask Question":  Ask Question
- separator
- img
- heading "Online payment" [level=5]
- img
- heading "Easy Return" [level=5]
- img
- heading "24x7 Service" [level=5]
- text: 0/50 reviews ★ 5 ★ 4 ★ 3 ★ 2 ★ 1 ★ 0
- heading "Write a review" [level=5]
- textbox "Your Name": Marcus McGlynn
- textbox "Your Review"
- button "Write Review"
- heading "FAQ (Frequently Asked Questions)" [level=3]
- heading "How can I change my shipping address? " [level=5]
- heading "How can I change my shipping address? " [level=5]
- heading "How do I activate my account? " [level=5]
- heading "What do you mean by points? How do I earn it? " [level=5]
- heading "Why is there a checkout limit? / What are all the checkout limits? " [level=5]
- heading "Why must I make payment immediately at checkout? " [level=5]
- contentinfo:
  - paragraph: © LambdaTest - Powered by OpenCart
```

# Test source

```ts
   1 | class CartPage {
   2 |   constructor(page) {
   3 |     this.page = page;
   4 |     this.addToCartButton = (text) => this.page.locator(`(//h1[text()="${text}"]//ancestor::div//button[text()="Add to Cart"])[2]`);
   5 |     this.cartAlert = page.locator(`//a[@class="btn btn-primary btn-block"]`);
   6 |     this.cartCountText = page.locator(`span:has(i.fa-shopping-cart)`);
   7 |
   8 |     
   9 |   }
  10 |
  11 |   async goToApplication(url) {
  12 |     await this.page.goto(url);
  13 |   }
  14 |
  15 |    /**
  16 |     * For add product to cart
  17 |     * @param {string} productname 
  18 |     */
  19 |   async addToCartProduct(productname) {
> 20 |     await this.addToCartButton(productname).click();
     |                                             ^ Error: locator.click: Test timeout of 30000ms exceeded.
  21 |     await this.cartAlert.waitFor({ state: 'visible', timeout: 10000 });
  22 |     const cartText = await this.cartCountText.textContent();
  23 |     const itemCount = cartText?.match(/\d+/)?.[0];
  24 |     console.log(itemCount);
  25 |     return itemCount ;
  26 |   }
  27 |   
  28 | }
  29 |
  30 | export { CartPage };
  31 |
```