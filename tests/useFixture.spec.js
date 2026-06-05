import { test } from "./fixtureFile.spec";

test('open application',async({loginLogoutSetup,page} )=> {
console.log("In Main setup")
await page.locator("#react-burger-menu-btn").click()

})
