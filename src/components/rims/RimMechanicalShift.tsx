import React from 'react';
import styled from 'styled-components';
import { headerData } from '../../data';

export default function MechanicalShift({rimMsParts, setPartsWeight} : any) {
  
  const headData = [...headerData];
  headData[0] = 'Mechanical Shift';

  const handleClick = (value : number) => {
    setPartsWeight(value.toString());
  };

  return (
    <Wrapper>
      <RowContainer>
        {
          headData.map((data, i) => {
            return (
              <RowHead key={i}>{data}</RowHead>
            )
          })
        }

        {
          rimMsParts.map((data : any, i : number) => {
            return(
              data.map((parts : any, i : number) => {
                return (
                  <RowItem key={i} onClick={() => {handleClick(parts)}}>
                    {parts}
                  </RowItem>
                )
              })
            )
          })
        }  
      </RowContainer> 
    </Wrapper>
  )
};

const Wrapper = styled.section`
  width: 80rem;
  height: 32.85rem;
  background-color: yellow;
  margin: 3rem 0 3rem 5rem;
  border-radius: 1rem;
`;

const RowContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(9, 1fr);

`;

const RowHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #eaeaea;
  border-bottom: 1px solid #eaeaea;
  height: 2rem;
  background-color: coral;
  :nth-child(1){
    border-top-left-radius: 1rem;
  }
  :nth-child(9){
    border-right: none;
    border-top-right-radius: 1rem;
  }
`;

const RowItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #eaeaea;
  border-right: 1px solid #eaeaea;
  height: 2rem;
  cursor: pointer;
  :nth-child(136){
    border-bottom: none;
  }
  :nth-child(137){
    border-bottom: none;
  }
  :nth-child(138){
    border-bottom: none;
  }
  :nth-child(139){
    border-bottom: none;
  }
  :nth-child(140){
    border-bottom: none;
  }
  :nth-child(141){
    border-bottom: none;
  }
  :nth-child(142){
    border-bottom: none;
  }
  :nth-child(143){
    border-bottom: none;
  }
  :nth-child(144){
    border-bottom: none;
  }
`;