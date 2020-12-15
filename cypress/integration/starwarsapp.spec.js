describe('Star Wars app e2e full test', function(){
    beforeEach(function() {
        cy.visit('http://localhost:3000')
    })

    const distance = '1000000'

    it('landing page renders correctly', function(){
        cy.contains('Star Wars')
        cy.contains('travel distance in Megalights')
        cy.contains('Calculate')

        cy.get('html').should('not.contain', 'Next Ships')
        cy.get('html').should('not.contain', 'Previous Ships')
        cy.get('html').should('not.contain', 'Ressuply Stops')
    })

    describe('Forms', function(){
        beforeEach(function(){
            cy.get('#input-distance').type(distance)
            cy.contains('Calculate!').click()
        })
        describe('Distance Form', function(){
            it('can perfom a calculation with user data', function(){
                cy.contains('Ressuply Stops')
                cy.contains('Millennium Falcon')
                cy.contains('Y-wing')
                cy.contains('Next Ships')
            })
        })

        describe('Search Form', function(){
            it('can perfom a serch for a specific ship', function(){
                cy.get('#input-query').type('x-wing')
                cy.contains('Search').click()

                cy.contains('X-wing')
                cy.contains('Ressuply Stops')
                cy.contains('100')
            })
        })

        describe('Navigation Buttons', function(){
            it('when there is a next button, it can go to the next page of data', function(){
                cy.contains('Next Ships').click()

                cy.contains('Slave 1')
                cy.contains('Naboo fighter')
                cy.contains('Previous Ships')
            })

            it('when there is a previous button, it can go to the previous page', function() {
                cy.contains('Next Ships').click()
                cy.contains('Previous Ships').click()

                cy.contains('X-wing')
            })
        })
    })
})