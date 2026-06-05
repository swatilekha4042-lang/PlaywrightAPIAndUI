import { test, expect } from '@playwright/test';

test.skip('Test VScode extension playwright', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('swati');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('1234');
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="error"]')).toBeVisible();
});


test.skip('test', async ({ page }) => {
  await page.goto('https://www.salesforce.com/in/?ir=1');
  await page.locator('span').filter({ hasText: /^Products$/ }).click();
  await page.locator('span').filter({ hasText: 'Small Business' }).click();
  await page.getByRole('link', { name: 'Sales', exact: true }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Try for free: Small Business' }).click();
  const page1 = await page1Promise;
  await page1.getByRole('textbox', { name: 'First name' }).click();
  await page1.getByRole('textbox', { name: 'First name' }).fill('swati');
  await page1.getByRole('textbox', { name: 'First name' }).press('Tab');
  await page1.getByRole('textbox', { name: 'Last name' }).fill('behera');
  await page1.getByRole('textbox', { name: 'Last name' }).press('Tab');
  await page1.getByRole('textbox', { name: 'Job title' }).fill('sdet');
  await page1.getByRole('button', { name: 'Next' }).click();
});

test.fail('test to fail', async ({ page }) => {
  await page.goto('https://www.salesforce.com/in/?ir=1');
  await page.locator('span').filter({ hasText: /^Products$/ }).click();
  await page.locator('span').filter({ hasText: 'Small Business' }).click();
  await page.getByRole('link', { name: 'Sales', exact: true }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Try for free: Small Business' }).click();
  const page1 = await page1Promise;
  await page1.getByRole('textbox', { name: 'First name' }).click();
  await page1.getByRole('textbox', { name: 'First name' }).fill('swati');
  await page1.getByRole('textbox', { name: 'First name' }).press('Tab');
  await page1.getByRole('textbox', { name: 'Last name' }).fill('behera');
  await page1.getByRole('textbox', { name: 'Last name' }).press('Tab');
  await page1.getByRole('textbox', { name: 'Job title' }).fill('sdet');
  await page1.getByRole('button', { name: 'Nxt' }).click();
});