import React from "react";
import styled from "styled-components";

const SortByContainer = styled.section`
  display: flex;
  height: auto;
  width: 100%;
  margin-top: 15px;
`;
const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Label = styled.label`
font-size: 14px;
color: #222529;`;
const Select = styled.select`
  padding: 5px;
  border:  1px solid rgb(210, 210, 210);
  color: #4A5056;
`;
const Option = styled.option``;

const SortBy = () => {
  return (
    <SortByContainer>
      <Form>
        <Label for="sort">Sort by</Label>
        <Select id="sort" name="staff">
          <Option value="Alphabetical: A-Z">Alphabetical: A-Z</Option>
          <Option value="Alphabetical: Z-A">Alphabetical: Z-A</Option>
        </Select>
      </Form>
    </SortByContainer>
  );
};

export default SortBy;
