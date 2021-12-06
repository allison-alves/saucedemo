/// <reference types="Cypress" />

Cypress.Commands.add('sauce_labs_bp_checkout_invalid', () => {
    //Iten
    cy.get('[data-test=add-to-cart-sauce-labs-backpack]').click()
    cy.get('.shopping_cart_link').should('be.visible')
    cy.get('.shopping_cart_badge').should('be.visible').and('contain', '1')
    cy.get('.shopping_cart_link').click()
    cy.get('.shopping_cart_link').should('be.visible')
    cy.get('.shopping_cart_badge').should('be.visible').and('contain', '1')
    cy.get('.title').should('be.visible').and('contain', 'Your Cart')
    cy.get('.cart_quantity_label').should('be.visible')
    cy.get('.cart_quantity').should('be.visible').and('contain', '1')
    cy.get('.inventory_item_name').and('contain', 'Sauce Labs Backpack')
    cy.get('.inventory_item_desc').and('contain', 'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.')
    cy.get('.inventory_item_price').and('contain', '$').and('contain','29.99')
    
    //Checkout: your information
    cy.get('[data-test=checkout]').click()
    cy.get('.title').should('be.visible').and('contain', 'Checkout: Your Information')
    cy.get('[data-test=continue]').click()
    cy.get('[data-test=firstName]').invoke('attr', 'class').should('contain', 'input_error form_input error')
    cy.get('[data-test=lastName]').invoke('attr', 'class').should('contain', 'input_error form_input error')
    cy.get('[data-test=postalCode]').invoke('attr', 'class').should('contain', 'input_error form_input error')
    cy.get('.error-message-container').should('be.visible').and('contain', 'Error: First Name is required')
    cy.get('button.error-button').should('be.visible')
    cy.get('[data-test=continue]').click()
})
//--------------------------------------------------------------------------------------------------------------------------------
