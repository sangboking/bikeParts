import React, { useEffect } from "react";
import styled from "styled-components";

export default function Home() {
  useEffect(() => {
    document.addEventListener("message", (e: any) => {
      console.log(e.data);
    });

    window.addEventListener("message", (e: any) => {
      console.log(e.data);
    });
  }, []);

  return (
    <Wrapper>
      {/* <Calculation />

      <RimMechanicalShift />
      <RimElectronicShift />
      <DiscMechanicalShift />
      <DiscElectronicShift /> */}
      자전거11111111
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f5f6f8;
  margin: 0 auto;
  overflow-y: scroll;
`;
