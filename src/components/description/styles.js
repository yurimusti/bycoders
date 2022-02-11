import styled from "styled-components";
import { background, flexbox, layout, position, space, typography } from "styled-system";

export const Description = styled.span`
  display: flex;
  align-items: center;
  gap: 2px;
  color: #fff;
  font-family: Poppins;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  max-width: 630px;
  ${typography}

  @media (max-width: 1170px) {
    max-width: 360px;
  }

  @media (max-height: 850px) {
    font-size: 14px;
    line-height: 25px;
  }
  
`;

export const Text = styled.span`
  svg {
    padding: 0px 4px;
    height: 15px;
    width: 20px;

    @media (max-width: 472px) {
      height: 13px;
      width: 18px;
    }
  }
`

export const IntContainer = styled.div`

  svg {
    height: 30px;
    width: 20px;

    @media (max-width: 1170px) {
      height: 25px;
      width: 15px;
    }

    @media (max-width: 472px) {
      height: 20px;
      width: 10px;
    }
  }
`