import * as Styled from "./styles";

import Interrogation from "../../assets/interrogation.svg";
import Ios from "../../assets/ios.svg";
import Store from "../../assets/store.svg";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

import Loading from "../../components/Loading";

const Leads = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [type, setType] = useState("");

  console.log(type);

  if (type === "success") {
    return(
      <Styled.MainBanner>
      <Styled.TextsContainer>
          <Styled.Title>
            <Zoom> Sucesso!</Zoom>
          </Styled.Title>
        <Styled.SubTitleSuccess>  
          <Zoom delay={100}>Obrigado por fazer parte do Socialli!</Zoom>  
        </Styled.SubTitleSuccess> 
        <Styled.DescriptionSuccess>
          <Zoom delay={200} >
            Estamos em fase de construção mas quando tiver pronto,
            enviaremos pra você um email incrível para começar a curtir suas festas. 
          </Zoom>
        </Styled.DescriptionSuccess>

        <Styled.DescriptionSuccess>
          <Zoom delay={300}>
          Fique atento(a) pois você faz parte das primeiras pessoas que foram cadastradas.
           Enviaremos também um presente quando tudo estiver pronto ;)
          </Zoom>
        </Styled.DescriptionSuccess>

        <Styled.Description>
          <Zoom delay={400}>
            - Equipe Socialli.
          </Zoom>
        </Styled.Description>
      </Styled.TextsContainer>
    </Styled.MainBanner>
    )
  } else {
    return (
      <Styled.MainBanner>
        <Styled.TextsContainer>
          <Fade left>
            <Styled.Title>Que tal uma </Styled.Title>
            <Styled.ContainerSubTitle>
              <Styled.SubTitle>festa online hoje</Styled.SubTitle>
              <Interrogation />
            </Styled.ContainerSubTitle>
          </Fade>
          
            <Styled.Description>
              <Fade left delay={100}>
                Já pensou que pode ser incrível ficar na sua casa e 
                poder aproveitar uma festa ou um superevento e, de quebra, conhecer 
                pessoas com gostos parecidos com o seu. <br /> Este é o Socialli!
              </Fade>
            </Styled.Description>
  
          <Styled.RegisterDescription>
            <Fade left delay={200}>
              Cadastre seu e-mail e conheça o Socialli!
            </Fade>
          </Styled.RegisterDescription>
  
          <Styled.Form>
            <Fade bottom delay={400}>
              <Styled.FormInput
                width={[280, 327, 405]}
                height={[40, 40, 45]}
                placeholder="Seu email aqui"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </Fade>
            <Fade bottom delay={550}>
              <Styled.RegisterBtn 
              fontSize={[14, 16, 16]}
              onClick={() => setType("success")}
              >
                CADASTRAR!
              </Styled.RegisterBtn>
            </Fade>
          </Styled.Form>
  
          <Styled.StoreContainer>
  
            <Styled.StoreTitle> <Fade delay={500}> EM BREVE: </Fade> </Styled.StoreTitle>
            
            <Styled.IosContainer>
              <Ios />
            </Styled.IosContainer>
            
            <Styled.StoreImgContainer>
              <Store />
            </Styled.StoreImgContainer>  
  
          </Styled.StoreContainer>
        </Styled.TextsContainer>
      </Styled.MainBanner>
    );
  }
};

export default Leads;
