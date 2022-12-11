import React from "react";
import styled from "styled-components";
import { HiDotsVertical } from "react-icons/hi";

const SelectContainer = styled.div`
  height: 24px;
  width: 24px;
  border-radius: 50%;
  background: #f8f9fa;

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  &:hover {
    background: #e0e1e2;
  }
`;

const BadgeDropdown = () => {
  return (
    <SelectContainer>
      <HiDotsVertical />
    </SelectContainer>
  );
};

export default BadgeDropdown;
