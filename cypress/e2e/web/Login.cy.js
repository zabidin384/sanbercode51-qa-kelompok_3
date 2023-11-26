const userData = require('../../fixtures/userData.json')

describe('Verify Login Functionality', () => {
    it('clicks the button "Sign In"', () => {
        cy.visit('https://magento.softwaretestingboard.com/')
        cy.contains('Sign In').click()
    })
    it.only('Failed Login - Locked User', () => {
        cy.visit('')
        cy.contains('Sign In').click()
        cy.login('chandraindras31@gmail.com', '12345678')
        cy.contains('The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.').should('be.visible')
    })
    it('Failed Login - Wrong password', () =>{
        cy.visit('')
        cy.get('#email').type(standard_user)
        cy.get('[data-test="password"]').type(userData.valid[0].valid_password)
        cy.get('.submit-button.btn_action').click()
        cy.get('[data-test="error"]').should('contain','Username and password is wrong!')
    })
    it('Success Login - Wrong password', () =>{
        cy.visit('')
        cy.get('#email').type(standard_user)
        cy.get('[data-test="password"]').type(secret_sauce)
        cy.get('.submit-button.btn_action').click()
        cy.url().should('include','/iventory.html')
    })
    it('Failed Login - Wrong creds CUSTOM COMMAND', () => {
        cy.visit('')
        cy.login('kirana','QAengineer')
        cy.verifyContain('[data-test="error"]', 'Username and password do not match!')
    })
    it('Failed Multiple Login', () => {
        cy.visit('')
        cy.contains('Sign In').click()
        cy.fixture('userData.json').then((user) => {
        user.invalid.forEach((data) => {
            cy.login(userData.invalid[0].invalid_user, userData.invalid[0].invalid_pass)
        })
        })
    })
})