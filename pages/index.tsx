import React, { useEffect, useState } from "react";
import Head from "next/head";

import * as Styled from "../styles/styles";
import Header from "../src/components/header";
import MostPopular from "../src/containers/mostPopular";

import { useRouter } from "next/router";
import { useHistoric } from "../src/store";

import axios from "axios";
import Modal from "antd/lib/modal/Modal";
import { Button } from "antd";

const Home: React.FC = () => {
  const API_KEY = process.env.REACT_APP_YT_API_KEY;

  const router = useRouter();

  const [data, setData] = useState([]);
  const [valueSearch, setValueSearch] = useState("");
  const [showModal, setShowModal] = useState(false);

  const { historic, addToHistoricSearch, cleanHistoric } = useHistoric();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/client.js";

    script.onload = () => {
      window.gapi.load("client", () => {
        window.gapi.client.setApiKey(API_KEY);
        window.gapi.client.load("youtube", "v3", () => {});
      });
    };

    document.body.appendChild(script);
    try {
      axios
        .get(
          `https://content.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics%2CcontentDetails&chart=mostPopular&maxResults=50&regionCode=US&fields=nextPageToken%2CprevPageToken%2Citems(contentDetails%2Fduration%2Cid%2Csnippet(channelId%2CchannelTitle%2CpublishedAt%2Cthumbnails%2Fmedium%2Ctitle)%2Cstatistics%2FviewCount)%2CpageInfo(totalResults)&key=AIzaSyDvmRowP3Ukjo6Fn5dgfbAy7UhS3f_S9R8`
        )
        .then((e) => {
          setData(e.data.items);
        });
    } catch (e) {
      console.log("error", e);
    }
  }, []);

  const _handleSearch = async () => {
    const URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${valueSearch}&fields=items&key=AIzaSyDvmRowP3Ukjo6Fn5dgfbAy7UhS3f_S9R8`;
    try {
      await axios.get(URL).then((e) => {
        setData(e.data.items);
      });
    } catch (e) {
      console.log("error", e);
    }
  };

  return (
    <>
      <Styled.Container>
        <Header
          onChange={(e) => setValueSearch(e.target.value)}
          onSearch={() => {
            addToHistoricSearch(valueSearch);
            _handleSearch();
          }}
          openHistoric={() => {
            setShowModal(true);
          }}
        />
        <MostPopular
          data={data}
          onClick={(id) => {
            router.push({ pathname: "/watch", query: { id } });
          }}
        />
        <Modal
          title="Basic Modal"
          visible={showModal}
          onOk={() => {}}
          onCancel={() => setShowModal(false)}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            {historic.length === 0
              ? "No historic found."
              : historic.map((e) => <p>{e}</p>)}
            {}
            <Button type="link" onClick={() => cleanHistoric()}>
              Clean historic
            </Button>
          </div>
        </Modal>
      </Styled.Container>
    </>
  );
};

export default Home;
