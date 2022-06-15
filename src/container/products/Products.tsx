import React from 'react'
import styled from "styled-components";
import { popularProducts } from "../../assets/Data/data";
import Product from "./Product";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products:React.FC = ({
  props,
  cat,
  filter,
  sort
}:any):React.ReactElement => {

  console.log(cat,filter,sort)
  return (
    <Container>
      {
      popularProducts.map((item:any) => (
        <Product {...props} item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;