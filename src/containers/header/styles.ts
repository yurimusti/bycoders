import styled from "styled-components";
import { background, flexbox, layout, typography } from "styled-system";

export const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 60px 150px;
  position: fixed;
  width: 100%;
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