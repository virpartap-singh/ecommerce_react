import React from 'react'
import Layout from '../../container/layout/Layout'
import { Title, FilterContainer, Filter, FilterText, Select, Option } from './PLstyles'
import Products from '../../container/products/Products'
import { useLocation } from 'react-router-dom';

const ProductListPage:React.FC=():React.ReactElement=>{
  const location = useLocation();
  console.log(location.pathname.split("/")[2]);
  return (
    <Layout>
    <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products/>
    </Layout>
  )
}

export default ProductListPage