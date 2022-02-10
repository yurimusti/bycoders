import React from "react";
import Head from "next/head";

import * as Styled from "../styles/styles";

import Leads from "../src/containers/leads";
import Header from "../src/containers/header";

import background from "../src/assets/img/bg.png";

const Home: React.FC = () => {
  return (
    <>
      <Head>
      
        <meta
          name="facebook-domain-verification"
          content="myb383m82vuiikw6zensy2pbtfn2sq"
        />
        <meta name="description" content="Socialli :: App" />
        <title>Socialli - App</title>
      </Head>
    
      <Styled.Container
        backgroundImage={[
          `url(${background})`,
          `url(${background})`,
          `url(${background})`,
        ]}
        backgroundPosition={['inherit', 'inherit', 'center']}
        height={['130vh', '100vh', '100vh']}
      >
        <Header />
        <Leads />
      </Styled.Container>
    </>
  );
};

export default Home;
