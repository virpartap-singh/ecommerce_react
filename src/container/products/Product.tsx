import React from 'react'
import ShoppingCartCheckoutOutlined from '@mui/icons-material/ShoppingCartCheckoutOutlined';
import SearchOutlined from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlined from '@mui/icons-material/FavoriteBorderOutlined';
import { Container, Circle, Image, Info, Icon } from "./ProductStyle"

const Product:React.FC=({item}:any):React.ReactElement=> {
  return (
    <Container>
    <Circle />
    <Image src={item?.img} />
    <Info>
      <Icon>
        <ShoppingCartCheckoutOutlined />
      </Icon>
      <Icon>
        <SearchOutlined />
      </Icon>
      <Icon>
        <FavoriteBorderOutlined />
      </Icon>
    </Info>
  </Container>
  )
}

export default Product