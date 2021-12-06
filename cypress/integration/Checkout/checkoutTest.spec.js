/// <reference types="Cypress" />
//Standard User
describe('Standard user Test the inventory page item by item in the cart', () => {
    beforeEach(() => cy.visit('/'))
    beforeEach(() => cy.standard_user())
    it('Sauce Labs Backpack - Standard User', () => {
        cy.sauce_labs_bp_checkout()
    });

    it('Sauce Labs Bike Light - Standard User', () => {
        cy.sauce_labs_blight_checkout()
    });
    
    it('Sauce Labs Bolt T-Shirt - Standard User', () => {
        cy.sauce_labs_bshirt_checkout()
    });

    it('Sauce Labs Fleece Jacket - Standard User', () => {
        cy.sauce_labs_fjacket_checkout()
    });

    it('Sauce Labs Onesie - Standard User', () => {
        cy.sauce_labs_onesie_checkout()
    });

    it('Test.allTheThings() T-Shirt (Red) - Standard User', () => {
        cy.sauce_labs_allthings_checkout()
    });

});

//Problem User
describe('Problem user Test the inventory page iten by iten in the cart', () => {
    beforeEach(() => cy.visit('/'))
    beforeEach(() => cy.problem_user())
    it('Sauce Labs Backpack - Problem User', () => {
        cy.sauce_labs_bp_checkout()
    });

    it('Sauce Labs Bike Light - Problem User', () => {
        cy.sauce_labs_blight_checkout()
    });
    
    it('Sauce Labs Bolt T-Shirt - Problem User', () => {
        cy.sauce_labs_bshirt_checkout()
    });

    it('Sauce Labs Fleece Jacket - Problem User', () => {
        cy.sauce_labs_fjacket_checkout()
    });

    it('Sauce Labs Onesie - Problem User', () => {
        cy.sauce_labs_onesie_checkout()
    });

    it('Test.allTheThings() T-Shirt (Red) - Problem User', () => {
        cy.sauce_labs_allthings_checkout()
    });

});

//Performance Glitch User
describe('Performance Glitch user Test the inventory page iten by iten in the cart', () => {
    beforeEach(() => cy.visit('/'))
    beforeEach(() => cy.performance_glitch_user())
    it('Sauce Labs Backpack - Performance Glitch User', () => {
        cy.sauce_labs_bp_checkout()
    });

    it('Sauce Labs Bike Light - Performance Glitch User', () => {
        cy.sauce_labs_blight_checkout()
    });
    
    it('Sauce Labs Bolt T-Shirt - Performance Glitch User', () => {
        cy.sauce_labs_bshirt_checkout()
    });

    it('Sauce Labs Fleece Jacket - Performance Glitch User', () => {
        cy.sauce_labs_fjacket_checkout()
    });

    it('Sauce Labs Onesie - Performance Glitch User', () => {
        cy.sauce_labs_onesie_checkout()
    });

    it('Test.allTheThings() T-Shirt (Red) - Performance Glitch User', () => {
        cy.sauce_labs_allthings_checkout()
    });

});