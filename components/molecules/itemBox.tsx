import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'
import { imagePath } from '../../src/util/imagePath'
import styles from './itemBox.module.css'

interface ItemProps {
  itemName: string
  description: string
  image: string
  altText: string
}

const ItemBox = ({ itemName, description, image, altText }: ItemProps) => {
  return (
    <Card sx={{ maxWidth: 512 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={imagePath(image)}
          alt={altText}
        />
        <CardContent>
          <div className={styles.itemName}>{itemName}</div>
          <Typography variant="body2">{description}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default ItemBox
