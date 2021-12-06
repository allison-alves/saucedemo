/// <reference types="Cypress" />
//Standard User
describe.only('Standard user Test the inventory page with all items', () => {
    beforeEach(() => cy.visit('/'))
    beforeEach(() => cy.standard_user())
    it('All items in the cart - Standard User', () => {
        cy.sauce_labs_bp_remove()
        cy.sauce_labs_blight_remove()
        cy.sauce_labs_bshirt_remove()
        cy.sauce_labs_fjacket_remove()
        cy.sauce_labs_onesie_remove()
        cy.sauce_labs_allthings_remove()
    });

});

//Problem User
describe('Standard user Test the inventory page with all items', () => {
    beforeEach(() => cy.visit('/'))
    beforeEach(() => cy.problem_user())
    it('All items in the cart - Standard User', () => {
        cy.sauce_labs_bp_remove()
        cy.sauce_labs_blight_remove()
        cy.sauce_labs_bshirt_remove()
        cy.sauce_labs_fjacket_remove()
        cy.sauce_labs_onesie_remove()
        cy.sauce_labs_allthings_remove()
        
    });

});

//Performance Glitch User
describe('Standard user Test the inventory page with all items', () => {
    beforeEach(() => cy.visit('/'))
    beforeEach(() => cy.performance_glitch_user())
    it('All items in the cart - Standard User', () => {
        cy.sauce_labs_bp_remove()
        cy.sauce_labs_blight_remove()
        cy.sauce_labs_bshirt_remove()
        cy.sauce_labs_fjacket_remove()
        cy.sauce_labs_onesie_remove()
        cy.sauce_labs_allthings_remove()
        
    });

});