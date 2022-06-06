import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useNavigate } from "react-router-dom";
import {device} from "../../utils/Device"


const Container = styled.div`
  height: 60px;
  @media ${device.mobileL} { 
   display : none;
  }
`;

const Wrapper = styled.div`
  padding: 10px 20px;
//   border: red 2px solid;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 15px;
`;

const Language = styled.div`
  font-size: 14px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Input = styled.input`
//   border: none;
`;

const Logo = styled.h1`
  font-weight: bold;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
`;

const Navbar: React.FC = () => {
  let navigate = useNavigate();
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <SearchIcon style={{color:"gray", fontSize:"16px"}}/>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>FRAIZER</Logo>
        </Center>
        <Right>
          <MenuItem onClick={()=>navigate("/register")}>REGISTER</MenuItem>
          <MenuItem onClick={()=>navigate("/login")}>SIGNIN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="secondary">
              <ShoppingCartOutlinedIcon color="action" />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
