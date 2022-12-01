import { isIfStatement, isTemplateExpression } from "typescript";

class SearchResultPage {
    get PageTitle() {
        return $("#pageTitle");
    }
    get resultBooksItem() {
        return $$("ul.list > li");
    }
    get firstBookItem() {
        return $("ul.list > li:nth-child(1) > a");
    }

//     async clickOnFirstBookItem(): {
//         const item:WebdriverIO.Element = await this.firstBookItem;
//         await item.waitForDisplayed();
//         await item.click();
       
//    }

    async clickOnFirstBookItem() {
        const item1:WebdriverIO.Element = await this.firstBookItem;
        await item1.waitForDisplayed();
        await item1.scrollIntoView();
        await item1.click();
    }

    async getPageTitle(): Promise < string > {
    const title: WebdriverIO.Element = await this.PageTitle;
    await title.waitForDisplayed();
    return await title.getText();
}

    async countBooks(): Promise < number > {
    const books: WebdriverIO.ElementArray = await this.resultBooksItem;
    return await books.length;
}
}

export default new SearchResultPage();