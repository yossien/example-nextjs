import { ItemType } from '../../src/types/itemType'
import { useEffect, useState } from 'react'
import {
  Checkbox,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material'

interface Props {
  label: string
  itemList: ItemType[]
}

const notSelectedItem: ItemType = {
  id: -1,
  name: '選択なし',
  categoryId: -1,
  description: '',
  imagePath: '',
}

const ItemSelector = ({ label, itemList }: Props) => {
  const [itemId, setItemId] = useState<number>(-1)
  const [item, setItem] = useState<ItemType>(notSelectedItem)
  const [wasabi, setWasabi] = useState<boolean>(false)

  const selectItem = [notSelectedItem, ...itemList]

  const getItemById = () => {
    const f = itemList.filter((item) => {
      return itemId == item.id
    })
    return f.length === 1 ? f[0] : notSelectedItem
  }

  useEffect(() => {
    setItem(getItemById)
  }, [itemId])

  return (
    <>
      <div style={{ margin: '3rem' }}>
        選択したメニュー :
        <span
          style={{
            margin: '0 3rem',
            color: `${itemId !== notSelectedItem.id ? 'green' : 'gray'}`,
          }}
        >
          {`${item.name}  `}
        </span>
        <span style={{ color: `${wasabi ? 'red' : 'gray'}` }}>{`サビ ${
          wasabi ? 'あり' : 'なし'
        }`}</span>
      </div>
      <InputLabel id="item-selector-label"> {`item ${label}`}</InputLabel>
      <Select
        labelId="item-selector-label"
        id="item-selector"
        label={`item ${label}`}
        onChange={(e) => setItemId(e.target.value as number)}
        variant="outlined"
        value={itemId}
        style={{
          width: '18rem',
          marginRight: '2rem',
          color: `${itemId !== notSelectedItem.id ? 'green' : 'gray'}`,
        }}
      >
        {selectItem.map((_item) => (
          <MenuItem key={_item.id} value={_item.id}>
            {_item.name}
          </MenuItem>
        ))}
      </Select>
      <FormControlLabel
        control={
          <Checkbox
            checked={wasabi}
            onChange={(e) => setWasabi(e.target.checked)}
          />
        }
        label="ワサビ"
      />
    </>
  )
}
export default ItemSelector
