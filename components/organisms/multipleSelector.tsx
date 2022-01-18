import { ItemCategoryType } from '../../src/types/ItemCategoryType'
import { ItemType } from '../../src/types/itemType'
import { MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { useState } from 'react'

interface Props {
  itemCategoryList: ItemCategoryType[]
  itemList: ItemType[]
}

const MultipleSelector = ({ itemCategoryList, itemList }: Props) => {
  const [category, setCategory] = useState<ItemCategoryType | null>(null)
  const [item, setItem] = useState<ItemType | null>(null)

  const selectItemByCategoryId = itemList.filter((i) => {
    return i.categoryId === category?.id
  })

  const setCategoryById = (id: string) => {
    const category = itemCategoryList.filter((i) => {
      return i.id === parseInt(id)
    })
    setCategory(category.length === 1 ? category[0] : null)
  }

  const setItemById = (id: string) => {
    const item = itemList.filter((i) => {
      return i.id === parseInt(id)
    })
    setItem(item.length === 1 ? item[0] : null)
  }

  return (
    <>
      <div>
        {/* category selector */}
        <Select
          label="category"
          value={category?.id}
          placeholder="select item category"
          style={{ minWidth: '10rem' }}
          onChange={(e) => {
            setCategoryById(e.target.value as string)
          }}
        >
          <MenuItem key={-1} value="">
            &nbsp;
          </MenuItem>
          {itemCategoryList.map((c, index) => (
            <MenuItem key={index} value={c.id}>
              {c.name}
            </MenuItem>
          ))}
        </Select>
        {/* item selector */}
        <Select
          label="item"
          value={item?.id}
          placeholder="select item"
          style={{ minWidth: '10rem' }}
          onChange={(e) => {
            setItemById(e.target.value as string)
          }}
        >
          <MenuItem key={-1} value="">
            &nbsp;
          </MenuItem>
          {selectItemByCategoryId.map((i, index) => (
            <MenuItem key={index} value={i.id}>
              {i.name}
            </MenuItem>
          ))}
        </Select>
      </div>
      {/* state display */}
      <div>
        category: {category?.id} {category?.name}
      </div>
      <div>
        item : {item?.id} {item?.name}
      </div>
    </>
  )
}

export default MultipleSelector
