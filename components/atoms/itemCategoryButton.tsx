import { Button } from '@mui/material'
import { SelectedItemCategoryContext } from '../../contexts/SelectedItemCategoryContext'
import { useContext } from 'react'
import styles from './itemCategoryButton.module.css'

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
      style={{
        borderColor: 'lightblue',
        borderStyle: 'solid',
        fontSize: '1.2rem',
      }}
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
