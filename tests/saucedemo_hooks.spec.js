import {test,expect} from '@playwright/test'

test.beforeAll(async ({}) => {
    console.log("Before All");
})
test.beforeEach(async ({page}) => {
    console.log("Before Each");
    await page.goto('https://www.saucedemo.com/')
})

test("valid login saucedemo",async({page}) => {

    console.log("Valid login"); 
    await page.fill('#user-name','standard_user')
    await page.fill('#password','secret_sauce')
    await page.click('#login-button')
    await expect(page).toHaveTitle('Swag Labs')

}); 

test("invalid login saucedemo",async({page}) => {

    console.log("Invalid Login");
    await page.goto('https://www.saucedemo.com/')
    await page.fill('#user-name','swati')
    await page.fill('#password','1234')
    await page.click('#login-buttn')
    await expect(page).toHaveTitle('Swag Labs')

}); 


test.afterEach(async ({page}) => {
    console.log("After Each");
    await page.close();
})

test.afterAll(async ({}) => {
    console.log("After All");
})