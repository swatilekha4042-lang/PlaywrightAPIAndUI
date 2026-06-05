import {test} from '@playwright/test'

//test By label
test("Login to salesforce",async ({page}) => {

  await page.goto("https://www.salesforce.com/products/free-trial/developer/")
  await page.pause();
  await page.getByLabel('First name').fill("Swati")
  await page.getByLabel('Last name').fill("Behera")
})

//get by role
test.only("Login to salesforce Uk",async ({page}) => {

  await page.goto("https://www.salesforce.com/uk/form/signup/sales-ee/")
  await page.pause();
  await page.getByRole('textbox',{name:'First name'}).fill("Swati")
})