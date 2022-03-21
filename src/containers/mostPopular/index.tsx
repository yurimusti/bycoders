import React, { useEffect, useState } from "react";
import * as Styled from "./styles";

import Box from "../../components/box";

const Mostpopular = ({ data = [], onClick }) => {
  return (
    <Styled.Main>
      {data?.map((e, i) => {
        return (
          <Box
            onClick={() => onClick(e.id)}
            title={e.snippet?.title}
            count={e.statistics?.viewCount}
            image={e.snippet?.thumbnails?.medium?.url}
            data={e}
            key={i}
          />
        );
      })}
    </Styled.Main>
  );
};

export default Mostpopular;
