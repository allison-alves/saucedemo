/// <reference types="Cypress" />
Cypress.Commands.add('select_a_to_z', () => {
    cy.get('[data-test=product_sort_container]').select('az')
    cy.get('.inventory_list > div').should(($divs) => {
        expect($divs, '6 items').to.have.length(6)
        expect($divs.eq(0), 'first  item').to.contain('Sauce Labs Backpack')
        expect($divs.eq(1), 'second  item').to.contain('Sauce Labs Bike Light')
        expect($divs.eq(2), 'third  item').to.contain('Sauce Labs Bolt T-Shirt')
        expect($divs.eq(3), 'fourth  item').to.contain('Sauce Labs Fleece Jacket')
        expect($divs.eq(4), 'fiveth  item').to.contain('Sauce Labs Onesie')
        expect($divs.eq(5), 'sixth  item').to.contain('Test.allTheThings() T-Shirt (Red)')
    })
})

Cypress.Commands.add('select_z_to_a', () => {
    cy.get('[data-test=product_sort_container]').select('za')
    cy.get('.inventory_list > div').should(($divs) => {
        expect($divs, '6 items').to.have.length(6)
        expect($divs.eq(0), 'sixth  item').to.contain('Test.allTheThings() T-Shirt (Red)')
        expect($divs.eq(1), 'fiveth  item').to.contain('Sauce Labs Onesie')
        expect($divs.eq(2), 'fourth  item').to.contain('Sauce Labs Fleece Jacket')
        expect($divs.eq(3), 'third  item').to.contain('Sauce Labs Bolt T-Shirt')
        expect($divs.eq(4), 'second  item').to.contain('Sauce Labs Bike Light')
        expect($divs.eq(5), 'first  item').to.contain('Sauce Labs Backpack')
    })
})

Cypress.Commands.add('select_low_to_high', () => {
    cy.get('[data-test=product_sort_container]').select('lohi')
    cy.get('.inventory_list > div').should(($divs) => {
        expect($divs, '6 items').to.have.length(6)
        expect($divs.eq(0), 'first  item').to.contain('7.99')
        expect($divs.eq(1), 'second  item').to.contain('9.99')
        expect($divs.eq(2), 'third  item').to.contain('15.99')
        expect($divs.eq(3), 'fourth  item').to.contain('15.99')
        expect($divs.eq(4), 'fiveth  item').to.contain('29.99')
        expect($divs.eq(5), 'sixth  item').to.contain('49.99')
    })
})

Cypress.Commands.add('select_high_to_low', () => {
    cy.get('[data-test=product_sort_container]').select('hilo')
    cy.get('.inventory_list > div').should(($divs) => {
        expect($divs, '6 items').to.have.length(6)
        expect($divs.eq(0), 'sixth  item').to.contain('49.99')
        expect($divs.eq(1), 'fiveth  item').to.contain('29.99')
        expect($divs.eq(2), 'fourth  item').to.contain('15.99')
        expect($divs.eq(3), 'third  item').to.contain('15.99')
        expect($divs.eq(4), 'second  item').to.contain('9.99')
        expect($divs.eq(5), 'first  item').to.contain('7.99')
    })
})