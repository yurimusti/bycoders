import styled from "styled-components";
import { position, space } from "styled-system";

export const Main = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding-left: 64px;
  padding-right: 64px;
  margin-top: 24px;
  grid-gap: 20px;
  width: 100%;
  ${space}
  ${position}

svg {
    width: 30%;
    height: 75px;
  }
`;

export const LoginArea = styled.div``;
