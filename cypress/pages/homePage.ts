export default class HomePage {
    
    openSite() { return cy.visit(''); };
    getSignupLoginButton() { return cy.get('a[href="/login"]') };
}