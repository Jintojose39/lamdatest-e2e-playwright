# Test info

- Name: Login and Dashboard Tests >> @smoke Search the product and and proceed add to cart
- Location: C:\Users\JINTO\lamdatest-e2e-playwright\tests\lamdaTestE2E.spec.js:45:7

# Error details

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('//span[contains(text()," Login")]')

    at LoginPage.goToMyAccountAndLogin (C:\Users\JINTO\lamdatest-e2e-playwright\pages\LoginPage.js:19:28)
    at C:\Users\JINTO\lamdatest-e2e-playwright\tests\lamdaTestE2E.spec.js:22:5
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
  - textbox "Search For Products"
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
- navigation "breadcrumb":
  - list:
    - listitem:
      - link "":
        - /url: https://ecommerce-playground.lambdatest.io/index.php?route=common/home
    - listitem:
      - text: /
      - link "Account":
        - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/account
    - listitem: / Success
- heading " Your Account Has Been Created!" [level=1]
- paragraph
- paragraph: Congratulations! Your new account has been successfully created!
- paragraph: You can now take advantage of member privileges to enhance your online shopping experience with us.
- paragraph: If you have ANY questions about the operation of this online shop, please e-mail the store owner.
- paragraph:
  - text: A confirmation has been sent to the provided e-mail address. If you have not received it within the hour, please
  - link "contact us":
    - /url: https://ecommerce-playground.lambdatest.io/index.php?route=information/contact
  - text: .
- paragraph
- link "Continue":
  - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/account
- complementary:
  - link " My Account":
    - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/account
  - link " Edit Account":
    - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/edit
  - link " Password":
    - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/password
  - link " Address Book":
    - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/address
  - link " Wish List":
    - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/wishlist
  - link " Notification":
    - /url: https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/account/notification/product
  - link " Order History":
    - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/order
  - link " Downloads":
    - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/download
  - link " Recurring payments":
    - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/recurring
  - link " Reward Points":
    - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/reward
  - link " Returns":
    - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/return
  - link " Transactions":
    - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/transaction
  - link " Newsletter":
    - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/newsletter
  - link " Logout":
    - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/logout
- contentinfo:
  - paragraph: © LambdaTest - Powered by OpenCart
```

# Test source

```ts
   1 | class LoginPage {
   2 |   constructor(page) {
   3 |     this.page = page;
   4 |     this.myAccount = page.locator(
   5 |       `(//span[contains(text()," My account")])[2]`
   6 |     );
   7 |     this.userName = page.locator("#input-email");
   8 |     this.password = page.locator("#input-password");
   9 |     this.loginButton = page.locator(`//span[contains(text()," Login")]`);
  10 |     this.signInButton = page.locator("[value='Login']");
  11 |   }
  12 |
  13 |   async goToApplication(url) {
  14 |     await this.page.goto(url);
  15 |   }
  16 |
  17 |   async goToMyAccountAndLogin() {
  18 |     await this.myAccount.hover();
> 19 |     await this.loginButton.click();
     |                            ^ Error: locator.click: Test timeout of 30000ms exceeded.
  20 |     await this.page.waitForTimeout(3000);
  21 |   }
  22 |   async enterTheCredentials(user) {
  23 |     await this.userName.fill(user.email);
  24 |     await this.password.fill(user.password);
  25 |     await this.signInButton.click();
  26 |   }
  27 |
  28 |   async validLogin(username, password) {
  29 |     await this.userName.fill(username);
  30 |     await this.password.fill(password);
  31 |     await this.signInButton.click();
  32 |     await this.page.waitForLoadState("networkidle");
  33 |   }
  34 | }
  35 |
  36 | export { LoginPage };
  37 |
```