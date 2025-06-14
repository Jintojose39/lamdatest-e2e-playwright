# Test info

- Name: Login and Dashboard Tests >> @smoke Search the product and and proceed add to cart
- Location: C:\Users\JINTO\lamdatest-e2e-playwright\tests\lamdaTestE2E.spec.js:45:7

# Error details

```
Error: locator.check: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('input[name="agree"]')
    - locator resolved to <input value="1" name="agree" type="checkbox" id="input-agree" class="custom-control-input"/>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <label for="input-agree" class="custom-control-label">…</label> intercepts pointer events
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <label for="input-agree" class="custom-control-label">…</label> intercepts pointer events
    - retrying click action
      - waiting 100ms
    37 × waiting for element to be visible, enabled and stable
       - element is visible, enabled and stable
       - scrolling into view if needed
       - done scrolling
       - <label for="input-agree" class="custom-control-label">…</label> intercepts pointer events
     - retrying click action
       - waiting 500ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed

    at RegisterPage.registerUser (C:\Users\JINTO\lamdatest-e2e-playwright\pages\RegisterPage.js:35:29)
    at C:\Users\JINTO\lamdatest-e2e-playwright\tests\lamdaTestE2E.spec.js:18:3
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
    - listitem: / Register
- heading "Register Account" [level=1]
- paragraph:
  - text: If you already have an account with us, please login at the
  - link "login page":
    - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/login
  - text: .
- group "Your Personal Details":
  - text: Your Personal Details First Name*
  - textbox "First Name*": Emmy
  - text: Last Name*
  - textbox "Last Name*": Kerluke-Konopelski
  - text: E-Mail*
  - textbox "E-Mail*": Emmy.Kerluke-Konopelski78@yahoo.com
  - text: Telephone*
  - textbox "Telephone*": 849-788-7612 x57312
  - text: Enter valid phone number with country code!
- group "Your Password":
  - text: Your Password Password*
  - textbox "Password*": G7c_zhAyrqlONiS
  - text: Password Confirm*
  - textbox "Password Confirm*": G7c_zhAyrqlONiS
- group "Newsletter":
  - text: Newsletter Subscribe
  - radio "Yes"
  - text: "Yes"
  - radio "No" [checked]
  - text: "No"
- checkbox "I have read and agree to the Privacy Policy"
- text: I have read and agree to the
- link "Privacy Policy":
  - /url: https://ecommerce-playground.lambdatest.io/index.php?route=information/information/agree&information_id=3
- button "Continue"
- complementary:
  - link " Login":
    - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/login
  - link " Register":
    - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/register
  - link " Forgotten Password":
    - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/forgotten
  - link " My Account":
    - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/account
  - link " Address Book":
    - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/address
  - link " Wish List":
    - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/wishlist
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
- contentinfo:
  - paragraph: © LambdaTest - Powered by OpenCart
```

# Test source

```ts
   1 | import { faker } from "@faker-js/faker";
   2 | import { CommonPage } from "./CommonPage";
   3 |
   4 | class RegisterPage extends CommonPage {
   5 |   constructor(page) {
   6 |     super(page);
   7 |     this.page = page;
   8 |     this.firstNameInput = page.locator("#input-firstname");
   9 |     this.lastNameInput = page.locator("#input-lastname");
  10 |     this.emailInput = page.locator("#input-email");
  11 |     this.telephoneInput = page.locator("#input-telephone");
  12 |     this.passwordInput = page.locator("#input-password");
  13 |     this.confirmPasswordInput = page.locator("#input-confirm"); // Fixed ID
  14 |     this.confirmCheck = page.locator('input[name="agree"]'); // Fixed selector
  15 |     this.continueButton = page.locator('input[type="submit"]');
  16 |     this.registerButton = page.locator(`//span[contains(text()," Register")]`);
  17 |   }
  18 |
  19 |   async generateRandomUser() {
  20 |     const firstName = faker.person.firstName();
  21 |     const lastName = faker.person.lastName();
  22 |     const email = faker.internet.email({ firstName, lastName });
  23 |     const telephone = faker.phone.number("9#########");
  24 |     const password = faker.internet.password(10);
  25 |     return { firstName, lastName, email, telephone, password };
  26 |   }
  27 |
  28 |   async registerUser(user) {
  29 |     await this.firstNameInput.fill(user.firstName);
  30 |     await this.lastNameInput.fill(user.lastName);
  31 |     await this.emailInput.fill(user.email);
  32 |     await this.telephoneInput.fill(user.telephone);
  33 |     await this.passwordInput.fill(user.password);
  34 |     await this.confirmPasswordInput.fill(user.password);
> 35 |     await this.confirmCheck.check();
     |                             ^ Error: locator.check: Test timeout of 30000ms exceeded.
  36 |     await this.continueButton.click();
  37 |     
  38 |   }
  39 |
  40 |   /**
  41 |    * For click Register button
  42 |    */
  43 |   async goToRegisterOption() {
  44 |     await this.myAccount.hover();
  45 |     await this.registerButton.click();
  46 |     await this.page.waitForTimeout(3000);
  47 |   }
  48 | }
  49 |
  50 | export { RegisterPage };
  51 |
```