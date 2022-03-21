import React from "react";

import { Input, Button } from "antd";
import * as Styled from "./style";

const Search = ({
  onChange,
  onSearch,
  buttonText = "SUBMIT",
  openHistoric,
}) => {
  return (
    <Styled.SearchMain>
      <Input.Group compact>
        <Input
          style={{ width: "calc(100% - 200px)" }}
          placeholder="Search"
          size="large"
          onChange={onChange}
        />
        <Button type="primary" size="large" onClick={onSearch}>
          {buttonText}
        </Button>
      </Input.Group>
      <Button type="primary" size="large" onClick={openHistoric}>
        Show History
      </Button>
    </Styled.SearchMain>
  );
};

export default Search;
