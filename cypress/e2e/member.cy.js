/// <reference types="cypress" />

describe('Netflix - Sign In Page', () => {
    it('User can go to Sign In Page', () => {
        cy.visit('http://netflix.com');
        cy.wait(2000);
        cy.get("a[role='button']").click();
        cy.wait(2000);   
        cy.url().should('eq', 'https://www.netflix.com/login');
    })
})