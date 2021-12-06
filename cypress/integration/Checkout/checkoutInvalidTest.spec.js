/// <reference types="Cypress" />
//Standard User
describe('Standard user Test to check if is possible to finish the purchase with invalid data', () => {
    beforeEach(() => cy.visit('/'))
    beforeEach(() => cy.standard_user())
    it('Checkout Invalid - Standard User', () => {
        cy.sauce_labs_bp_checkout_invalid()
    });
});

describe('Problem user Test to check if is possible to finish the purchase with invalid data', () => {
    beforeEach(() => cy.visit('/'))
    beforeEach(() => cy.problem_user())
    it('Checkout Invalid - Standard User', () => {
        cy.sauce_labs_bp_checkout_invalid()
    });
});

describe('Problem user Test to check if is possible to finish the purchase with invalid data', () => {
    beforeEach(() => cy.visit('/'))
    beforeEach(() => cy.performance_glitch_user())
    it('Checkout Invalid - Standard User', () => {
        cy.sauce_labs_bp_checkout_invalid()
    });
});
