import React from "react";
import * as Styled from "./style";

import { ReactComponent as Logo } from "../../assets/image/logo_youtube.svg";
import Search from "../../components/search";
import { notification } from "antd";

const Header = ({ onChange, onSearch, openHistoric }) => {
  return (
    <Styled.Main>
      <Logo />
      <Search onChange={onChange} onSearch={onSearch} openHistoric={openHistoric} />
      <Styled.LoginArea>
        <span
          style={{ color: "blueviolet", fontWeight: "bold", cursor: "pointer" }}
          onClick={() =>
            notification.warning({
              description: "Service unavailable",
              message: "Warning",
            })
          }
        >
          Create account
        </span>{" "}
        or{" "}
        <span
          style={{ color: "blueviolet", fontWeight: "bold", cursor: "pointer" }}
          onClick={() =>
            notification.warning({
              description: "Service unavailable",
              message: "Warning",
            })
          }
        >
          login account
        </span>
      </Styled.LoginArea>
    </Styled.Main>
  );
};

export default Header;
