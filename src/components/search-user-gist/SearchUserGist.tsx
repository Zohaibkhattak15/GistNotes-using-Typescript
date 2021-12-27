import React, { useState, useContext, useEffect } from "react";
import { GistContext } from "../../context/GistContext";
import { searchRecords } from "../../utils/fetchAPIs";

import {
  Table,
  Th,
  Td,
  UserNameSection,
  Username,
  Img,
} from "../common/Table/style";

const SearchGists = () => {
  const [searchRecordsData, setSearchRecordsData] = useState([]);
  const date = new Date("2021-01-09T14:56:23");
  const { state , dispatch} = useContext(GistContext);

  const {gistID , searchValue} = state;

  const showUniqueGistRecord = (gistID) => {
    dispatch({
      type:"VISIBLESCREEN",
      payload : {
        tab : 9,
        gistID : gistID 
      }
    })
  };

  const getFilterData = () => {
    searchRecords(searchValue).then((data) => {
      setSearchRecordsData(data);
    });
  };

  useEffect(() => {
    getFilterData();
  }, []);

  return (
    <section style={{ marginTop: "120px" }}>
      <Table>
        <thead>
          <tr>
            <Th>
              <input type="checkbox" />
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
          {searchRecordsData ? (
            searchRecordsData.map((gist, index) => (
              <tr
                key={index}
                onClick={() => {
                  showUniqueGistRecord(gist?.id);
                }}
              >
                <Td>
                  {" "}
                  <input type="checkbox" />{" "}
                </Td>
                <Td>
                  <UserNameSection>
                    <span>
                      {" "}
                      <Img
                        className="profile-img"
                        src={gist?.owner?.avatar_url}
                        alt="Profile Pics"
                      />
                    </span>
                    <Username>{gist?.owner?.login}</Username>
                  </UserNameSection>
                </Td>
                <Td>{date.toLocaleDateString()}</Td>
                <Td>{date.toLocaleTimeString()}</Td>
                <Td>{Object.keys(gist?.files)[0]}</Td>
                <Td>{gist?.description}</Td>
              </tr>
            ))
          ) : (
            <h1>No record foound for that user.......</h1>
          )}
        </tbody>
      </Table>
    </section>
  );
};

export default SearchGists;
