import React from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { brakeWeightAtom, cassWeightAtom, chainWeightAtom, crankWeightAtom, frontDWeightAtom, partsAtom, partsNameAtom, rearDWeightAtom, shifterWeightAtom } from "../../atoms";
import { IBikePartsData } from "../../data";
import { getKeyByValue } from "../../lib/utils";

type Props = {
  bikeData: IBikePartsData[];
};

export default function TableContainer({ bikeData }: Props) {
  const setParts = useSetRecoilState(partsAtom);
  const setPartsName = useSetRecoilState(partsNameAtom);
  const setShifterWeight = useSetRecoilState(shifterWeightAtom);
  const setRearDWeight = useSetRecoilState(rearDWeightAtom);
  const setFrontDWeight = useSetRecoilState(frontDWeightAtom);
  const setCrankWeight = useSetRecoilState(crankWeightAtom);
  const setCassWeight = useSetRecoilState(cassWeightAtom);
  const setChainWeight = useSetRecoilState(chainWeightAtom);
  const setBrakeWeight = useSetRecoilState(brakeWeightAtom);

  const handleClick = (
    parts: IBikePartsData,
    value: string | number,
    name: string
  ) => {
    const key = getKeyByValue(parts, value);
    console.log(key)
    setParts(name);
    setPartsName(key);
    if(key === 'shifters'){
      setShifterWeight(Number(value));
    };

    if(key === 'rearD'){
      setRearDWeight(Number(value));
    };

    if(key === 'frontD'){
      setFrontDWeight(Number(value));
    };

    if(key === 'cranks'){
      setCrankWeight(Number(value));
    };

    if(key === 'cass'){
      setCassWeight(Number(value));
    }

    if(key === 'chain'){
      setChainWeight(Number(value));
    };

    if(key === 'brakes'){
      setBrakeWeight(Number(value));
    };
  };

  return (
    <TableContainerWrapper>
      {bikeData.map((parts: IBikePartsData) => {
        return (
          <ContainerColumn key={parts.name}>
            <ContainerColumnBox>{parts.name}</ContainerColumnBox>
            <ContainerColumnBox>
              {parts.shifters}
              <input
                type="radio"
                name="shifters"
                onClick={() => {
                  handleClick(parts, parts.shifters, parts.name);
                }}
              />
            </ContainerColumnBox>
            <ContainerColumnBox>
              {parts.rearD}
              <input
                type="radio"
                name="rearD"
                onClick={() => {
                  handleClick(parts, parts.rearD, parts.name);
                }}
              />
            </ContainerColumnBox>
            <ContainerColumnBox>
              {parts.frontD}
              <input
                type="radio"
                name="frontD"
                onClick={() => {
                  handleClick(parts, parts.frontD, parts.name);
                }}
              />
            </ContainerColumnBox>
            <ContainerColumnBox>
              {parts.cranks}
              <input
                type="radio"
                name="cranks"
                onClick={() => {
                  handleClick(parts, parts.cranks, parts.name);
                }}
              />
            </ContainerColumnBox>
            <ContainerColumnBox>
              {parts.cass}
              <input
                type="radio"
                name="cass"
                onClick={() => {
                  handleClick(parts, parts.cass, parts.name);
                }}
              />
            </ContainerColumnBox>
            <ContainerColumnBox>
              {parts.chain}
              <input
                type="radio"
                name="chain"
                onClick={() => {
                  handleClick(parts, parts.chain, parts.name);
                }}
              />
            </ContainerColumnBox>
            <ContainerColumnBox>
              {parts.brakes}
              <input
                type="radio"
                name="brakes"
                onClick={() => {
                  handleClick(parts, parts.brakes, parts.name);
                }}
              />
            </ContainerColumnBox>
            <ContainerColumnBox>
              {parts.total}
              {/* <input type='radio' name='total' onClick={() => { handleClick(parts, parts.rearD, parts.name)}}/> */}
            </ContainerColumnBox>
          </ContainerColumn>
        );
      })}
    </TableContainerWrapper>
  );
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
  :last-child {
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
  :last-child {
    border-right: none;
  }
  :first-child {
    font-size: 0.8rem;
  }
`;
