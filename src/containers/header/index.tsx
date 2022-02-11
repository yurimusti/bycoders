import * as Styled from "./styles";

import SocialliLogo from "../../assets/socialli.svg";
import Facebook from "../../assets/facebook.svg";
import Twitter from "../../assets/twitter.svg";
import Instagram from "../../assets/instagram.svg";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Jump from 'react-reveal/Jump';
import Swing from 'react-reveal/Swing';
import LightSpeed from 'react-reveal/LightSpeed';

import Loading from "../../components/Loading";

const Header = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <Styled.Main 
    px={[30, 50, 150]}
    py={[30, 30, 30]}
    position={['absolute', 'fixed', 'fixed']}
    >

      <LightSpeed>
        <Styled.LogoContainer>
          <SocialliLogo />
        </Styled.LogoContainer>
      </LightSpeed>

      <Styled.SocialMedia>
        
      <Jump>
        <Styled.SocialContainer>
          <Facebook 
            onClick={() => {
              const url = "https://www.facebook.com/socialliapp";
              window.open(url, "_blank");
            }}
          />
        </Styled.SocialContainer>
      </Jump>
      <Jump delay={100}>
        <Styled.SocialContainer>
          <Twitter 
            onClick={() => {
              const url = "https://twitter.com/socialliapp";
              window.open(url, "_blank");
            }}
          />
        </Styled.SocialContainer>
      </Jump>
      <Jump delay={200}>
        <Styled.SocialContainer>
          <Instagram 
            onClick={() => {
              const url = "https://www.instagram.com/socialliapp/";
              window.open(url, "_blank");
            }}
          />
        </Styled.SocialContainer>
      </Jump>

      </Styled.SocialMedia>
    </Styled.Main>
  );
};

export default Header;
