import styled from "styled-components";

import { background, layout } from "styled-system";

export const Container = styled.div`
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  ${background}
  ${layout}

  @media (max-width: 1300px) {
    height: 100vh;
  }

  @media (max-width: 900px) {
    height: 114vh;
    width: 110vh;
  } 

  @media (max-width: 830px) {
    height: 100%;
    width: 100%;
  } 
`;
