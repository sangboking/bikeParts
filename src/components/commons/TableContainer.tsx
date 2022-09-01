import React from 'react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { partsAtom, partsNameAtom, partsWeightAtom } from '../../atoms';
import { IBikePartsData } from '../../data';
import { getKeyByValue } from '../../lib/utils';

type Props = {
  bikeData : IBikePartsData[] 
}

export default function TableContainer({ bikeData } : Props) {
  const setParts = useSetRecoilState(partsAtom);
  const setPartsName = useSetRecoilState(partsNameAtom);
  const setPartsWeight = useSetRecoilState(partsWeightAtom);

  const handleClick = (parts :  IBikePartsData, value: string | number, name : string) => {
    const key = getKeyByValue(parts, value);
    setParts(name);
    setPartsName(key)
    setPartsWeight(Number(value))
  };

  return (
    <TableContainerWrapper>
    {
      bikeData.map((parts : IBikePartsData) => {
        return(
          <ContainerColumn key={parts.name}>        
            <ContainerColumnBox onClick={() => { handleClick(parts, parts.name, parts.name)}}>
              {parts.name}
            </ContainerColumnBox>
            <ContainerColumnBox onClick={() => { handleClick(parts, parts.shifters, parts.name)}}>
              {parts.shifters}
            </ContainerColumnBox>
            <ContainerColumnBox onClick={() => { handleClick(parts, parts.rearD, parts.name)}}>
              {parts.rearD}
            </ContainerColumnBox>
            <ContainerColumnBox onClick={() => { handleClick(parts, parts.frontD, parts.name)}}>
              {parts.frontD}
            </ContainerColumnBox>
            <ContainerColumnBox onClick={() => { handleClick(parts, parts.cranks, parts.name)}}>
              {parts.cranks}
            </ContainerColumnBox>
            <ContainerColumnBox onClick={() => { handleClick(parts, parts.cass, parts.name)}}>
              {parts.cass}
            </ContainerColumnBox>
            <ContainerColumnBox onClick={() => { handleClick(parts, parts.chain, parts.name)}}>
              {parts.chain}
            </ContainerColumnBox>
            <ContainerColumnBox onClick={() => { handleClick(parts, parts.brakes, parts.name)}}>
              {parts.brakes}
            </ContainerColumnBox>
            <ContainerColumnBox onClick={() => { handleClick(parts, parts.total, parts.name)}}>
              {parts.total}
            </ContainerColumnBox>
          </ContainerColumn>
        )
      })
    }
    </TableContainerWrapper>
  )
}

const TableContainerWrapper = styled.section`
  width: 100%;
  height: 19.5rem;
  background-color: #fff;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
`;

const ContainerColumn = styled.div`
 display: flex;
 align-items: center;
 border-bottom: 1px solid #eaeaea;
 :last-child{
  border-bottom: none;
 }
`;

const ContainerColumnBox = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 width: 9rem;
 height: 2.07rem;
 border-right: 1px solid #eaeaea;
 :last-child{
  border-right: none;
 }
 :first-child{
    font-size: .8rem;
  }
`;