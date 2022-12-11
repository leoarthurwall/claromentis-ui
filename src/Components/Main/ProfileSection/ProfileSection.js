import React from "react";
import styled from "styled-components";
import User from "./User/User";

const ProfileContainer = styled.section`
  height: auto;
  width: 25%;
  padding-left: 10px;
  border-left: 1px solid rgb(210, 210, 210);
`;

const ProfileSection = () => {
  return (
    <ProfileContainer>
      <User
        avatar={"assets/profile.png"}
        userName={"Colin Willard"}
        userRole={"UX Engineer"}
      />
    </ProfileContainer>
  );
};

export default ProfileSection;
