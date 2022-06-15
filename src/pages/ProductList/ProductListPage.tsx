import React ,{useState} from 'react'
import Layout from '../../container/layout/Layout'
import { Title, FilterContainer, Filter, FilterText, Select, Option } from './PLstyles'
import Products from '../../container/products/Products'
import { useLocation } from 'react-router-dom';

const ProductListPage:React.FC=(props:any):React.ReactElement=>{
  const location = useLocation();
  const [filter, setFilter] = useState({});
  const [sort, setSort] =useState();
  console.log(sort,"filter")
  console.log(location.pathname.split("/")[2]);

  const cat = location.pathname.split("/")[2];

  const handleFilters = (e:any) => {
    // debugger
    const value = e.target.value;
    const name =e.target.name;
    setFilter({
      ...filter,
      [name] : value
    })
    console.log(value,"value")
  }

  return (
    <Layout>
    <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option >
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option>
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
          <Select onChange ={(e:any)=>setSort(e.target.value)}>
            <Option value="Newest">Newest</Option>
            <Option value="Asc">Price (asc)</Option>
            <Option value="Desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products {...props} cat={cat} filter={filter} sort={sort}/>
    </Layout>
  ) 
}

export default ProductListPage