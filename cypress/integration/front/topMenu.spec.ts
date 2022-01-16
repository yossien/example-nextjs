describe('topMenu test', () => {
  it('assert item category', () => {
    cy.visit('http://localhost:3000/itemMenu')
    cy.get('main button').first().should('contain.text', '握り')
    cy.get('main button:nth-child(2)').should('contain.text', '巻き寿司')
    cy.get('main button:nth-child(3)').should('contain.text', '一品料理')
    cy.get('main button:nth-child(4)').should('contain.text', 'ドリンク')
  })
})
