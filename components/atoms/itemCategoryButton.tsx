import { Button } from '@mui/material'
import { SelectedItemCategoryContext } from '../../contexts/SelectedItemCategoryContext'
import { useContext } from 'react'
import styles from './itemCategoryButton.module.scss'
const buttonStyles = styles.button

interface Props {
  id: number
  itemCategoryName: string
  isSelected: boolean
}

const ItemCategoryButton = ({ id, itemCategoryName, isSelected }: Props) => {
  const { setSelectedId } = useContext(SelectedItemCategoryContext)
  return (
    <Button
      className={styles.button}
      variant={isSelected ? 'contained' : 'outlined'}
      onClick={() => {
        setSelectedId(isSelected ? null : id)
      }}
    >
      {itemCategoryName}
    </Button>
  )
}

export default ItemCategoryButton
