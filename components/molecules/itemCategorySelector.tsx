import ItemCategoryButton from '../atoms/itemCategoryButton'
import { ItemCategoryType } from '../../src/types/ItemCategoryType'
import { SelectedItemCategoryContext } from '../../contexts/SelectedItemCategoryContext'
import { useContext, useState } from 'react'

interface Props {
  itemCategoryList: ItemCategoryType[]
}
const ItemCategorySelector = ({ itemCategoryList }: Props) => {
  const { selectedId, setSelectedId } = useContext(SelectedItemCategoryContext)
  const sorted = itemCategoryList.sort((a, b) => {
    return a.orderNo - b.orderNo
  })

  return (
    <div>
      <SelectedItemCategoryContext.Provider
        value={{ selectedId, setSelectedId }}
      >
        {sorted.map((itemCategory, index) => (
          <ItemCategoryButton
            key={`item-category-key-${index}`}
            id={itemCategory.id}
            itemCategoryName={itemCategory.name}
            isSelected={selectedId === itemCategory.id}
          />
        ))}
      </SelectedItemCategoryContext.Provider>
    </div>
  )
}

export default ItemCategorySelector
