describe('Password Reset Flow', () => {

  beforeEach(() => {
    cy.visit('/login')
  })

  it('User can open Forgot Password page from login', () => {
    cy.contains('Forgot Password').click()
    cy.url().should('include', 'forgot')
  })

  it('Shows validation error for empty email', () => {
    cy.contains('Forgot Password').click()
    cy.get('button[type="submit"]').click()

    cy.contains('required').should('be.visible')
  })

  it('Shows validation error for invalid email format', () => {
    cy.contains('Forgot Password').click()

    cy.get('input[type="email"]').type('invalid-email')
    cy.get('button[type="submit"]').click()

    cy.contains('valid email').should('be.visible')
  })

})