const userData = require('../../fixtures/userData.json')

describe('Verify Login Functionality', () => {
    it('clicks the button "Sign In"', () => {
        cy.visit('https://magento.softwaretestingboard.com/')
        cy.contains('Sign In').click()
    })
    it('Success Login - Valid Username and Password', () =>{
        cy.visit('')
        cy.contains('Sign In').click()
        cy.login('chandraindras31@gmail.com', 'Chandra2018')
        cy.contains('Welcome, Chandra Kirana!')
    })
    it('Failed Login - Wrong Username', () => {
        cy.visit('')
        cy.contains('Sign In').click()
        cy.login('chandraindras31@', 'Chandra2018')
        cy.contains('Please enter a valid email address (Ex: johndoe@domain.com).').should('be.visible')
    })
    it('Failed Login - Wrong password', () =>{
        cy.visit('')
        cy.contains('Sign In').click()
        cy.login('chandraindras31@gmail.com', '12345678')
        cy.contains('The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.').should('be.visible')
    })
    it('Failed Login - Wrong Username and Password', () => {
        cy.visit('')
        cy.contains('Sign In').click()
        cy.login('chandraindras31', 'Chandra201856')
        cy.contains('Please enter a valid email address (Ex: johndoe@domain.com).').should('be.visible')
    })
    it('Failed Login - Forgot Password and Valid Email', () => {
        cy.visit('')
        cy.contains('Sign In').click()
        cy.contains('Forgot Your Password?').click()
        cy.forgot('chandraindras31@gmail.com')
        cy.contains('Reset My Password').click()
    })
    it('Failed Login - Forgot Password and Invalid Email', () => {
        cy.visit('')
        cy.contains('Sign In').click()
        cy.contains('Forgot Your Password?').click()
        cy.forgot('chandraindras31')
        cy.contains('Reset My Password').click()
    })
})