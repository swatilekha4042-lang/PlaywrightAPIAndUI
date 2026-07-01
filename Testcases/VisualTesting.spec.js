import { expect, test } from '../Fixtures/pagemanagerFixture.js'

test('Visual Testing',async ({pageManager,page}) => {

    //Page screenshot
     await pageManager.getLoginPageInstance().openApplication()
     await expect(page).toHaveScreenshot('homePage.png')

     //Element screenshot
    await pageManager.getLoginPageInstance().verifyLoginButtonVisual()

    //Using mask areas and maxDiffPixels
    await pageManager.getLoginPageInstance().loginToApplication('standard_user', 'secret_sauce')
    await pageManager.getHomePageInstance().verifyVisualCartPage()

    
     
})