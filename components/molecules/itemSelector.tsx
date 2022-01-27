import { ItemType } from '../../src/types/itemType'
import { useState } from 'react'
import { Checkbox, FormControlLabel, MenuItem, Select } from '@mui/material'

interface Props {
  label: string
  itemList: ItemType[]
}
const ItemSelector = ({ label, itemList }: Props) => {
  const [item, setItem] = useState<ItemType | undefined>(undefined)
  const [wasabi, setWasabi] = useState<boolean>(false)

  const setItemById = (id: string) => {
    const f = itemList.filter((i) => {
      return !isNaN(parseInt(id)) && i.id === parseInt(id)
    })
    const _item = f.length === 1 ? f[0] : undefined
    setItem(_item)
  }

  return (
    <>
      <div style={{ margin: '3rem' }}>
        選択したメニュー :
        <span style={{ margin: '0 3rem', color: 'green' }}>
          {`${item ? item.name : '選択なし'}`}{' '}
        </span>
        <span style={{ color: `${wasabi ? 'red' : 'gray'}` }}>{`サビ ${
          wasabi ? 'あり' : 'なし'
        }`}</span>
      </div>
      <Select
        label={`item ${label}`}
        onChange={(e) => setItemById(e.target.value as string)}
        variant={'outlined'}
        style={{ minWidth: '10rem', marginRight: '2rem' }}
      >
        <MenuItem key="-1" value="" />
        {itemList.map((item, i) => (
          <MenuItem key={i} value={item.id}>
            {item.name}
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
