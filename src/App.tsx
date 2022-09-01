import React from 'react';
import { RecoilRoot } from 'recoil';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import Router from './router';

function App() {
  return (
    <>
      <RecoilRoot>
        <GlobalStyle />
        <Router />
      </RecoilRoot>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  *{
    ${reset};
  }

  @media screen and (max-width: 3920px){
    *{
      font-size: 29px;
    }
  }

  @media screen and (max-width: 3800px){
    *{
      font-size: 28px;
    }
  }

  @media screen and (max-width: 3680px){
    *{
      font-size: 27px;
    }
  }

  @media screen and (max-width: 3560px){
    *{
      font-size: 26px;
    }
  }

  @media screen and (max-width: 3440px){
    *{
      font-size: 25px;
    }
  }

  @media screen and (max-width: 3320px){
    *{
      font-size: 24px;
    }
  }

  @media screen and (max-width: 3200px){
    *{
      font-size: 23px;
    }
  }

  @media screen and (max-width: 3040px){
    *{
      font-size: 22px;
    }
  }

  @media screen and (max-width: 2880px){
    *{
      font-size: 21px;
    }
  }

  @media screen and (max-width: 2720px){
    *{
      font-size: 20px;
    }
  }

  @media screen and (max-width: 2560px){
    *{
      font-size: 19px;
    }
  }

  @media screen and (max-width: 2400px){
    *{
      font-size: 18px;
    }
  }

  @media screen and (max-width: 2240px){
    *{
      font-size: 17px;
    }
  }

  @media screen and (max-width: 2080px){
    *{
      font-size: 16px;
    }
  }

  @media screen and (max-width: 1920px){
    *{
      font-size: 15px;
    }
  }

  @media screen and (max-width: 1760px){
    *{
      font-size: 14px;
    }
  }

  @media screen and (max-width: 1600px){
    *{
      font-size: 13px;
    }
  }

  @media screen and (max-width: 1440px){
    *{
      font-size: 12px;
    }
  }
`;

export default App;
