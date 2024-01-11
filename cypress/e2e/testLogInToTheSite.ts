/// <reference types="cypress"/>

import HomePage from "../pages/homePage";
import SignupLoginPage from "../pages/signupLoginPage";
const homePage = new HomePage();
const signupLoginPage = new SignupLoginPage();

describe('Log in to the site', () => {
    it('Test 1', () => {

        homePage.openSite()
        homePage.getSignupLoginButton().click();

        signupLoginPage.getLoginEmailField().type('adamtestowy@test.com');
        signupLoginPage.getPasswordLoginField().type('test1234!A');
        signupLoginPage.getLoginButton().click();

    })
  })