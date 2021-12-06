/// <reference types="Cypress" />
//Standard User
describe('Standard user Test the inventory page with all items', () => {
    beforeEach(() => cy.visit('/'))
    beforeEach(() => cy.standard_user())
    it('All items in the cart - Standard User', () => {
        cy.sauce_labs_bp_all()
        cy.sauce_labs_blight_all()
        cy.sauce_labs_bshirt_all()
        cy.sauce_labs_fjacket_all()
        cy.sauce_labs_onesie_all()
        cy.sauce_labs_allthings_all()
    });

});

//Problem User
describe('Standard user Test the inventory page with all items', () => {
    beforeEach(() => cy.visit('/'))
    beforeEach(() => cy.problem_user())
    it('All items in the cart - Standard User', () => {
        cy.sauce_labs_bp_all()
        cy.sauce_labs_blight_all()
        cy.sauce_labs_bshirt_all()
        cy.sauce_labs_fjacket_all()
        cy.sauce_labs_onesie_all()
        cy.sauce_labs_allthings_all()
    });

});

//Performance Glitch User
describe('Standard user Test the inventory page with all items', () => {
    beforeEach(() => cy.visit('/'))
    beforeEach(() => cy.performance_glitch_user())
    it('All items in the cart - Standard User', () => {
        cy.sauce_labs_bp_all()
        cy.sauce_labs_blight_all()
        cy.sauce_labs_bshirt_all()
        cy.sauce_labs_fjacket_all()
        cy.sauce_labs_onesie_all()
        cy.sauce_labs_allthings_all()
    });

});