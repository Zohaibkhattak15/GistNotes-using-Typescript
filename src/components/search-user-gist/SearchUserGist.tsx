import React, { useState, useContext, useEffect ,useCallback} from "react";
import { GistContext } from "../../context/GistContext";
import { searchRecords } from "../../utils/fetchAPIs";
import { Section } from "./style";
import Spinner from "../common/Spinner/Spinner";
import {
  Table,
  Th,
} from "../common/Table/style";
import { Input } from "antd";
import SearchedData from "./SearchedData";

const SearchGists = () => {
  const [searchRecordsData, setSearchRecordsData] = useState([]);
  const { state, dispatch } = useContext(GistContext);
  const [loading, setLoading] = useState(false);

  const { gistID, searchValue } = state;

  const showUniqueGistRecord = (gistID : string) => {
    dispatch({
      type: "VISIBLESCREEN",
      payload: {
        tab: 9,
        gistID: gistID,
      },
    });
  };
  const getFilterData = useCallback (() => {
    setLoading(true);
    const resp = searchRecords(searchValue).then(response => {
      setLoading(false);
      setSearchRecordsData(response);
    }).catch(err => err);
    
  }, [searchRecords]);


  useEffect(() => {
    getFilterData();
  }, []);

  return (
    <Section>
      {loading ? (
        <Spinner />
      ) : (
        <Table>
          <thead>
            <tr>
              <Th>
                <Input type="checkbox" />
              </Th>
              <Th>Name</Th>
              <Th>Date</Th>
              <Th>Time</Th>
              <Th>Keyword</Th>
              <Th>Notebook Name</Th>
              <Th></Th>
            </tr>
          </thead>
          <tbody>
           <SearchedData 
            searchRecordsData={searchRecordsData}
            showUniqueGistRecord={showUniqueGistRecord}
            />
          </tbody>
        </Table>
      )}
    </Section>
  );
};

export default SearchGists;
