/// <reference types="Cypress" />
//Standard User
describe('Standard user Test to cancel the checkout process', () => {
    beforeEach(() => cy.visit('/'))
    beforeEach(() => cy.standard_user())
    it('Sauce Labs Backpack - Standard User', () => {
        cy.sauce_labs_bp_checkout_cancel()
    });

});

//Problem User
describe('Problem user Test to cancel the checkout process', () => {
    beforeEach(() => cy.visit('/'))
    beforeEach(() => cy.problem_user())
    it('Sauce Labs Backpack - Problem User', () => {
        cy.sauce_labs_bp_checkout_cancel()
    });

});

//Performance Glitch User
describe('Performance Glitch user Test to cancel the checkout process', () => {
    beforeEach(() => cy.visit('/'))
    beforeEach(() => cy.performance_glitch_user())
    it('Sauce Labs Backpack - Performance Glitch User', () => {
        cy.sauce_labs_bp_checkout_cancel()
    });

});