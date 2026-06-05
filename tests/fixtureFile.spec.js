import {test as base} from '@playwright/test'

export const test = base.extend({
loginLogoutSetup : async({page},use) => {
    await page.goto("https://www.saucedemo.com/")
    console.log("Before Fixture")
    await page.getByPlaceholder('Username').fill("standard_user")
    await page.getByPlaceholder('Password').fill("secret_sauce")
    await page.getByRole('button',{name:'Login'}).click()
    await use()
    console.log("After Fixture");
    await page.getByRole('link',{name:"Logout"}).click()
}
})