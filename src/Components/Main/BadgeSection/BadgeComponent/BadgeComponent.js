import React from 'react'
import styled from 'styled-components'

const BadgeContainer = styled.div`
width: 100%;
height: 100%;
max-height: 250px;
border: 1px solid red;

`
const BadgeComponent = () => {
  return (
    <BadgeContainer>Badge</BadgeContainer>
  )
}

export default BadgeComponent