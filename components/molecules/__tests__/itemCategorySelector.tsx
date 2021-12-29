import ItemCategorySelector from '../itemCategorySelector'
import { cleanup, render } from '@testing-library/react'
import { ItemCategoryType } from '../../../src/types/ItemCategoryType'

describe('itemCategorySelector test', () => {
  afterEach(cleanup)

  it('sorted item', () => {
    const list: ItemCategoryType[] = [
      {
        id: 1,
        name: '握り',
        orderNo: 2,
      },
      {
        id: 2,
        name: '巻き寿司',
        orderNo: 3,
      },
      {
        id: 100,
        name: '今日のおすすめ',
        orderNo: 1,
      },
    ]
    const { container } = render(
      <ItemCategorySelector itemCategoryList={list} />
    )
    const buttons = container.getElementsByTagName('button')

    expect(buttons.length).toBe(3)
    // sorted items by orderNo
    expect(buttons.item(0)?.textContent).toBe('今日のおすすめ')
    expect(buttons.item(1)?.textContent).toBe('握り')
    expect(buttons.item(2)?.textContent).toBe('巻き寿司')
  })
})
