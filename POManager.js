import { HomePage } from "./homepage"; 
import { LoginPage } from "./LoginPage";
import { RegistrationPage } from "./registrationpage";
export class POManager{
    constructor(page){
        this.page=page;
        this.HomePage= new HomePage(this.page);
        this.RegistrationPage= new RegistrationPage(this.page);
        this.loginpage= new LoginPage(this.page);
    }
    getHomePage()
    {
        return this.HomePage;
    }

    getRegistrationPage()
    {
        return this.RegistrationPage;
    }
    getLoginPage()
    {
        return this.loginpage;
    }
    }