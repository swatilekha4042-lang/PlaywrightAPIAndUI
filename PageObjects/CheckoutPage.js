export class CheckoutPage{
    constructor (page)
    {
        this.page = page
        this.firstNameTxtBox = page.getByPlaceholder("First Name")
        this.lastNameTxtBox = page.getByPlaceholder("Last Name")
        this.postalCodeTxtBox = page.locator("#postal-code")
        this.continueBtn = page.locator("#continue")
    }

    async fillTheForm(text1,text2,text3)
    {
        await this.firstNameTxtBox.fill(text1)
        await this.lastNameTxtBox.fill(text2)
        await this.postalCodeTxtBox.fill(text3)
        await this.continueBtn.click()

    }
}