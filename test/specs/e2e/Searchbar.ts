import GlobalPage from "../../pages/GlobalPage";
import {doubleIncorrectSearchPhrase, helionHomeUrl, searchResultsUrlSeeAll} from "../../config/pagesUrl";
import SearchBarPage from "../../pages/components/SearchbarPage";
import {incorrectMessage, incorrectSearchPhrase, searchPhrase, searchResultTitle} from "../../config/data";
import SearchResultPage from "../../pages/SearchResultPage";

describe("E2E - Searchbar", async () => {
    it("Should open helion homepage, verify url and searchbar is visible ", async () => {
        await GlobalPage.openPage(helionHomeUrl, helionHomeUrl);
        await SearchBarPage.searchBarIsVisible();
        await browser.pause(1000);
    })
    it("Should accept cookies on the page",async () => {
        await GlobalPage.acceptCookies();
    })

    it("Should click on search icon and verify url",async () => {
        await SearchBarPage.clickOnSearchButton();
        await expect(browser).toHaveUrl(helionHomeUrl);
    })

    it("should type search value and verify visible popup",async () => {
        await SearchBarPage.typeSearchPhrase(searchPhrase);
        await SearchBarPage.suggestPopupIsVisible();
    })
    it("Should click on see all books button",async () => {
        await SearchBarPage.clickOnViewAll();
        await expect(browser).toHaveUrl(searchResultsUrlSeeAll);
    })

    it("Should verify title is visible that's correct, and number of books",async () => {
        const titleSearch: string = await SearchResultPage.getPageTitle();
        await expect(titleSearch).toContain(searchResultTitle);
        const numberBooks: number = await SearchResultPage.countBooks();
        await expect(numberBooks).toEqual(20);

    })
    it("Should clear input value", async() => {
        await SearchBarPage.clearSearchbar();
        await expect(await SearchBarPage.getInputValue()).toContain("");
    })
    it("Should type incorrect book name and verify alert", async () => {
        await SearchBarPage.typeSearchPhrase(incorrectSearchPhrase);
        await SearchBarPage.clickOnSearchButton();
        await expect(await SearchBarPage.getNotFoundAlertText()).toContain(incorrectMessage);
    })
    it("Should clear input value and click on search icon", async () => {
        await SearchBarPage.clearSearchbar();
        await SearchBarPage.clickOnSearchButton();
        await expect(browser).toHaveUrl(doubleIncorrectSearchPhrase);
        await expect(await SearchBarPage.getInputValue()).toContain(incorrectSearchPhrase);
    })

}) 