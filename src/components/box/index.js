import React from "react";
import * as Styled from "./style";

const Box = ({ title, count, image, data, onClick }) => {
  return (
    <Styled.Main onClick={onClick}>
      <Styled.Thumb src={image}></Styled.Thumb>
      <Styled.Title>{`${title}`}</Styled.Title>
      <Styled.ChannelTitle>{`${data.snippet.channelTitle}`}</Styled.ChannelTitle>
      {data?.statistics?.viewCount && (
        <b>{`${data?.statistics?.viewCount} Views`}</b>
      )}
    </Styled.Main>
  );
};

export default Box;
