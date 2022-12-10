import React from "react";
import styled from "styled-components";

const BadgeContainer = styled.div`
  width: 100%;
  height: 100%;
  max-height: 250px;
  border: 1px solid rgb(210, 210, 210);
`;

const UpperContainer = styled.div`
  height: 75%;
  width: 100%;
`;
const LowerContainer = styled.div`
  height: 25%;
  width: 100%;
  border-top: 1px solid rgb(210, 210, 210);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  box-sizing: border-box;

`;
const BadgeComponent = ({badgeName}) => {
  return (
    <BadgeContainer>
      <UpperContainer></UpperContainer>
      <LowerContainer>{badgeName}</LowerContainer>
    </BadgeContainer>
  );
};

export default BadgeComponent;
