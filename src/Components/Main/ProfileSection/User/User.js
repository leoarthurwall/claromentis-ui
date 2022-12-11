import React from "react";
import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  gap: 5px;
`;
const UserImage = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
`;

const TextContainer = styled.div`
  display: flex;
  justified-content: center;
  flex-direction: column;
  gap: 7px;
`;
const Name = styled.h4`
  margin: 0;
  font-weight: 400;
  font-size: 14px;
  color: #565e6c;
`;

const Role = styled.h4`
  margin: 0;
  font-weight: 300;
  font-size: 12px;
  color: #6e757c;
`;
const User = ({ avatar, userName, userRole }) => {
  return (
    <Container>
      <UserImage src={avatar}></UserImage>
      <TextContainer>
        <Name>{userName}</Name>
        <Role>{userRole}</Role>
      </TextContainer>
    </Container>
  );
};

export default User;
