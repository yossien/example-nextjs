// @ts-ignore
describe('topMenu test', () => {
  beforeEach(() => {
    cy.visit('/itemMenu')
  })

  it('initial display test', () => {
    cy.get('main button').should('contain.text', '握り')
    cy.get('main button').should('contain.text', '巻き寿司')
    cy.get('main button').should('contain.text', '一品料理')
    cy.get('main button').should('contain.text', 'ドリンク')
    cy.get('main .MuiGrid-item').should(($item) => {
      expect($item).to.have.length(2)
      expect($item[0]).contain.text('マグロ赤身握り')
      expect($item[0].getElementsByTagName('img')[0]).attr(
        'src',
        '/images/22081274_s.jpg'
      )
      /*
      expect($item[0].children[0].getElementsByTagName('img')).to.have.attr(
        'src',
        '/images/22081274_s.jpg'
      )
       */
      expect($item[1]).contain.text('かっぱ巻き')
      expect($item[1].getElementsByTagName('img')[0]).to.have.attr(
        'src',
        '/images/4910466_s.jpg'
      )
    })
  })

  it('select category item 握り', () => {
    cy.get('main button').contains('握り').click()
    cy.get('main .MuiGrid-item div').should('contain.text', 'マグロ赤身握り')
    cy.get('main .MuiGrid-item div').should('not.contain.text', 'かっぱ寿き')
  })

  it('select category item 巻き寿司', () => {
    cy.get('main button').contains('巻き寿司').click()
    cy.get('main .MuiGrid-item div').should(
      'not.contain.text',
      'マグロ赤身握り'
    )
    cy.get('main .MuiGrid-item div').should('contain.text', 'かっぱ巻き')
  })
})
