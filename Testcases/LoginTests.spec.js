import { test } from '@playwright/test'
import { PageManager } from '../PageObjects/PageManager.js'
import { readCSV } from '../utils/csvReader.js'
import jsonData from '../testData/jsonLoginData.json' with {type:'json'}


const testData = await readCSV('./testData/loginData.csv')
 
for (const data of testData) {
    test(`CSV Login and Logout application for user ${data.username}`, async ({ page }) => {

        const pageManagerInstance = new PageManager(page)
        await pageManagerInstance.getLoginPageInstance().openApplication()
        await pageManagerInstance.getLoginPageInstance().loginToApplication(data.username,data.password)
    })
    
}

for (const data of jsonData) {
    test.only(`JSON Login and Logout application for user ${data.username}`, async ({ page }) => {

        const pageManagerInstance = new PageManager(page)
        await pageManagerInstance.getLoginPageInstance().openApplication()
        await pageManagerInstance.getLoginPageInstance().loginToApplication(data.username,data.password)
    })
    
}


test('E2E Scenario', async ({ page }) => {
    const pageManagerInstance = new PageManager(page)

    await pageManagerInstance.getLoginPageInstance().openApplication()
    await pageManagerInstance.getLoginPageInstance().loginToApplication('standard_user','secret_sauce')
    await pageManagerInstance.getHomePageInstance().addItemToCart()

    await pageManagerInstance.getCartPageInstance().checkoutItem()
    await pageManagerInstance.getCheckoutPageInstance().fillTheForm('swati','behera','45667')
    await pageManagerInstance.getOverviewPageInstance().clickOnFinish()
    await pageManagerInstance.getHomePageInstance().logout()

})


