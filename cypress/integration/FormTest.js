
describe('Pizza Form Test', ()=>{
    beforeEach(()=>{
        cy.visit('http://localhost:3000/pizza')
    })

    describe('Button', () =>{
        it('submit button is available', () =>{
            cy.contains('Submit').should('be.disabled')
        })
    })

    describe('User input', ()=>{
        it('input is valid', () =>{
            cy.contains('Original Red').click()
            cy.contains('Pepperoni').click()
            cy.contains('Sausage').click()
        })

    })
})