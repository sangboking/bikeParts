import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { partsAtom, partsNameAtom, brakeWeightAtom, cassWeightAtom, chainWeightAtom, crankWeightAtom, frontDWeightAtom, rearDWeightAtom, shifterWeightAtom} from '../../atoms';

export default function Calculation() {
  const shifterWeight = useRecoilValue(shifterWeightAtom);
  const rearDWeight = useRecoilValue(rearDWeightAtom);
  const frontDWeight = useRecoilValue(frontDWeightAtom);
  const crankWeight = useRecoilValue(crankWeightAtom);
  const cassWeight = useRecoilValue(cassWeightAtom);
  const chainWeight = useRecoilValue(chainWeightAtom);
  const brakeWeight = useRecoilValue(brakeWeightAtom);
  const [totalWeight, setTotalWeight] = useState(0);
  
  const handleCalculationClick = () => {
    return setTotalWeight(shifterWeight+rearDWeight+frontDWeight+crankWeight+cassWeight+chainWeight+brakeWeight);
  };

  const handleResetClick = () => {
   window.location.reload();
  };

  return (
    <Head>
      <TotalWeightBox>
        {totalWeight}
      </TotalWeightBox>

      <CalculationButton onClick={handleCalculationClick}>
        계산
      </CalculationButton>

      <ResetButton onClick={handleResetClick}>
        리셋
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

const CalculationButton = styled.button`
  width: 5rem;
  height: 2rem;
  border-radius: 1rem;
  cursor: pointer;
  margin-right: 2rem;
`;
