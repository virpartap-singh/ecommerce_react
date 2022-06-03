import React from "react";
import styled from "styled-components";
import { categories } from "../../assets/Data/data";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;


const Categories: React.FC= (props:any): React.ReactElement => {
  return (
    <Container>
    {categories.map((item:any) => (
      <CategoryItem {...props} item={item} key={item.id} />
    ))}
  </Container>
  );
};

export default Categories;
