import React from 'react'
import styled from 'styled-components';
import TableContainer from '../../components/commons/TableContainer';
import TableHead from '../../components/commons/TableHead';
import { discElectronicShift, headerData, IBikePartsData } from '../../data'

export default function DiscElectronicShift() {
  const discEsParts : IBikePartsData[] = [...discElectronicShift];

  const headData = [...headerData];
  headData[0] = "Electronic Shift(Disc)";

  return (
    <Wrapper>
      <TableHead headData={headData}/>

      <TableContainer bikeData={discEsParts}/>
    </Wrapper>
  )
};

const Wrapper = styled.section`
  width: 81rem;
  height: 26.5rem;
  background-color: #fff;
  margin: 3rem 0 3rem 5rem;
  border-radius: 1rem;
`;
