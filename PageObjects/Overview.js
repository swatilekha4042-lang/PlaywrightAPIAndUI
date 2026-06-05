export class OverviewPage{
    constructor (page)
    {
        this.page = page
        this.finishBtn = page.getByRole('button',{name:'Finish'})

    }

    async clickOnFinish(){
        await this.finishBtn.click()
    }
}