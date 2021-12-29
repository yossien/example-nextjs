import { nl2br } from '../nl2br'
import { render } from '@testing-library/react'

describe('nl2br test', () => {
  it('new line replace test', () => {
    const { container, debug } = render(
      <div id="my-message">{nl2br(`Hello \nWorld`)}</div>
    )

    const parent = container.getElementsByTagName('div')[0]
    // \n replaced <br>
    expect(parent.innerHTML).toBe('Hello <br>World')
  })

  it('new line replace at last test', () => {
    const { container, debug } = render(
      <div id="my-message">{nl2br(`Hello World\n`)}</div>
    )

    const parent = container.getElementsByTagName('div')[0]
    // \n replaced <br>
    expect(parent.innerHTML).toBe('Hello World<br>')
  })

  it('new line replace with multiple test ', () => {
    const { container, debug } = render(
      <div id="my-message">{nl2br(`Hello \nWorld\n`)}</div>
    )

    const parent = container.getElementsByTagName('div')[0]
    // \n replaced <br>
    expect(parent.innerHTML).toBe('Hello <br>World<br>')
  })

  it('not replace test ', () => {
    const { container, debug } = render(
      <div id="my-message">{nl2br(`Hello World`)}</div>
    )

    const parent = container.getElementsByTagName('div')[0]
    // \n replaced <br>
    expect(parent.innerHTML).toBe('Hello World')
  })
})
