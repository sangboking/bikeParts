import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { partsAtom, partsNameAtom, partsWeightAtom } from '../../atoms';

export default function Calculation() {
  const parts = useRecoilValue(partsAtom);
  const partsName = useRecoilValue(partsNameAtom);
  const partsWeight = useRecoilValue(partsWeightAtom);
  const [totalWeight, setTotalWeight] = useState(0);
  
  useEffect(() => {
    setTotalWeight(prev => prev + partsWeight)
  }, [partsWeight])
  
  const handleResetClick = () => {
   setTotalWeight(0);
  };

  return (
    <Head>
      <TotalWeightBox>
        {totalWeight}
      </TotalWeightBox>

      <ResetButton onClick={handleResetClick}>
        Reset
      </ResetButton>
    </Head>
  )
};

const Head = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem;
  padding-top: 5rem;
`;

const TotalWeightBox = styled.div`
  width: 10rem;
  height: 2rem;
  border:1px solid #eaeaea;
  margin-right: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ResetButton = styled.button`
  width: 5rem;
  height: 2rem;
  border-radius: 1rem;
  cursor: pointer;
`;
