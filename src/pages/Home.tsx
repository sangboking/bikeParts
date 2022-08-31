import React from 'react';
import styled from 'styled-components';
import Calculation from '../components/Home/Calculation';
import RimMechanicalShift from '../containers/rims/RimMechanicalShift';

export default function Home() {
  return (
    <Wrapper>
      <Calculation />

      <RimMechanicalShift />
    </Wrapper>
  )
};

const Wrapper = styled.div`
  width:100%;
  height: 100vh;
  background-color: #f5f6f8;
  margin:0 auto;
  overflow-y: scroll;
`;


