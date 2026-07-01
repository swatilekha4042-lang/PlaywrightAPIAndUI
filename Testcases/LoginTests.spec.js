import { expect, test } from '../Fixtures/pagemanagerFixture.js'
import { readCSV } from '../utils/csvReader.js'
import jsonData from '../testData/jsonLoginData.json' with {type: 'json'}
const testData = await readCSV('./testData/loginData.csv')

//Reading data from a csv file
for (const data of testData) {
    test(`CSV Login and Logout application for user ${data.username}`, async ({ pageManager }) => {

        await pageManager.getLoginPageInstance().openApplication()
        await pageManager.getLoginPageInstance().loginToApplication(data.username, data.password)
    })

}

//Reading data from a json file
for (const data of jsonData) {
    test(`JSON Login and Logout application for user ${data.username}`, async ({ pageManager }) => {

        await pageManager.getLoginPageInstance().openApplication()
        await pageManager.getLoginPageInstance().loginToApplication(data.username, data.password)
    })

}

/*End to end scenario :
Login
Add to Cart
Checkout
Fill checkout form
Logout
*/
test('E2E Scenario', async ({ pageManager,checkoutData }) => {
    
    await pageManager.getLoginPageInstance().openApplication()
    await pageManager.getLoginPageInstance().loginToApplication('standard_user', 'secret_sauce')
    await pageManager.getHomePageInstance().addItemToCart()

    await pageManager.getCartPageInstance().checkoutItem()
    await pageManager.getCheckoutPageInstance().fillTheForm(checkoutData.firstName,checkoutData.lastName,checkoutData.pinCode)
    await pageManager.getOverviewPageInstance().clickOnFinish()
    await pageManager.getHomePageInstance().logout()

})

/** To verify the shopping cart count persists in new tab as well */
test.only('Verify shopping cart count persitence across tabs',async({context,pageManager,createNewPageManager}) => {

    //Tab 1
    await pageManager.getLoginPageInstance().openApplication()
    await pageManager.getLoginPageInstance().loginToApplication('standard_user', 'secret_sauce')
    await pageManager.getHomePageInstance().addItemToCart() 

    //Tab 2
    const secondTab = await context.newPage()
    const secondTabPageManager = createNewPageManager(secondTab)
    await secondTabPageManager.getHomePageInstance().goToInventoryPage()
    await secondTabPageManager.getHomePageInstance().getCartCount()

})
//Multiple logins using multiple browser contexts
test('End to end scenario with multiple users', async ({ browser }) => {
    const standard_user_context = await browser.newContext();
    const problem_user_context = await browser.newContext();
    const standardUser = jsonData[0];
    const problemUser = jsonData[1];
    try {
        const standard_user_Page = await standard_user_context.newPage();
        const problem_user_Page = await problem_user_context.newPage();

        await standard_user_Page.goto('https://www.saucedemo.com/');
        await problem_user_Page.goto('https://www.saucedemo.com/');

        await standard_user_Page.locator('#user-name').fill(standardUser.username);
        await standard_user_Page.locator('#password').fill(standardUser.password);
        await standard_user_Page.locator('#login-button').click();

        await problem_user_Page.locator('#user-name').fill(problemUser.username);
        await problem_user_Page.locator('#password').fill(problemUser.password);
        await problem_user_Page.locator('#login-button').click();

        await expect(standard_user_Page).toHaveURL(/inventory/)
        await expect(problem_user_Page).toHaveURL(/inventory/)

        await standard_user_Page.locator('#add-to-cart-sauce-labs-bike-light').click()
        await problem_user_Page.locator('#add-to-cart-sauce-labs-backpack').click()

        await standard_user_Page.locator('.shopping_cart_link').click()
        await problem_user_Page.locator('.shopping_cart_link').click()

        await expect(standard_user_Page.locator('.inventory_item_name')).toHaveText('Sauce Labs Bike Light')
        await expect(problem_user_Page.locator('.inventory_item_name')).toHaveText('Sauce Labs Backpack')
    }
    finally {
        await standard_user_context.close()
        await problem_user_context.close()
    }


})


