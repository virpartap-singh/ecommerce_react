import styled from "styled-components";
import {device} from "../../utils/Device"

export const Container = styled.div`
  height: 60px;
  @media ${device.mobileL} { 
   display : none;
  }
`;

export const Wrapper = styled.div`
  padding: 10px 20px;
//   border: red 2px solid;
  display: flex;
  justify-content: space-between;
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Center = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 15px;
`;

export const Language = styled.div`
  font-size: 14px;
  cursor: pointer;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const Input = styled.input`
//   border: none;
`;

export const Logo = styled.h1`
  font-weight: bold;
  cursor: pointer;
`;

export const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
`;