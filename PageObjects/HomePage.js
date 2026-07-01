import {expect} from '@playwright/test'
export class HomePage{
    constructor(page)
    {
        this.page = page
        this.addToCart = page.locator("#add-to-cart-sauce-labs-bike-light")
        this.cart = page.locator('.shopping_cart_link')
        this.burgerMenu = page.locator("#react-burger-menu-btn")
        this.logoutLink = page.getByRole('link',{name : 'Logout'})
        this.cartCount = page.locator('.shopping_cart_badge')
    }

    async addItemToCart()
    {
        await this.addToCart.click()
        await this.cart.click()

    }

    async logout() {
        await this.burgerMenu.click()
        await this.logoutLink.click()
    }

    async verifyVisualCartPage(){
        await expect(this.page).toHaveScreenshot('cartPage.png',{
            mask:[this.cart],
            maxDiffPixels: 50
        })
    }

    async goToInventoryPage(){
        await this.page.goto('https://www.saucedemo.com/inventory.html')
    }

    async getCartCount(){
        await expect(this.cartCount).toHaveText('1')
    }
}   