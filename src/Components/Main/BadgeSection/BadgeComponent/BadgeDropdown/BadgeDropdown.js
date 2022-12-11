import { useState } from "react";
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

const OptionsContainer = styled.div`
  background: #f8f9fa;
  height: 50px;
  width: 50px;
  position: absolute;
  top: 24px;
  left: 0px;
`;
const BadgeDropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <>
      <SelectContainer onClick={handleDropdownClick}>
        <HiDotsVertical />
      {isDropdownOpen ? <OptionsContainer></OptionsContainer> : null}
      </SelectContainer>
    </>
  );
};

export default BadgeDropdown;
