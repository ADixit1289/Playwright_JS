export class HomePage
{
    constructor(page)
    {
        this.page= page;
        this.registerLink= page.locator("//a[normalize-space()='Register']");
    }
    async goTO()
    {
        await this.page.goto('/');
    }
    async clickOnRegisterLink()
    {
        await this.registerLink.click();
    }

}
