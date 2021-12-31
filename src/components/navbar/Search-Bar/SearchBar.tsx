import React, { useState, useContext, useCallback } from "react";
import { GistContext } from "../../../context/GistContext";
import { Div } from "./style";
import { Input, Tooltip, } from "antd";
import { SEARCH } from "../../../constants/index";

const { Search } = Input;

const SearchBar: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const { dispatch } = useContext(GistContext);

  const handleSearch = useCallback((value) => {
    if (value) {
      dispatch({
        type: SEARCH,
        payload: {
          searchValue: value,
          tab: 10,
        },
      });
      setValue("");
    }
  }, [dispatch]);

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
          onSearch={handleSearch}
          value={value}
        />
      </Tooltip>
    </Div>
  );
};

export default SearchBar;
