import React from "react";
import styled from "styled-components";
import BadgeComponent from "./BadgeComponent/BadgeComponent";

const BadgeContainer = styled.section`
  height: 100%;
  width: 75%;
  padding-right: 10px;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1vw;
`;


const BadgeSection = () => {
  return (
    <BadgeContainer>
        <BadgeComponent />
        <BadgeComponent />
        <BadgeComponent />
        <BadgeComponent />
        <BadgeComponent />
    </BadgeContainer>
  );
};

export default BadgeSection;
