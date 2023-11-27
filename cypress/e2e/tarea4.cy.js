
describe('template spec', () => {
  it('It should return an error when the password is wrong', () => {
    cy.viewport('macbook-13');
    cy.visit('https://www.santaisabel.cl')
    cy.get('.login-register-button-v2').click()
    cy.get('.input-default[name=email]').type('d.acuna05@ufromail.cl')
    cy.get('.input-default[name=Clave]').type('12345678')
    cy.get('.btn-span-enter').contains('Ingresa').click()
    cy.get('.error-password').should('contain','Mail o clave incorrecta')
  })

  it('It should redirect to main page correctly', () => {
    cy.viewport('macbook-13');
    cy.visit('https://www.santaisabel.cl')
    cy.get('.login-register-button-v2').click()
    cy.get('.input-default[name=email]').type('d.acuna05@ufromail.cl')
    cy.get('.input-default[name=Clave]').type('Detergente2')
    cy.get('.btn-span-enter').contains('Ingresa').click()
    cy.get('.new-header-v2-main-name-v2').should('contain','Hola, Daira')
  })

  it('It should redirect to lacteos page correctly', () => {
    cy.viewport('macbook-13');
    cy.visit('https://www.santaisabel.cl')
    cy.get('.categories-dropdown-button').click()
    cy.get('a[href="/lacteos"]').click()
    cy.get('.title-with-bar-text').should('contain','Lácteos')
  })

})

//d.acuna05@ufromail.cl
// Detergente2