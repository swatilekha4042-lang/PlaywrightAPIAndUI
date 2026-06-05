
export class LoginPage{
    constructor(page)
    {
        this.page=page
        this.username = page.locator('#user-name')
        this.password = page.locator('#password')
        this.loginBtn = page.getByRole('button',{name:'Login'})
    }

    async openApplication(){
        await this.page.goto("https://www.saucedemo.com/")
    }

    async closeApplication(){
        await this.page.close()
    }

    async loginToApplication(username,password){
      
      await this.username.fill(username)
      await this.password.fill(password)
      await this.loginBtn.click()
    }
}