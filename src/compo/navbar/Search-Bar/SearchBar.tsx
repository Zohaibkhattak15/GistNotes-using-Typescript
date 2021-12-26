import React, { useState, useContext, useCallback } from "react";
import { Div } from "./style";
import { Input, Tooltip } from "antd";

const { Search } = Input;

const SearchBar = () => {
  const [value, setValue] = useState("");
  const searchGists = () => {
  };
  return (
    <Div>
      <Tooltip placement="topLeft" title={"Search User"}>
        <Search
          placeholder="Enter search text"
          size="large"
          onChange={(e) => setValue(e.target.value)}
          onSearch={searchGists}
        />
      </Tooltip>
    </Div>
  );
};

export default SearchBar;
