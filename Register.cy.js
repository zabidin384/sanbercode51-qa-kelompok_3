describe('Registration Functional', () => {
    it('Lakukan register new user', () => {
      cy.visit('https://magento.softwaretestingboard.com/')
      cy.get('.panel > .header > :nth-child(3) > a').click()
      cy.get("input[id='firstname']").type('Maruli')
      cy.get("input[id='lastname']").type('Siagian')
      cy.get("input[id='email_address']").type('tinasiagian121@gmail.com')
      cy.get("input[id='password']").type('Sanber121')
      cy.get("input[id='password-confirmation']").type('Sanber121')
      cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
  
    })
  })