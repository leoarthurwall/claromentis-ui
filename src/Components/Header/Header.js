import React from "react";
import styled from "styled-components";
import { HiOutlineCog6Tooth, HiOutlinePlusCircle } from "react-icons/hi2";

const HeaderContainer = styled.header`
  height: 50px;
  width: 100%;
  border-bottom: 1px solid rgb(210, 210, 210);
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  box-sizing: border-box;
`;

const HeaderText = styled.div`
  font-size: 16px;
  font-weight: 500;
`;
const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderText>Badges</HeaderText>
      <IconContainer>
        <HiOutlinePlusCircle size={24} style={{ cursor: "pointer" }} />
        <HiOutlineCog6Tooth size={24} style={{ cursor: "pointer" }} />
      </IconContainer>
    </HeaderContainer>
  );
};

export default Header;
