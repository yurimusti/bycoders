import styled from "styled-components";
import { background, flexbox, layout, position, space, typography } from "styled-system";

export const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  ${space}
  ${position}

`;

export const SocialContainer = styled.div`
  cursor: pointer;
  transition: 0.4s;

  :hover {
    transform: scale(1.2);
    transform: translateY(-5px);
  }
`

export const SocialMedia = styled.a`
  display: flex;
  align-items: center;
  gap: 35px;
`;

export const LogoContainer = styled.div`
`