import React, { useState, useContext } from "react";
import { GistContext } from "../../../context/GistContext";
import { Div } from "./style";
import { Input, Tooltip, } from "antd";
import { SEARCH } from "../../../constants/index";

const { Search } = Input;

const SearchBar = () => {
  const [value, setValue] = useState<string>("");
  const { dispatch } = useContext(GistContext);
  const searchGists = () => {
    dispatch({
      type: SEARCH,
      payload: {
        searchValue: value,
        tab: 10,
      },
    });
  };
  const handleSearchInput = (e: React.FormEvent<HTMLInputElement>): void => {
    setValue(e.currentTarget.value)
  }
  return (
    <Div>
      <Tooltip placement="topLeft" title={"Search User"}>
        <Search
          placeholder="Enter search text"
          size="large"
          onChange={handleSearchInput}
          onSearch={searchGists}
        />
      </Tooltip>
    </Div>
  );
};

export default SearchBar;
