import React from "react";
import styled from "styled-components";

const SortByContainer = styled.section`
  display: flex;
  height: auto;
  width: 1005;
`;
const Form = styled.form``;
const Label = styled.label``;
const Select = styled.select``
const Option = styled.option``

const SortBy = () => {
  return (
    <SortByContainer>
      <Form>
        <Label for="sort">Sort by</Label>
        <Select id="sort">
          <Option>Alphabetical: A-Z</Option>
          <Option>Alphabetical: Z-A</Option>

        </Select>

      </Form>
    </SortByContainer>
  );
};

export default SortBy;
