import { createContext } from 'react'

export interface SelectedItemCategoryType {
  selectedId: number | null
  setSelectedId: (id: number | null) => void
}

const initialSelectedItemCategory: SelectedItemCategoryType = {
  selectedId: null,
  setSelectedId: () => {},
}
export const SelectedItemCategoryContext =
  createContext<SelectedItemCategoryType>(initialSelectedItemCategory)
