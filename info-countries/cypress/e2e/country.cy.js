describe('Country Info App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/') 
  })

  it('Should display information about Brazil', () => {
    cy.get('input[type="text"]').type('Brazil')
    cy.get('button').click()

    cy.contains('Brazil').should('be.visible')
    cy.contains('Capital: Brasília').should('be.visible')
    cy.get('img[alt="Brazil"]').should('be.visible')
  })

  it('Should show error message for an invalid country', () => {
    cy.get('input[type="text"]').type('InvalidCountry123')
    cy.get('button').click()

    cy.contains('Country not found').should('be.visible')
  })
})
