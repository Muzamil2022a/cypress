/// <reference types="cypress" />

context('Header Navigation', () => {
    const home = 'https://www.atd-us.com/en/'

    beforeEach(() => {
        cy.visit(`${home}`)
    })

    it('should navigate to Distribution page', () => {
        cy.get('.nav-link').contains('Distribution Network').click()
        cy.wait(2000)
        cy.location('pathname').should('include', '')
    })

    it('should navigate to Products page', () => {
        cy.get('#navbarProducts').contains('Products').click()
        cy.location('pathname').should('include', '')
    })

    it('should navigate to Programs & Services page', () => {
        cy.get('#navbarProgramsServices').contains('Programs & Services').click()
        cy.location('pathname').should('include', '')
    })

    it('should navigate to Newsroom page', () => {
        cy.get('#navbarNewsroom').contains('Newsroom').click()
        cy.location('pathname').should('include', '')
    })

    it('should navigate to Newsroom page', () => {
        cy.get('#navbarNewsroom').contains('Newsroom').click()
        cy.location('pathname').should('include', '')
    })

    it('should navigate to Who We Are page', () => {
        cy.get('#navbarWhoWeAre').contains('Who We Are').click()
        cy.location('pathname').should('include', '')
    })

})