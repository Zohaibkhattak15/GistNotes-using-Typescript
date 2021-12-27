import React, { useState, useContext, useCallback } from "react";
import { Div } from "./style";
import { Input, Tooltip } from "antd";

const { Search } = Input;

type SearcValueType = {
  value : string
}

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const SearchBar = () => {
  const [value, setValue] = useState<SearcValueType>({} as SearcValueType);
  const searchGists = () => {
  };
  return (
    <Div>
      <Tooltip placement="topLeft" title={"Search User"}>
        <Search
          placeholder="Enter search text"
          size="large"
          onSearch={searchGists}
        />
      </Tooltip>
    </Div>
  );
};

export default SearchBar;
