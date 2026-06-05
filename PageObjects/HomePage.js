
export class HomePage{
    constructor(page)
    {
        this.page = page
        this.addToCart = page.locator("#add-to-cart-sauce-labs-bike-light")
        this.cart = page.locator('.shopping_cart_link')
        this.burgerMenu = page.locator("#react-burger-menu-btn")
        this.logoutLink = page.getByRole('link',{name : 'Logout'})
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
}   