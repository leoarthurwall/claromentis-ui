import React from "react";
import styled from "styled-components";
import { HiDotsVertical } from "react-icons/hi";

const SelectContainer = styled.select`
  height: 24px;
  width: 24px;
  border-radius: 50%;
  background: #f8f9fa;

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover{
    background: #E0E1E2;
  }
`;
const Option = styled.option``;

const BadgeDropdown = () => {
  return (
    <SelectContainer>
      <HiDotsVertical />
      <Option>Edit</Option>
      <Option>Delete</Option>
    </SelectContainer>
  );
};

export default BadgeDropdown;
