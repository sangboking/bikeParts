import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import RimMechanicalShift from '../components/rims/RimMechanicalShift';
import { rimMechanicalShiftData } from '../data';

export interface IPartsData {
  name : string,
  shifters:number,
  readD:number,
  frontD:number,
  cranks:number,
  cass:number,
  chain:number,
  brakes:number,
}

export default function Home() {
  const [rimMsParts, setRimMsParts] = useState<IPartsData[]>(rimMechanicalShiftData);
 
  return (
    <Wrapper>
      <Header />

      <RimMechanicalShift rimMsParts={rimMsParts} setRimMsParts={setRimMsParts}/>
    </Wrapper>
  )
};

const Wrapper = styled.div`
  width:100%;
  height: 100vh;
  margin:0 auto;
  background-color: pink;
`;


