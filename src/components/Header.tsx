import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function Header({partsWeight} : any) {
  const [accumlateWeight, setAccumulateWeight] = useState('');

  useEffect(() => {
    setAccumulateWeight(prev => (Number(prev) + Number(partsWeight)).toString());
  }, [partsWeight])

  return (
    <Head>
      <TotalWeightBox>
        {accumlateWeight}
      </TotalWeightBox>

      <ResetButton>
        Reset
      </ResetButton>
    </Head>
  )
};

const Head = styled.header`
  display: flex;
  margin-left: 5rem;
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
