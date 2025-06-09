export class CommonPage {
     constructor(page) {
       this.page = page;
     }
   
     async click(selector) {
       await this.page.locator(selector).click();
     }
   
     async type(selector, text) {
       await this.page.locator(selector).fill(text);
     }
   
     async waitForElement(selector) {
       await this.page.locator(selector).waitFor({ state: 'visible' });
     }
   
     async getTitle() {
       return await this.page.title();
     }
   
     async navigateTo(url) {
       await this.page.goto(url);
     }
   
     async isElementVisible(selector) {
       return await this.page.locator(selector).isVisible();
     }
   }
   