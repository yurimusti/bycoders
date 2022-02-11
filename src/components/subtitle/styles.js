import styled from "styled-components";
import { background, flexbox, layout, position, space, typography } from "styled-system";

export const ContainerSubTitle = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  ${typography}
`

export const SubTitle = styled.span`
  display: flex;
  align-items: center;  
  gap: 5px;
  color: #fff;
  font-family: Poppins;
  font-weight: bold;
  max-width: 850px;
  font-size: 88px;
  line-height: 90px;
  text-align: center;
  text-shadow: 0px 4px 37px rgba(255, 255, 255, 0.25);
  ${typography}

  @media (max-width: 1600px) {
    font-size: 60px;
  }

  @media (max-width: 1170px) {
    font-size: 45px;
  }
  
  @media (max-width: 762px) {
    line-height: 50px;
    margin-top: 15px;
  }

  @media (max-width: 472px) {
    justify-content: center;
    font-size: 30px;
  }
`;

export const IntContainer = styled.div`

  svg {
    height: 65px;
    width: 50px;

    @media (max-width: 1600px) {
      height: 50px;
      width: 40px;
    }

    @media (max-width: 1170px) {
      height: 40px;
      width: 30px;
    }

    @media (max-width: 472px) {
      height: 30px;
      width: 20px;
    }
  }
`