import * as Styled from "./styles";

import Interrogation from "../../assets/int.svg";
import Ios from "../../assets/ios.svg";
import Store from "../../assets/store.svg";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

import SubTitle from "../../components/subtitle"
import Description from "../../components/description"
import Loading from "../../components/Loading";

const Leads = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [type, setType] = useState("");

  console.log(type);

  if (type === "success") {
    return(
      <Styled.MainBanner>
      <Styled.TextsContainer
        px={[30, 50, 150]}
        mt={[150, 150, 150]}
        textAlign={['center', 'inherit', 'inherit']}
      >
          <Styled.Title
            textAlign={['center', 'inherit', 'inherit']}
            fontSize={[50, 50, 50, 86]}
            mt={[30, 0, 0]}
          >
            <Zoom> Sucesso!</Zoom>
          </Styled.Title>
        <Styled.SubTitleSuccess 
        fontSize={[30, 50, 50, 46]}
        >  
          <Zoom delay={100}>Obrigado por fazer parte do Socialli!</Zoom>  
        </Styled.SubTitleSuccess> 
        <Styled.DescriptionSuccess fontSize={[15, 20, 20]}>
          <Zoom delay={200} >
            Estamos em fase de construção mas quando tiver pronto,
            enviaremos pra você um email incrível para começar a curtir suas festas. 
          </Zoom>
        </Styled.DescriptionSuccess>

        <Styled.DescriptionSuccess fontSize={[15, 20, 20]}>
          <Zoom delay={300}>
          Fique atento(a) pois você faz parte das primeiras pessoas que foram cadastradas.
           Enviaremos também um presente quando tudo estiver pronto ;)
          </Zoom>
        </Styled.DescriptionSuccess>

        <Styled.Description fontSize={[15, 20, 20]}>
          <Zoom delay={400}>
            - Equipe Socialli.
          </Zoom>
        </Styled.Description>
      </Styled.TextsContainer>
    </Styled.MainBanner>
    )
  } else {
    return (
      <Styled.MainBanner justifyContent={['center', 'flex-start', 'flex-start']}>
        <Styled.TextsContainer 
        px={[30, 50, 150]}
        mt={[150, 150, 150]}
        textAlign={['center', 'inherit', 'inherit']}
        >
          <Fade left>
            <Styled.Title 
            textAlign={['center', 'inherit', 'inherit']}
            fontSize={[30, 50, 50, 86]}
            mt={[30, 0, 0]}
            >
              Que tal uma 
            </Styled.Title>
            <SubTitle />
          </Fade>

            <Styled.Description fontSize={[15, 20, 20]}>
              <Fade left delay={100}>
                Já pensou que pode ser incrível ficar na sua casa e 
                poder aproveitar uma festa ou um superevento e, de quebra,
                <Description /> 
                <br />
                Este é o Socialli!
              </Fade>
            </Styled.Description>
  
          <Styled.RegisterDescription fontSize={[15, 20, 20]}>
            <Fade left delay={200}>
              Cadastre seu e-mail e conheça o Socialli!
            </Fade>
          </Styled.RegisterDescription>
  
          <Styled.Form flexDirection={['column', 'row', 'row']}>
            <Fade bottom delay={400}>
              <Styled.FormInput
                mt={[15, 0, 0]}
                width={[280, 327, 405]}
                fontSize={[13, 16, 16]}
                height={[40, 40, 45]}
                placeholder="Seu email aqui"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </Fade>

            <Styled.ButtonContainer mt={[30, 0, 0]}>
              <Fade bottom delay={550}>
                <Styled.RegisterBtn 
                px={[140, 20, 20]}
                ml={[0, 10, 10]}
                fontSize={[14, 16, 16]}
                onClick={() => setType("success")}
                >
                  CADASTRAR!
                </Styled.RegisterBtn>
              </Fade>
            </Styled.ButtonContainer>
          </Styled.Form>
          
  
          <Styled.StoreContainer 
          alignSelf={['center', 'inherit', 'inherit']}
          mt={[50, 50, 60]}
          >
  
            <Styled.StoreTitle> <Fade delay={500}> EM BREVE: </Fade> </Styled.StoreTitle>
            
            <Styled.IosContainer>
              <Fade top delay={300}>
                <Ios />
              </Fade>
            </Styled.IosContainer>
            
            <Styled.StoreImgContainer>
              <Fade top delay={400}>
                <Store />
              </Fade>
            </Styled.StoreImgContainer>  
  
          </Styled.StoreContainer>
        </Styled.TextsContainer>
      </Styled.MainBanner>
    );
  }
};

export default Leads;
