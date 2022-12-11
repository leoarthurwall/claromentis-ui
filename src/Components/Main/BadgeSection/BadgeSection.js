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
        <BadgeComponent badgeName={"Sales Superstar"} badgeSrc={"assets/badge-bg/badge-1.svg"} badgeAlt={"red badge icon"}/>
        <BadgeComponent badgeName={"Customer Champion"} badgeSrc={"assets/badge-bg/badge-2.svg"} badgeAlt={"yellow badge icon"}/>
        <BadgeComponent badgeName={"Creative Thinker"} badgeSrc={"assets/badge-bg/badge-3.svg"} badgeAlt={"blue badge icon"}/>
        <BadgeComponent badgeName={"Content Crafter"} badgeSrc={"assets/badge-bg/badge-4.svg"} badgeAlt={"light blue badge icon"}/>
        <BadgeComponent badgeName={"Tech Trailblazer"} badgeSrc={"assets/badge-bg/badge-5.svg"} badgeAlt={"green badge icon"}/>
    </BadgeContainer>
  );
};

export default BadgeSection;
