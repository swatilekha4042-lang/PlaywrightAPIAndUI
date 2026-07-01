import { test as base } from '@playwright/test'
import { PageManager } from '../PageObjects/PageManager.js'

export const test = base.extend({
    pageManager: async ({ page }, use) => {
        const pageManager = new PageManager(page);
        await use(pageManager);
    },

    createNewPageManager:async ({page},use)=> {
       await use((page)=> new PageManager(page))
    },

    checkoutData: async ({ }, use) => {
        const checkoutData = {
            firstName: 'Swati',
            lastName: 'Behera',
            pinCode: '12345'
        }
        await use(checkoutData)
    }
});



export { expect } from '@playwright/test'