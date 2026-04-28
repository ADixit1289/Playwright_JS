export class RegistrationPage
{
    constructor(page)
    {
        this.page= page;
        this.firstName= page.locator("//input[@id='customer.firstName']");
        this.lastName= page.locator("//input[@id='customer.lastName']");
        this.address= page.locator("//input[@id='customer.address.street']");
        this.city= page.locator("//input[@id='customer.address.city']");
        this.state= page.locator("//input[@id='customer.address.state']");
        this.zipcode= page.locator("//input[@id='customer.address.zipCode']");
        this.phone= page.locator("//input[@id='customer.phoneNumber']");
        this.SSN= page.locator("//input[@id='customer.ssn']");
        this.userName= page.locator("//input[@id='customer.username']");
        this.password= page.locator("//input[@id='customer.password']");
        this.confirmPassword= page.locator("//input[@id='repeatedPassword']");
        this.registerbutton= page.locator("//input[@value='Register']");
    }
    async registerUser(firstName,lastName, address, city,state,zipcode,phone,SSN,userName,password,confirmPassword)
    {
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.address.fill(address);
        await this.city.fill(city);
        await this.state.fill(state);
        await this.zipcode.fill(zipcode);
        await this.phone.fill(phone);
        await this.SSN.fill(SSN);
        await this.userName.fill(userName);
        await this.password.fill(password);
        await this.confirmPassword.fill(confirmPassword);
    }
    async clickOnRegisterButton()
    {
        await this.registerbutton.click();
    }

}