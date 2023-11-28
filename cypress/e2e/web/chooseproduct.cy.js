describe('Choose Product', () => {
  beforeEach(() => {
    return cy.visit('/')

  })
  it('Selects a Product --for Women', () => {
      cy.contains("Women").click()
      cy.contains('Radiant Tee').click()
      cy.get('#option-label-size-143-item-168').click()
      cy.get('#option-label-color-93-item-56').click()
      cy.get('#product-addtocart-button').click()
      cy.get('#maincontent').should('contain', 'You added Radiant Tee to your shopping cart.')
      cy.get('div.minicart-wrapper').click()
  })
  it('Selects a Product --for Men', () => {
      cy.get("#ui-id-5").click() //category men
      cy.get('.categories-menu > :nth-child(2) > :nth-child(2) > a').click() //cath jacket
      cy.get(':nth-child(2) > .product-item-info > .details > .name > .product-item-link').click() //choose jacket
      cy.get('#option-label-size-143-item-169').click()
      cy.get('#option-label-color-93-item-58').click()
      cy.get('#qty').type('5')
      cy.get('#product-addtocart-button').click()
      cy.get('#maincontent').should('contain', 'You added Montana Wind Jacket to your shopping cart.')
      cy.get('div.minicart-wrapper').click()
  })
  
})