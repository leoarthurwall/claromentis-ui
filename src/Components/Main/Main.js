import React from "react";
import styled from "styled-components";

const MainContainer = styled.main`
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  border: 1px solid red;
  box-sizing: border-box;

`;
const BadgesSection = styled.section`
  height: 100%;
  width: 75%;
  background-color: grey;
`;

const ProfileSection = styled.section`
  height: 100%;
  width: 25%;
  background-color: blue;
`;

const Main = () => {
  return (
    <MainContainer>
      <BadgesSection>badge</BadgesSection>
      <ProfileSection>profile</ProfileSection>
    </MainContainer>
  );
};

export default Main;
