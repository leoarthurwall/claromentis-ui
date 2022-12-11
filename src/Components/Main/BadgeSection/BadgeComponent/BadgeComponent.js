import React from "react";
import styled from "styled-components";
import { HiDotsVertical } from "react-icons/hi";
import { IoTrophy } from "react-icons/io5";

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
  width: 60px;
`;
const EarnedStamp = styled.div`
  width: auto;
  height: 30px;
  position: absolute;
  left: 10px;
  top: 5px;
  background-color: #f4c15d;
  border-radius: 25px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  padding: 0 10px;
`;
const EarnedText = styled.p`
  font-size: 12px;
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
  font-weight: 500;
`;

const OptionsContainer = styled.div`
  height: 24px;
  width: 24px;
  border-radius: 50%;
  background: #f8f9fa;

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BadgeComponent = ({
  badgeName,
  badgeSrc,
  badgeAlt,
  iconSrc,
  iconAlt,
  value,
}) => {
  return (
    <BadgeContainer>
      <UpperContainer>
        {value ? (
          <EarnedStamp>
            <IoTrophy size={12} />
            <EarnedText>Earned</EarnedText>
          </EarnedStamp>
        ) : null}

        <BadgeLogo src={badgeSrc} alt={badgeAlt}></BadgeLogo>
        <BadgeIcon src={iconSrc} alt={iconAlt}></BadgeIcon>
      </UpperContainer>
      <LowerContainer>
        <BadgeText>{badgeName}</BadgeText>
        <OptionsContainer>
          <HiDotsVertical />
        </OptionsContainer>
      </LowerContainer>
    </BadgeContainer>
  );
};

export default BadgeComponent;
