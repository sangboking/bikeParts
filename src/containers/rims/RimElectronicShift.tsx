import React from 'react';
import styled from 'styled-components';
import TableContainer from '../../components/commons/TableContainer';
import TableHead from '../../components/commons/TableHead';
import { headerData, IBikePartsData, rimElectronicShiftData } from '../../data';

export default function ElectronicShift() {
  const rimEsParts : IBikePartsData[] = [...rimElectronicShiftData];

  const headData = [...headerData];
  headData[0] = "Electronic Shift(Rim)";

  return (
    <Wrapper>
      <TableHead headData={headData}/>

      <TableContainer bikeData={rimEsParts}/>
    </Wrapper>
  )
};

const Wrapper = styled.section`
  width: 81rem;
  height: 24.4rem;
  background-color: #fff;
  margin: 0 auto;
  margin-bottom: 3rem;
  border-radius: 1rem;
`;
