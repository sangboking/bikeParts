import React from "react";
import styled from "styled-components";

type Props = {
  headData: string[];
};

export default function TableHead({ headData }: Props) {
  return (
    <TableHeadWrapper>
      {headData.map((data, i) => {
        return <HeadTitleBox key={i}>{data}</HeadTitleBox>;
      })}
    </TableHeadWrapper>
  );
}

const TableHeadWrapper = styled.header`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  height: 3rem;
`;

const HeadTitleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #eaeaea;
  border-bottom: 1px solid #eaeaea;
  font-size: 0.8rem;
`;
