import React from "react";
import styled from "styled-components";

const BadgeContainer = styled.div`
  width: 100%;
  height: 100%;
  max-height: 250px;
  border: 1px solid rgb(210, 210, 210)
`;

const UpperContainer = styled.div`
  height: 75%;
  width: 100%;
`;
const LowerContainer = styled.div`
  height: 75%;
  width: 100%;
  border-top: 1px solid rgb(210, 210, 210);

`;
const BadgeComponent = () => {
  return (
    <BadgeContainer>
      <UpperContainer></UpperContainer>
      <LowerContainer></LowerContainer>
    </BadgeContainer>
  );
};

export default BadgeComponent;
