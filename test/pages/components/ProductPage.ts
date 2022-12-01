class ProductPage {
    get productTitle() {
        return $("div.title-group > h1 > span[itemprop='name']");
    }

    get addToCartButton() {
        return $("a#addToBasket_vwdtnp_w");
    }

    get productPrice(){
        return $("ins#cena_w");
    }

   async getProductPrice():Promise<string> {
        const price:WebdriverIO.Element = await this.productPrice;
        await price.waitForDisplayed();
        return await price.getText();
   }

    async getProductTitleValue():Promise<string> {
        const title:WebdriverIO.Element = await this.productTitle;
        await title.waitForDisplayed();
        return await title.getText();
    }

    async productTitleIsVisible() {
        const title: WebdriverIO.Element = await this.productTitle;
        await title.waitForDisplayed()
        }
    async clickOnAddToCartButton() {
        const btn:WebdriverIO.Element = await this.addToCartButton;
        await btn.waitForDisplayed();
        await btn.click();
    }

    async addToCartButtonIsVisible() {
        const btn:WebdriverIO.Element = await this.addToCartButton;
        await btn.moveTo();
        await btn.waitForDisplayed();
    }
}


export default new ProductPage();