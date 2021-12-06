//Comandos do fluxo normal
/// <reference types="Cypress" />
const faker = require('faker')
let password = faker.internet.password()

Cypress.Commands.add('standard_user', () => {
    cy.get('[data-test=username]').type('standard_user')
    cy.get('[data-test=password]').type('secret_sauce')
    cy.get('[data-test=login-button]').click()
    //cy.get('#react-burger-menu-btn').click();
    //cy.get('#logout_sidebar_link').click();
})

Cypress.Commands.add('locked_out_user', () => {
    cy.get('[data-test=username]').type('locked_out_user')
    cy.get('[data-test=password]').type('secret_sauce')
    cy.get('[data-test=login-button]').click()
})

Cypress.Commands.add('problem_user', () => {
    cy.get('[data-test=username]').type('problem_user')
    cy.get('[data-test=password]').type('secret_sauce')
    cy.get('[data-test=login-button]').click()
    //cy.get('#react-burger-menu-btn').click();
    //cy.get('#logout_sidebar_link').click();
})

Cypress.Commands.add('performance_glitch_user', () => {
    cy.get('[data-test=username]').type('performance_glitch_user')
    cy.get('[data-test=password]').type('secret_sauce')
    cy.get('[data-test=login-button]').click()
    //cy.get('#react-burger-menu-btn').click();
    //cy.get('#logout_sidebar_link').click();
})

//Fluxo Alternativo

//Standard User
Cypress.Commands.add('standard_user_invpassword', () => {
    cy.get('[data-test=username]').type('standard_user')
    cy.get('[data-test=password]').type(password)
    cy.get('[data-test=login-button]').click()
})

Cypress.Commands.add('standard_user_nopassword', () => {
    cy.get('[data-test=username]').type('standard_user')
    cy.get('[data-test=password]')
    cy.get('[data-test=login-button]').click()
})

//Problem User
Cypress.Commands.add('problem_user_invpassword', () => {
    cy.get('[data-test=username]').type('problem_user')
    cy.get('[data-test=password]').type(password)
    cy.get('[data-test=login-button]').click()
})

Cypress.Commands.add('problem_user_nopassword', () => {
    cy.get('[data-test=username]').type('problem_user')
    cy.get('[data-test=password]')
    cy.get('[data-test=login-button]').click()
})

//Performance Glitch User
Cypress.Commands.add('performance_user_invpassword', () => {
    cy.get('[data-test=username]').type('problem_user')
    cy.get('[data-test=password]').type(password)
    cy.get('[data-test=login-button]').click()
})

Cypress.Commands.add('performance_user_nopassword', () => {
    cy.get('[data-test=username]').type('problem_user')
    cy.get('[data-test=password]')
    cy.get('[data-test=login-button]').click()
})

//No user login
Cypress.Commands.add('no_user_login', () => {
    cy.get('[data-test=username]')
    cy.get('[data-test=password]').type('secret_sauce')
    cy.get('[data-test=login-button]').click()
})

//No user and password
Cypress.Commands.add('no_user_login_and_pass', () => {
    cy.get('[data-test=username]')
    cy.get('[data-test=password]')
    cy.get('[data-test=login-button]').click()
})