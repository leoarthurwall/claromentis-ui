import React from "react";
import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  height: auto;
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
`
const Name = styled.h4``

const Role = styled.h4``
const User = ({avatar, userName, userRole}) => {
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
