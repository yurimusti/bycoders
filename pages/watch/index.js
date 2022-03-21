import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import YouTube from "react-youtube";

import * as Styled from "./style";

const Watch = () => {
  const router = useRouter();

  const [item, setItem] = useState({ title: "" });

  const opts = {
    height: "480",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  useEffect(() => {
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${router.query.id}&key=AIzaSyDvmRowP3Ukjo6Fn5dgfbAy7UhS3f_S9R8`
      )
      .then((e) => setItem(e.data.items[0].snippet));
  }, [router?.query.id]);

  return (
    <Styled.Main>
      <Styled.VideoContainer>
        <YouTube videoId={router.query.id} opts={opts} />
        <Styled.Title>{item.title}</Styled.Title>
        <Styled.ChannelTitle>{item.channelTitle}</Styled.ChannelTitle>
        <Styled.Description>{item.description}</Styled.Description>
      </Styled.VideoContainer>
      <Styled.VideoRelated>
        <Styled.Title>VIDEO RELATED</Styled.Title>
        <span>Not found</span>
      </Styled.VideoRelated>
    </Styled.Main>
  );
};

export default Watch;
