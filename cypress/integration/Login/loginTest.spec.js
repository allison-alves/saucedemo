/// <reference types="Cypress" />
//Fluxo Normal
describe('Login test with users', () => {
    beforeEach(() => cy.visit('/'))
    it('Login test with Standard User', () => {
        cy.standard_user()
    }); 
    it('Login test with Locked Out User', () => {
        cy.locked_out_user()
        cy.get('.error-message-container').should('be.visible')
        cy.get('.error-button').should('be.visible')
        cy.get('svg').should('exist')
        cy.get('[data-test=error]').should('be.visible').and('contain', 'Epic sadface: Sorry, this user has been locked out.')   
    });
    it('Login test with Problem User', () => {
        cy.problem_user()
    });
    it('Login teste with Performance Glitch User', () => {
        cy.performance_glitch_user()
    });
});

//Fluxo Alternativo

//Standard User
describe('Alternative Login Flow', () => {
    beforeEach(() => cy.visit('https://www.saucedemo.com/'))
    it('Standard User and invalid password', () => {
        cy.standard_user_invpassword()
        cy.get('.error-message-container').should('be.visible')
        cy.get('.error-button').should('be.visible')
        cy.get('svg').should('exist')
        cy.get('[data-test=error]').should('be.visible').and('contain', 'Epic sadface: Username and password do not match any user in this service')
    });
    it('Standard User and no password', () => {
        cy.standard_user_nopassword()
        cy.get('.error-message-container').should('be.visible')
        cy.get('.error-button').should('be.visible')
        cy.get('svg').should('exist')
        cy.get('[data-test=error]').should('be.visible').and('contain', 'Epic sadface: Password is required')
    });

    //Problem User
    it('Problem User and invalid password', () => {
        cy.problem_user_invpassword()
        cy.get('.error-message-container').should('be.visible')
        cy.get('.error-button').should('be.visible')
        cy.get('svg').should('exist')
        cy.get('[data-test=error]').should('be.visible').and('contain', 'Epic sadface: Username and password do not match any user in this service')
    });
    it('Problem User and no password', () => {
        cy.standard_user_nopassword()
        cy.get('.error-message-container').should('be.visible')
        cy.get('.error-button').should('be.visible')
        cy.get('svg').should('exist')
        cy.get('[data-test=error]').should('be.visible').and('contain', 'Epic sadface: Password is required')
    });

    //Perfomance Glitch User

    it('Performance Glitch User and invalid password', () => {
        cy.performance_user_invpassword()
        cy.get('.error-message-container').should('be.visible')
        cy.get('.error-button').should('be.visible')
        cy.get('svg').should('exist')
        cy.get('[data-test=error]').should('be.visible').and('contain', 'Epic sadface: Username and password do not match any user in this service')
    });
    it('Performance Glitch User and no password', () => {
        cy.performance_user_nopassword()
        cy.get('.error-message-container').should('be.visible')
        cy.get('.error-button').should('be.visible')
        cy.get('svg').should('exist')
        cy.get('[data-test=error]').should('be.visible').and('contain', 'Epic sadface: Password is required')
    });
    
    //No user login
    it('No User and a valid password', () => {
        cy.no_user_login()
        cy.get('.error-message-container').should('be.visible')
        cy.get('.error-button').should('be.visible')
        cy.get('svg').should('exist')
        cy.get('[data-test=error]').should('be.visible').and('contain', 'Epic sadface: Username is required')
    });

    //No user and password
    it('No User and a no password', () => {
        cy.no_user_login_and_pass()
        cy.get('.error-message-container').should('be.visible')
        cy.get('.error-button').should('be.visible')
        cy.get('svg').should('exist')
        cy.get('[data-test=error]').should('be.visible').and('contain', 'Epic sadface: Username is required')
    });

});