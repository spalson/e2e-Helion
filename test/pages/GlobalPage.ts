class GlobalPage {
    get cookiesButton() {
        return $("#rodo-ok");
    }


    async openPage(pageUrl: string, expectedPageUrl: string) {
        await browser.url(pageUrl);
        await expect(browser).toHaveUrl(expectedPageUrl);
    }

    async acceptCookies() {
        const btn:WebdriverIO.Element = await this.cookiesButton;
        await btn.waitForDisplayed();
        await (await this.cookiesButton).click();
    }

}


export default new GlobalPage();