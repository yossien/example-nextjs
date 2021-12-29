import type { NextApiRequest, NextApiResponse } from 'next'
import { ItemType } from '../types/itemType'
import { get } from './http'
import { AxiosResponse } from 'axios'

export interface getItemResponse {
  maxPage: number
  page: number
  items: ItemType[]
}

export const getItems = async (
  onError: (r: AxiosResponse) => void
): Promise<getItemResponse> => {
  return get<getItemResponse>('/items')
    .then((r) => {
      return r as getItemResponse
    })
    .catch((e) => {
      onError(e)
      return e
    })
}
