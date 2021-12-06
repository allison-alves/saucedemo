/// <reference types="Cypress" />
const faker = require('faker')
let name = faker.name.firstName()
let lstname = faker.name.lastName()
let zipcode = faker.address.zipCode()

Cypress.Commands.add('sauce_labs_bp_checkout_cancel', () => {
    //Iten
    cy.get('[data-test=add-to-cart-sauce-labs-backpack]').click()
    cy.get('.shopping_cart_link').click()
    //Checkout: your information
    cy.get('[data-test=checkout]').click()
    cy.get('.title').should('be.visible').and('contain', 'Checkout: Your Information')
    cy.get('[data-test=firstName]').invoke('attr', 'placeholder').should('contain', 'First Name')
    cy.get('[data-test=firstName]').type(name)
    cy.get('[data-test=lastName]').invoke('attr', 'placeholder').should('contain', 'Last Name')
    cy.get('[data-test=lastName]').type(lstname)
    cy.get('[data-test=postalCode]').invoke('attr', 'placeholder').should('contain', 'Zip/Postal Code')
    cy.get('[data-test=postalCode]').type(zipcode)
    cy.get('[data-test=continue]').click()
  
    cy.get('[data-test=cancel]').should('be.visible').and('contain', 'Cancel')
    cy.get('[data-test=cancel]').click()
})

//--------------------------------------------------------------------------------------------------------------------------------
