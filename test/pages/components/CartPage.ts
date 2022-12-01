class CartPage{
    get successAlertMessage() {
        return $("div.successbox > p");
    }

    get deletedAlertMessage(){
        return $("div.infobox > p");
    }

    get totalPrice(){ 
        return $("h3#cart-edit-summary");
    }
    get checkbox(){
        return $("form#formularz tr > th.checkbox");
    }

    get deleteAll(){
        return $("div#usun a");
    }

   async getDeletedAlertMessageValue():Promise<string> {
        const alert:WebdriverIO.Element = await this.deletedAlertMessage;
        await alert.waitForDisplayed();
        return await alert.getText();
   }

    async acceptDeleteAllAlert(){
        await browser.acceptAlert();
    }

    async clickOnDeleteAll(){
        const btn:WebdriverIO.Element = await this.deleteAll;
        await btn.waitForDisplayed();
        await btn.scrollIntoView();
        await btn.click();
    }

    async clickOnCheckbox(){
        const checkbox:WebdriverIO.Element = await this.checkbox;
        await checkbox.waitForDisplayed();
        await checkbox.scrollIntoView();
        await checkbox.click();
    }

    async getTotalPriceValue():Promise<string>{
        const price:WebdriverIO.Element = await this.totalPrice;
        await price.waitForDisplayed();
        return await price.getText();
    }

    async getSuccessAlertValue():Promise <string> {
        const alert:WebdriverIO.Element = await this.successAlertMessage;
        await alert.waitForDisplayed();
        return alert.getText();
    }
}

export default new CartPage();