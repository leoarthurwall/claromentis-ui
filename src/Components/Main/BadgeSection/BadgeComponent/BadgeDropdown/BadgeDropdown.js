import { useState } from "react";
import styled from "styled-components";
import { HiDotsVertical } from "react-icons/hi";

const SelectContainer = styled.div`
  height: 24px;
  width: 24px;
  border-radius: 50%;

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ isDropdownOpen }) =>
    isDropdownOpen ? "#e0e1e2" : "#f8f9fa"};
  box-shadow: ${({ isDropdownOpen }) =>
    isDropdownOpen ? "0 0 3px 3px  #EBECED" : "null"};
  transition: 0.2s;
  &:hover {
    background-color: #e0e1e2;
  }
  cursor: pointer;
`;

const OptionsContainer = styled.div`
  background: #fff;
  height: auto;
  width: auto;
  position: absolute;
  top: 27px;
  left: 0px;
  border: 1px solid rgb(210, 210, 210);
  border-radius: 5px;
  z-index: 10;
`;

const UL = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 10px 0;
`;
const LI = styled.li`
  padding: 8px 90px 8px 10px;

  &:hover {
    background: #e0e1e2;
  }
`;

const OptionsOverlay = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 5;
  visibility: ${({ isDropdownOpen }) => !isDropdownOpen && "hidden"};
`;

const BadgeDropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <>
      <SelectContainer
        onClick={handleDropdownClick}
        isDropdownOpen={isDropdownOpen}
      >
        <HiDotsVertical />
        {isDropdownOpen ? (
          <OptionsContainer>
            <UL>
              <LI>Edit</LI>
              <LI>Delete</LI>
            </UL>
          </OptionsContainer>
        ) : null}
      </SelectContainer>
      <OptionsOverlay
        isDropdownOpen={isDropdownOpen}
        onClick={handleDropdownClick}
      />
    </>
  );
};

export default BadgeDropdown;
