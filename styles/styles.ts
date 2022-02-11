import styled from "styled-components";

import { background, layout } from "styled-system";

export const Container = styled.div`
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  ${background}
  ${layout}

  @media (max-height: 900px) {
    height: 100vh;
  }

  @media (max-height: 800px) {
    height: 110vh;
  }

  @media (max-height: 700px) {
    height: 115vh;
  }
`;
