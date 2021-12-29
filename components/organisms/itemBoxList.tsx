import { ItemType } from '../../src/types/itemType'
import ItemBox from '../molecules/itemBox'
import { SelectedItemCategoryContext } from '../../contexts/SelectedItemCategoryContext'
import { useEffect, useState } from 'react'
import { Grid } from '@mui/material'
import ItemCategorySelector from '../molecules/itemCategorySelector'
import { ItemCategoryType } from '../../src/types/ItemCategoryType'

interface Props {
  itemList: ItemType[]
  itemCategoryList: ItemCategoryType[]
}

const ItemBoxList = ({ itemList, itemCategoryList }: Props) => {
  const [selectedId, setSelectedId] = useState<number | null>(null)

  const [filteredList, setFilteredList] = useState<ItemType[]>()

  useEffect(() => {
    setFilteredList(
      itemList.filter((item) => {
        return selectedId === null || selectedId === item.categoryId
      })
    )
  }, [itemList, selectedId])

  return (
    <>
      <SelectedItemCategoryContext.Provider
        value={{ selectedId, setSelectedId }}
      >
        <ItemCategorySelector itemCategoryList={itemCategoryList} />
        <Grid
          container
          rowSpacing={2}
          columnSpacing={{ xs: 0.5, sm: 1, md: 2 }}
          justifyContent="center"
        >
          {filteredList?.map((item, index) => {
            return (
              <Grid item key={`${index}`} xs={10} sm={6} lg={2}>
                <ItemBox
                  key={`item-${index}`}
                  itemName={item.name}
                  description={item.description}
                  image={item.imagePath}
                  altText={item.name}
                />
              </Grid>
            )
          })}
        </Grid>
      </SelectedItemCategoryContext.Provider>
    </>
  )
}

export default ItemBoxList
