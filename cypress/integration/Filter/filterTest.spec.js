/// <reference types="Cypress" />
//Standard User
describe('Standard User - Test to select the displayed order', () => {
    beforeEach(() => cy.visit('/'))
    beforeEach(() => cy.standard_user())

    it('Order By A to Z', () => {
        cy.select_a_to_z()
    });

    it('Order By Z to A', () => {
        cy.select_z_to_a()
    });

    it('Select Low to High Price', () => {
        cy.select_low_to_high()
    });

    it('Select High to Low Price', () => {
        cy.select_high_to_low()
    });
});

//Problem User
describe('Problem User - Test to select the displayed order', () => {
    beforeEach(() => cy.visit('/'))
    beforeEach(() => cy.problem_user())

    it('Order By A to Z', () => {
        cy.select_a_to_z()
    });

    it('Order By Z to A', () => {
        cy.select_z_to_a()
    });

    it('Select Low to High Price', () => {
        cy.select_low_to_high()
    });

    it('Select High to Low Price', () => {
        cy.select_high_to_low()
    });
});

//Perfomance Glitch User
describe('Perfomance Glitch User - Test to select the displayed order', () => {
    beforeEach(() => cy.visit('/'))
    beforeEach(() => cy.performance_glitch_user())

    it('Order By A to Z', () => {
        cy.select_a_to_z()
    });

    it('Order By Z to A', () => {
        cy.select_z_to_a()
    });

    it('Select Low to High Price', () => {
        cy.select_low_to_high()
    });

    it('Select High to Low Price', () => {
        cy.select_high_to_low()
    });
});