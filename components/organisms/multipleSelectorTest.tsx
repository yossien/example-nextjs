import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { useEffect, useState } from 'react'
import { ItemAtype, ItemBtype } from '../../src/types/ItemTest'

interface Props {
  itemListA: ItemAtype[]
  itemListB: ItemBtype[]
}

const notSelectItemA: ItemAtype = {
  id: -1,
  name: '選択なし',
  itemBid: -1,
}

const notSelectItemB: ItemBtype = {
  id: -1,
  name: '選択なし',
}

const MultipleSelectorTest = ({ itemListA, itemListB }: Props) => {
  const [itemIdA, setItemIdA] = useState<number>(notSelectItemA.id)
  const [itemIdB, setItemIdB] = useState<number>(notSelectItemB.id)

  const [itemA, setItemA] = useState<ItemAtype>(notSelectItemA)
  const [itemB, setItemB] = useState<ItemBtype>(notSelectItemB)

  const selectA = [notSelectItemA, ...itemListA]
  const selectB = [notSelectItemB, ...itemListB]

  const setItemAbyId = (id: number) => {
    const itemA = itemListA.filter((i) => {
      return i.id === id
    })
    setItemA(itemA.length === 1 ? itemA[0] : notSelectItemA)
  }

  useEffect(() => {
    setItemAbyId(itemIdA)
    if(itemIdA === notSelectItemA.id) {
      // Aが選択なしになった場合、Bの選択を選択なしに変える
      setItemIdB(notSelectItemB.id)
    } else {
      const result = itemListA.filter(a => a.id === itemIdA)
      // itemAが紐づいて持っているitemBのidをitemBに設定する
      setItemIdB(result.length === 1 ? result[0].itemBid : notSelectItemB.id)
    }
  },[itemIdA])

  const setItemBbyId = (id: number) => {
    const itemB = itemListB.filter((i) => {
      return i.id ===id
    })
    setItemB(itemB.length ===1 ? itemB[0] : notSelectItemB)
  }

  useEffect(()=> {
    setItemBbyId(itemIdB)
  }, [itemIdB])

  return (
    <>
      <div>
        {/* A selector */}
        <FormControl sx={{ m: 1, minWidth: '10rem' }}>
          <InputLabel id="test-a">Test A</InputLabel>
          <Select 
            labelId="test-selector-a"
            label="test-a"
            value={itemIdA}
            placeholder="select item A"
            variant="outlined"
            onChange={(e) => {
              setItemIdA(e.target.value as number)
            }}
          >
            {selectA.map((a, index) => (
            <MenuItem key={index} value={a.id}>
              {a.name}
            </MenuItem>
            ))}
          </Select>
        </FormControl>
        {/* B selector */}
        <FormControl sx={{ m: 1, minWidth: '10rem' }}>
          <InputLabel id="test-b">Test B</InputLabel>
          <Select 
            labelId="test-selector-b"
            label="test-b"
            value={itemIdB}
            placeholder="select item B"
            variant="outlined"
            onChange={(e) => {
              setItemIdB(e.target.value as number)
            }}
          >
            {selectB.map((i, index) => (
            <MenuItem key={index} value={i.id}>
              {i.name}
            </MenuItem>
            ))}
          </Select>
        </FormControl>

      </div>
      {/* state display */}
      <div style={{ marginTop: '2rem' }}>
      itemA:{' '}
        <span
          style={{
            color: `${itemIdA !== notSelectItemA.id ? 'green' : 'gray'}`,
          }}
        >
          {itemA?.id} {itemA?.name}
        </span>
      </div>
      <div>
        <span
          style={{
            color: `${itemIdB !== notSelectItemB.id ? 'blue' : 'gray'}`,
          }}
        >
          item : {itemB.id} {itemB.name}
        </span>
      </div>
    </>
  )
}

export default MultipleSelectorTest
