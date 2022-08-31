import React from 'react';
import styled from 'styled-components';
import { headerData, IBikePartsData, rimMechanicalShiftData,  } from '../../data';
import TableContainer from '../../components/commons/TableContainer';
import TableHead from '../../components/commons/TableHead';


export default function MechanicalShift() {
  const rimMsParts :IBikePartsData[] = [...rimMechanicalShiftData];
  
  const headData = [...headerData];
  headData[0] = 'Mechanical Shift';

  return (
    <Wrapper>
      <TableHead headData={headData}/>

      <TableContainer rimMsParts={rimMsParts}/>
    </Wrapper>
  )
};

const Wrapper = styled.section`
  width: 81rem;
  height: 35rem;
  background-color: #fff;
  margin: 3rem 0 3rem 5rem;
  border-radius: 1rem;
`;

