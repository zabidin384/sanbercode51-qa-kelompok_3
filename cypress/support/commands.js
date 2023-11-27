Cypress.Commands.add('login',(username, passw) => {
    cy.get('#email').type(username)
    cy.get('#pass').type(passw)
    cy.get('#send2').click()
})
Cypress.Commands.add('forgot',(username, passw) => {
    cy.get('#email_address').type(username)
})