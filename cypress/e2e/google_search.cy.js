describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('https://www.google.com') // Added https:// in URL
    cy.get('#W0wltc > .QS5gu').click()
  })
})
