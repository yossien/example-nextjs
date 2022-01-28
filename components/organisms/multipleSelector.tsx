import { ItemCategoryType } from '../../src/types/ItemCategoryType'
import { ItemType } from '../../src/types/itemType'
import { InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { useEffect, useState } from 'react'

interface Props {
  itemCategoryList: ItemCategoryType[]
  itemList: ItemType[]
}

const notSelectCategory: ItemCategoryType = {
  id: -1,
  name: '選択なし',
  orderNo: -1,
}

const notSelectItem: ItemType = {
  id: -1,
  name: '選択なし',
  description: '',
  imagePath: '',
  categoryId: -1,
}

const MultipleSelector = ({ itemCategoryList, itemList }: Props) => {
  const [categoryId, setCategoryId] = useState<number>(notSelectCategory.id)
  const [itemId, setItemId] = useState<number>(notSelectItem.id)

  const [category, setCategory] = useState<ItemCategoryType>(notSelectCategory)
  const [item, setItem] = useState<ItemType>(notSelectItem)

  const selectCategory = [notSelectCategory, ...itemCategoryList]
  const selectItem = [notSelectItem, ...itemList]

  const selectItemByCategoryId = selectItem.filter((i) => {
    return i.categoryId === category?.id || i.id === notSelectItem.id
  })

  const setCategoryById = (id: number) => {
    const category = itemCategoryList.filter((i) => {
      return i.id === id
    })
    setCategory(category.length === 1 ? category[0] : notSelectCategory)
  }

  const setItemById = (id: number) => {
    const item = itemList.filter((i) => {
      return i.id === id
    })
    setItem(item.length === 1 ? item[0] : notSelectItem)
  }

  useEffect(() => {
    setCategoryById(categoryId)
    if (categoryId === notSelectCategory.id || itemId !== categoryId) {
      setItemId(notSelectItem.id)
    }
  }, [categoryId])

  useEffect(() => {
    setItemById(itemId)
  }, [itemId])

  return (
    <>
      <div>
        {/* category selector */}
        <InputLabel id="category-selector-label">category</InputLabel>
        <Select
          labelId="category-selector-label"
          label="category"
          value={categoryId}
          placeholder="select item category"
          style={{
            minWidth: '10rem',
            color: `${categoryId !== notSelectCategory.id ? 'green' : 'gray'}`,
          }}
          variant="outlined"
          onChange={(e) => {
            setCategoryId(e.target.value as number)
          }}
        >
          {selectCategory.map((c, index) => (
            <MenuItem key={index} value={c.id}>
              {c.name}
            </MenuItem>
          ))}
        </Select>
        {/* item selector */}
        <InputLabel id="item-selector-label">item</InputLabel>
        <Select
          labelId="item-selector-label"
          label="item"
          value={itemId}
          placeholder="select item"
          style={{
            minWidth: '10rem',
            color: `${itemId !== notSelectItem.id ? 'blue' : 'gray'}`,
          }}
          variant="outlined"
          onChange={(e) => {
            setItemId(e.target.value as number)
          }}
        >
          {selectItemByCategoryId.map((i, index) => (
            <MenuItem key={index} value={i.id}>
              {i.name}
            </MenuItem>
          ))}
        </Select>
      </div>
      {/* state display */}
      <div style={{ marginTop: '2rem' }}>
        category:{' '}
        <span
          style={{
            color: `${categoryId !== notSelectCategory.id ? 'green' : 'gray'}`,
          }}
        >
          {category?.id} {category?.name}
        </span>
      </div>
      <div>
        <span
          style={{
            color: `${itemId !== notSelectItem.id ? 'blue' : 'gray'}`,
          }}
        >
          item : {item.id} {item.name}
        </span>
      </div>
    </>
  )
}

export default MultipleSelector
