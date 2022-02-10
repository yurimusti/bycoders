import React from "react";

import * as Styled from "./styles";

import Interrogation from "../../assets/int.svg"

const Description = ({ value = false, onChange = () => {}, ...rest }) => {
  return (
    <>
      <Styled.Description fontSize={[15, 20, 20]}>
        <Styled.Text>
          conhecer pessoas com gostos parecidos com o seu gosto
          <Interrogation /> 
        </Styled.Text>
      </Styled.Description>
    </>
  );
};

export default Description;
