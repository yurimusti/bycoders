import styled from "styled-components";
import { background, flexbox, layout, space, typography } from "styled-system";

export const MainBanner = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  ${layout}
  ${flexbox}
`;

export const NavBar = styled.div`
`

export const TextsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  ${space}
  ${typography}

  .react-reveal {
    @media (max-width: 472px) {
      text-align: center;
    }
  }
`

export const Title = styled.span`
  color: #fff;
  font-family: Poppins;
  font-weight: bold;
  max-width: 850px;
  font-size: 84px;
  ${typography}
  ${space}

  @media (max-width: 1600px) {
    font-size: 60px;
  }

  @media (max-width: 1170px) {
    font-size: 45px;
  }

  @media (max-width: 472px) {
    font-size: 30px;
  }
`;

export const SubTitleSuccess = styled.span`
  color: #fff;
  font-family: Poppins;
  font-weight: bold;
  max-width: 850px;
  font-size: 40px;
  line-height: 70px;
  padding-bottom: 40px;
  max-width: 800px;
  ${typography}

  @media (max-width: 1300px) {
    font-size: 40px;
    line-height: 70px;
    max-width: 600px;
  }

  @media (max-width: 1170px) {
    font-size: 35px;
    max-width: 450px;
    line-height: 50px
  }

  @media (max-width: 940px) {
    font-size: 35px;
    max-width: 400px;
    line-height: 50px
  }

  @media (max-width: 831px) {
    max-width: 600px;
  }

  @media (max-width: 762px) {
    line-height: 50px;
    margin-top: 15px;
    font-size: 30px;
  }

  @media (max-width: 472px) {
    font-size: 24px;
  }

`;

export const Description = styled.span`
  color: #fff;
  font-family: Poppins;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  max-width: 630px;
  padding: 40px 0px;
  ${typography}

  @media (max-width: 1170px) {
    max-width: 400px;
  }

  @media (max-width: 638px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const DescriptionSuccess = styled.span`
  color: #fff;
  font-family: Poppins;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  max-width: 630px;
  padding: 20px 0px;
  ${typography}

  @media (max-width: 1300px) {
    max-width: 520px
  }

  @media (max-width: 1170px) {
    max-width: 460px;
  }

  @media (max-width: 940px) {
    max-width: 420px;
  }

  @media (max-width: 831px) {
    max-width: 600px;
  }
`;

export const RegisterDescription = styled.span`
  color: #fff;
  font-family: Poppins;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
  max-width: 800px;
  padding-bottom: 20px;
  ${typography}
`;

export const Form = styled.div`
  display: flex;
  align-items: center;
  ${typography}
  ${space}
  ${flexbox}

  @media (max-width: 1170px) {
    flex-direction: column;
  }

  @media (max-width: 831px) {
    flex-direction: row;
  }

  @media (max-width: 640px) {
    flex-direction: column;
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
  ${space}
  ${layout}
  ${typography}

  ::placeholder {
    color: #ffffff90;
    font-weight: bold;
  }

  &:focus {
    -webkit-box-shadow: 0px 0px 35px 10px rgba(220,8,255,0.42); 
    box-shadow: 0px 0px 35px 10px rgba(220,8,255,0.42);
    outline: none; 
  }
`;

export const ButtonContainer = styled.div`
  ${space}

  @media (max-width: 1170px) {
    margin-top: 30px;
  }

  @media (max-width: 831px) {
    margin-top: 0px;
  }

  @media (max-width: 638px) {
    margin-top: 30px;
  }
`

export const RegisterBtn = styled.button`
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
  border-width: 0px;
  box-shadow: 0px 2px 6px rgba(79, 0, 150, 0.25), inset 0px -4px 0px #C6006F;
  border-radius: 8px;
  transition: 0.3s;
  background-color: #E9168C;
  transition: 0.3s;
  ${typography}
  ${flexbox}
  ${space}

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
  margin-top: 100px;
  gap: 5px;
  ${space}
  ${flexbox}
`;

export const StoreTitle = styled.span`
  font-size: 16px;
  color: #fff;
  font-family: Poppins;
  font-weight: bold;
  padding-right: 5px;
  ${typography}
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
export const IntImgContainer = styled.div`

`

