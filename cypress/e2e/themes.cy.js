// cypress-popup-themes-test

// TEst para cuenta
describe('El usuario selecciona comprar un tema', () => {
    it('El tema se compra y se añade a la pagina principal', () => {
        cy.visit('http://localhost:3000/login') // change URL to match your dev URL
        
        cy.get('#Email').type('m4rkg12@gmail.com')
        cy.get('#password').type('jpegmafia')

        cy.get('.form-btn-is').click()

        // Presionar el boton para ver temas
        cy.get('.themes-link').click()

        // seleccionar un tema
        cy.get('.theme-title').contains('Mountains at sunset').get('.theme-purchase-button > button').click()

        // Cerrar popUp
        cy.get('.popup-account > .btn-close').click()
    })
})