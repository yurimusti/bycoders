import styled from "styled-components";
import { position, space } from "styled-system";

export const Main = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 75px;
  width: 100%;
  padding-left: 32px;
  padding-right: 32px;
  ${space}
  ${position}

svg {
    width: 30%;
    height: 75px;
  }
`;

export const LoginArea = styled.div`
  margin-left: 50px;
`;
