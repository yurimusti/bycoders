import styled from "styled-components";
import { background, flexbox, layout, typography } from "styled-system";

export const MainBanner = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  ${layout}
  
`;

export const NavBar = styled.div`
`

export const TextsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0px 150px;
  margin-top: 150px;
`

export const Title = styled.span`
  color: #fff;
  font-family: Poppins;
  font-weight: bold;
  max-width: 850px;
  font-size: 84px;
`;

export const ContainerSubTitle = styled.div`
  display: flex;
  align-items: center;
`

export const SubTitle = styled.span`
  color: #fff;
  font-family: Poppins;
  font-weight: bold;
  max-width: 850px;
  font-size: 88px;
  line-height: 90px;
`;

export const SubTitleSuccess = styled.span`
  color: #fff;
  font-family: Poppins;
  font-weight: bold;
  max-width: 850px;
  font-size: 40px;
  line-height: 90px;
  padding-bottom: 40px;
`;

export const Description = styled.span`
  color: #fff;
  font-family: Poppins;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  max-width: 630px;
  padding: 40px 0px;
`;

export const DescriptionSuccess = styled.span`
  color: #fff;
  font-family: Poppins;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  max-width: 630px;
  padding: 20px 0px;
`;

export const RegisterDescription = styled.span`
  color: #fff;
  font-family: Poppins;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
  max-width: 800px;
  padding-bottom: 20px;
`;

export const Form = styled.div`
  display: flex;
  align-items: center;

  .rippleEffect > button {
    border-radius: 30px;
    background: linear-gradient(90deg, #016dc8, #55e7fc)
  }
`

export const FormInput = styled.input`
  width: 100%;
  background-color: #ffffff2f;
  padding: 0px 30px;
  font-size: 16px;
  letter-spacing: 1.5px;
  color: #fff;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
  border: 1px solid #ffffff85;
  border-radius: 5px;
  -webkit-transition: box-shadow 0.5s ease;
  -moz-transition: box-shadow 0.5s ease;
  -o-transition: box-shadow 0.5s ease;
  -ms-transition: box-shadow 0.5s ease;
  transition: box-shadow 0.5s ease;
  ${layout}

  ::placeholder {
    color: #fff;
    font-weight: bold;
  }

  &:focus {
    -webkit-box-shadow: 0px 0px 35px 10px rgba(220,8,255,0.42); 
    box-shadow: 0px 0px 35px 10px rgba(220,8,255,0.42);
    outline: none; 
  }
`;

export const RegisterBtn = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  padding: 10px 20px;
  width: 150px;
  margin-left: 10px;
  cursor: pointer;
  text-decoration: none;
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  box-shadow: 0px 2px 6px rgba(79, 0, 150, 0.25), inset 0px -4px 0px #C6006F;
  border-radius: 8px;
  transition: 0.3s;
  background-color: #E9168C;
  transition: 0.3s;
  ${typography}
  ${flexbox}

    :hover {
    transform: scale(1.02);
    color: #fff;
    background-color: #ff18af;
    border-color: #ff18af;
  }
`;

export const StoreContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 130px;
  gap: 5px;
`;

export const StoreTitle = styled.span`
  font-size: 16px;
  color: #fff;
  font-family: Poppins;
  font-weight: bold;
  padding-right: 5px;
`

export const IosContainer = styled.a`
  cursor: pointer;
  transition: 0.4s;
  height: 36px;

  :hover {
    transform: scale(1.2);
    transform: translateY(-5px);
  }
`

export const StoreImgContainer = styled.a`
  cursor: pointer;
  transition: 0.4s;
  height: 31px;

  :hover {
    transform: scale(1.2);
    transform: translateY(-5px);
  }
`
