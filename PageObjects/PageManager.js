import { LoginPage } from "./LoginPage"
import { HomePage } from "./HomePage"
import { CartPage } from "./CartPage"
import { CheckoutPage } from "./CheckoutPage"
import { OverviewPage } from "./Overview"

export class PageManager{
    constructor(page)
    {
        this.page=page
        this.loginPageInstance = new LoginPage(page)
        this.homePageInstance = new HomePage(page)
        this.cartPageInstance = new CartPage(page)
        this.checkoutPageInstance = new CheckoutPage(page)
        this.overviewPageInstance = new OverviewPage(page)

    }

     getLoginPageInstance()
    {
        return this.loginPageInstance;
    }

      getHomePageInstance()
    {
        return this.homePageInstance;
    }

      getCartPageInstance()
    {
        return this.cartPageInstance;
    }

      getCheckoutPageInstance()
    {
        return this.checkoutPageInstance;
    }

    getOverviewPageInstance()
    {
        return this.overviewPageInstance;
    }
}