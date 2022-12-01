import { helionHomeUrl, searchResultsUrlIconClick, addToCartUrl } from "../../config/pagesUrl";
import SearchbarPage from "../../pages/components/SearchbarPage";
import { searchPhrase, alertMessage, deletedProductMessage } from "../../config/data";
import SearchResultPage from "../../pages/SearchResultPage";
import ProductPage from "../../pages/components/ProductPage";
import GlobalPage from "../../pages/GlobalPage";
import CartPage from "../../pages/components/CartPage";


describe("E2E - Products", async () => {
    let productTitle:string = "";
    let price:string = "";
    before(() => {
        browser.url(helionHomeUrl);


    })
    it("Should accept cookies", async () => {
        await GlobalPage.acceptCookies();
    })
    it("should type search value and click search icon", async () => {
        await SearchbarPage.typeSearchPhrase(searchPhrase);
        await SearchbarPage.suggestPopupIsVisible();
        await SearchbarPage.clickOnSearchButton();
        await expect(browser).toHaveUrl(searchResultsUrlIconClick);
    })
    it("Should click on first book.", async () => {
        await SearchResultPage.clickOnFirstBookItem();
        await expect(ProductPage.productTitleIsVisible());
        await expect(ProductPage.addToCartButtonIsVisible());
        productTitle = await ProductPage.getProductTitleValue();
        price = await ProductPage.getProductPrice();
        
        
    })
    it("Should click on add to cart button",async () => {
        await ProductPage.clickOnAddToCartButton();
        await expect(browser).toHaveUrlContaining(addToCartUrl);
        await expect(await CartPage.getSuccessAlertValue()).toContain(productTitle);
        await expect (await CartPage.getTotalPriceValue()).toContain(price);
    })
    it("Should delete product from cart",async () => {
        await CartPage.clickOnCheckbox();
        await CartPage.clickOnDeleteAll();

        // to co niżej lub z ec6 na ec5
        // //@ts-ignore
        // console.log(browser.getAlertText())

        await expect(await browser.getAlertText()).toContain(alertMessage);
        await CartPage.acceptDeleteAllAlert();
        await expect(await CartPage.getDeletedAlertMessageValue()).toContain(deletedProductMessage);
    })
    
   

})
