export default class SignupLoginPage {

    getLoginEmailField() { return cy.get('input[data-qa="login-email"]') };
    getPasswordLoginField() { return cy.get('input[data-qa="login-password"]') };
    getLoginButton() { return cy.get('button[data-qa="login-button"]') };

    getSingupNameField() { return cy.get('input[data-qa="signup-name"]') };
    getSingupEmailField() { return cy.get('input[data-qa="signup-email"]') };
    getSignupButton() { return cy.get('button[data-qa="signup-button"]') };
      
}