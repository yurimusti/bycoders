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
    <Styled.Main>

      <LightSpeed>
        <Styled.LogoContainer>
          <SocialliLogo />
        </Styled.LogoContainer>
      </LightSpeed>

      <Styled.SocialMedia>
        
      <Jump>
        <Styled.SocialContainer>
          <Facebook />
        </Styled.SocialContainer>
      </Jump>
      <Jump delay={100}>
        <Styled.SocialContainer>
          <Twitter />
        </Styled.SocialContainer>
      </Jump>
      <Jump delay={200}>
        <Styled.SocialContainer>
          <Instagram />
        </Styled.SocialContainer>
      </Jump>

      </Styled.SocialMedia>
    </Styled.Main>
  );
};

export default Header;
