import React from 'react'
import { useNavigate } from "react-router-dom";
import { Container,Image, Info, Title, Button } from "./CategoryItemStyle"

const CategoryItem:React.FC=({item}:any):React.ReactElement=> {
  let navigate = useNavigate();
  console.log(item,"itemsss")
  return (
    <Container>
      <Image src={item?.img} />
      <Info>
        <Title>{item?.title}</Title>
        <Button onClick={()=>{navigate(`/products/${item?.cat}`)}}>SHOP NOW</Button>
      </Info>
    </Container>
  )
}

export default CategoryItem