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

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;

  position: relative;
`;

const BadgeLogo = styled.img``;

const BadgeIcon = styled.img`
  position: absolute;
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
const BadgeText = styled.h3`
  font-size: 16px;
  font-weight: 600;
`;
const BadgeComponent = ({
  badgeName,
  badgeSrc,
  badgeAlt,
  iconSrc,
  iconAlt,
}) => {
  return (
    <BadgeContainer>
      <UpperContainer>
        <BadgeLogo src={badgeSrc} alt={badgeAlt}></BadgeLogo>
        <BadgeIcon src={iconSrc} alt={iconAlt}></BadgeIcon>
      </UpperContainer>
      <LowerContainer>
        <BadgeText>{badgeName}</BadgeText>
      </LowerContainer>
    </BadgeContainer>
  );
};

export default BadgeComponent;
