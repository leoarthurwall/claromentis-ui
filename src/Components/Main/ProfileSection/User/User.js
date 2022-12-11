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

const User = ({avatar}) => {
  return (
    <Container>
      <UserImage src={avatar}></UserImage>
    </Container>
  );
};

export default User;
