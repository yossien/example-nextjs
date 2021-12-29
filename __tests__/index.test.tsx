import { render, screen } from '@testing-library/react'
import React from 'react'
import Home from '../pages'

describe('index page test', () => {
  it('', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    })

    expect(heading).toBeInTheDocument()
  })
})
