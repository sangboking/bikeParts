import React from 'react';
import styled from 'styled-components';

export default function Header() {
  return (
    <Head>
      <TotalWeightBox>

      </TotalWeightBox>

      <ResetButton>
        Reset
      </ResetButton>
    </Head>
  )
};

const Head = styled.header`
  display: flex;
  margin-left: 3rem;
  padding-top: 3rem;
`;

const TotalWeightBox = styled.div`
  width: 10rem;
  height: 2rem;
  border:1px solid #eaeaea;
  margin-right: 1.5rem;
`;

const ResetButton = styled.button`
  width: 5rem;
  height: 2rem;
  border-radius: 1rem;
  cursor: pointer;
`;
