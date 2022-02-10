import React from "react";

import * as Styled from "./styles";

import Interrogation from "../../assets/int.svg"

const SubTitle = ({ value = false, onChange = () => {}, ...rest }) => {
  return (
    <>
      <Styled.SubTitle 
        fontSize={[30, 50, 50, 86]}
        >
          festa online hoje  
          <Styled.IntContainer>
            <Interrogation />
          </Styled.IntContainer>
      </Styled.SubTitle>
    </>
  );
};

export default SubTitle;
