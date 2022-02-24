
context('Careers Page', () => {

    beforeEach(() => {
        cy.visit('https://www.atd-us.com/en/careers')
    })

    it('should scroll to the bottom of the page', () => {

        cy.get('#partner-with-us').scrollIntoView()


        cy.get('#name').should('be.visible').type('Muzamil')
        cy.get('#name').should('have.value', 'Muzamil')

        cy.get('#email').should('be.visible').type('Muzamil2022a@gmail.com')
        cy.get('#email').should('have.value', 'Muzamil2022a@gmail.com')


        cy.get('#city').should('be.visible').type('Jersey City')
        cy.get('#city').should('have.value', 'Jersey City')

        cy.get('#state').should('be.visible').select('New Jersey')
        cy.get('#state').should('have.value', 'NJ')

        cy.get('#zip').should('be.visible').type('07310')
        cy.get('#zip').should('have.value', '07310')

        cy.get('#phone').should('be.visible').type('(551) 229-5739')
        cy.get('#phone').should('have.value', '(551) 229-5739')

        cy.get('#inquiry').should('be.visible').select('TireBuyer')
        cy.get('#inquiry').should('have.value', 'TireBuyer')

        cy.get('#radioNo').check()
        cy.get('#radioNo').should('be.checked')

        cy.get('#contact-submit').should('be.visible').click()
        cy.reload()
    })

})