import React from "react";
import styled from "styled-components";
import BadgeSection from "./BadgeSection/BadgeSection";
import ProfileSection from "./ProfileSection/ProfileSection";

const MainContainer = styled.main`
  width: 100%;
  height: 100%;
  padding: 15px;
  display: flex;
  box-sizing: border-box;

  @media (max-width: 1000px) {
    flex-direction: column-reverse;
    gap: 50px;
    padding: 10px;

  }
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
