import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  height: 50px;
  width: 100%;
  border-bottom: 1px solid rgb(210, 210, 210);
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderText = styled.div`
  font-size: 16px;
  font-weight: 500;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderText>Badges</HeaderText>
    </HeaderContainer>
  );
};

export default Header;
