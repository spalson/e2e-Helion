class SearchbarPage {
    get searchInput() {
        return $("#inputSearch");
    }

    get searchIcon() {
        return $("//button[contains(text(),'Szukaj')]");
    }

    get suggestPopup() {
        return $("form#szukanie .suggest-list");
    }
    get viewAll() {
        return $("//a[contains(text(), 'Zobacz wszystkie')]");
    }
    get notFoundAlert() {
        return $(".not-found");
    }
    async getNotFoundAlertText(): Promise<string>{
        const alert: WebdriverIO.Element = await this.notFoundAlert;
        await alert.waitForDisplayed();
        return await alert.getText();
    }
    async getInputValue(): Promise<string> {
        const input: WebdriverIO.Element = await this.searchInput;
        await input.waitForDisplayed();
        return await input.getValue();
    }

    async clearSearchbar() {
        const input: WebdriverIO.Element = await this.searchInput;
        await input.waitForDisplayed();
        await input.clearValue();
    }
    async suggestPopupIsVisible() {
        const popup: WebdriverIO.Element = await this.suggestPopup;
        await popup.waitForDisplayed();

    }
    async clickOnViewAll() {
        const clickOnAll: WebdriverIO.Element = await this.viewAll;
        await clickOnAll.waitForDisplayed();
        await clickOnAll.click();
    }
    async clickOnSearchButton() {
        const icon: WebdriverIO.Element = await this.searchIcon;
        await icon.waitForDisplayed();
        await icon.click();

    }

    async searchBarIsVisible() {
        const input: WebdriverIO.Element = await this.searchInput;
        await input.waitForDisplayed();
        await expect(input.isDisplayed()).toBeTruthy();
    }
    async typeSearchPhrase(value: string) {
        const input = await this.searchInput;
        await input.waitForDisplayed();
        await input.setValue(value);
        await browser.pause(300);
        await browser.keys(['Command', 'a']);
    }

}


export default new SearchbarPage();