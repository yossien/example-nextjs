import { get } from './http'
import { ItemCategoryType } from '../types/ItemCategoryType'
import { AxiosResponse } from 'axios'

type getItemCategoriesResponse = ItemCategoryType[]

export const getItemCategories = async (
  onError: (r: AxiosResponse) => void
) => {
  return get<getItemCategoriesResponse>('/itemCategories')
    .then((r) => {
      return r as getItemCategoriesResponse
    })
    .catch((e) => {
      onError(e)
      return e
    })
}
