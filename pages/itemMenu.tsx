import { NextPage } from 'next'
import PageBaseTemplate from '../components/template/pageBaseTemplate'
import { ItemType } from '../src/types/itemType'
import { ItemCategoryType } from '../src/types/ItemCategoryType'
import { PropsWithChildren } from 'react'
import { Container } from '@mui/material'
import ItemBoxList from '../components/organisms/itemBoxList'
import { getItems } from '../src/api/items'
import { getItemCategories } from '../src/api/itemCategories'

interface Props {
  itemList: ItemType[]
  itemCategoryList: ItemCategoryType[]
}

const ItemMenu = (props: PropsWithChildren<Props>) => {
  const { itemCategoryList, itemList } = props
  return (
    <PageBaseTemplate>
      <Container style={{ marginTop: 80 }}>
        <ItemBoxList itemList={itemList} itemCategoryList={itemCategoryList} />
      </Container>
    </PageBaseTemplate>
  )
}

const onError = (e: any) => {
  alert('error')
  console.error(e)
}

export const getStaticProps = async () => {
  const { items } = await getItems(onError)
  const itemCategoryList = await getItemCategories(onError)
  return {
    props: {
      itemList: items,
      itemCategoryList,
    },
  }
}

export default ItemMenu
