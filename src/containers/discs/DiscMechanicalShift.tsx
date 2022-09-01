import React from 'react';
import styled from 'styled-components';
import TableContainer from '../../components/commons/TableContainer';
import TableHead from '../../components/commons/TableHead';
import { diskMechanicalShift, headerData, IBikePartsData } from '../../data';

export default function DiscMechanicalShift() {
  const discMsParts : IBikePartsData[] = [...diskMechanicalShift];

  const headData = [...headerData];
  headData[0] = "Mechanical Shift(Disc)";

  return (
    <Wrapper>
      <TableHead headData={headData}/>

      <TableContainer bikeData={discMsParts}/>
    </Wrapper>
  )
};

const Wrapper = styled.section`
  width: 81rem;
  height: 31rem;
  background-color: #fff;
  margin: 0 auto;
  margin-bottom: 3rem;
  border-radius: 1rem;
`;
