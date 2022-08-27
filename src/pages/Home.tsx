import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import RimMechanicalShift from '../components/rims/RimMechanicalShift';
import { rimMechanicalShiftData } from '../data';

export default function Home() {
  const rimMsParts = rimMechanicalShiftData;
  const [partsWeight, setPartsWeight] = useState('');
 
  return (
    <Wrapper>
      <Header partsWeight={partsWeight}/>

      <RimMechanicalShift rimMsParts={rimMsParts} setPartsWeight={setPartsWeight}/>
    </Wrapper>
  )
};

const Wrapper = styled.div`
  width:100%;
  height: 100vh;
  margin:0 auto;
  background-color: pink;
  overflow-y: scroll;
`;


