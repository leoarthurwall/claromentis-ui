import React from "react";
import styled from "styled-components";
import BadgeSection from "./BadgeSection/BadgeSection";
import ProfileSection from "./ProfileSection/ProfileSection";

const MainContainer = styled.main`
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  border: 1px solid red;
  box-sizing: border-box;
`;

const Main = () => {
  return (
    <MainContainer>
      <BadgeSection />
      <ProfileSection />
    </MainContainer>
  );
};

export default Main;
