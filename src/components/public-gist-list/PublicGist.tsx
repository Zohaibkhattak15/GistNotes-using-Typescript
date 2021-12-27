import React, { useEffect, useState, useCallback } from "react";
import { publicGistsRecord } from "../../utils/fetchAPIs";
import TableData from "../common/Table/TableData";
import GridDisplay from "../common/Grid/Grid";
import Loader from "../common/Spinner/Spinner";
import { Section, Div } from "./style";

const PublicGists = () => {
  const [publicGistsList, setPublicGistsList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isListView, setIsListView] = useState(true);
  const [isGridView, setIsGridView] = useState(false);
  const [layout, setLayout] = useState("list");

  const TableView = loading ? (
    <Loader />
  ) : (
    <TableData publicGistsDisplay={publicGistsList} />
  );
  const GridView = loading ? (
    <Loader />
  ) : (
    <GridDisplay publicGistsDisplay={publicGistsList} />
  );

  const getPublicGists = useCallback(async () => {
    setLoading(true);
    let val = await publicGistsRecord().then((data) => {
      setLoading(false);
      setPublicGistsList(data);
    });
  }, [publicGistsRecord]);

  const listToggle = () => {
    setIsListView(true);
    setIsGridView(false);
    setLayout("list");
  };

  const gridToggle = () => {
    setIsListView(false);
    setIsGridView(true);
    setLayout("grid");
  };

  useEffect(() => {
    getPublicGists();
  }, []);

  return (
    <Section>
      <Div>
        <span>
          <i
            className={
              layout === "list"
                ? "fas fa-list fa-2x list-active"
                : "fas fa-list fa-2x"
            }
            onClick={() => listToggle()}
          ></i>
        </span>
        <span style={{ border: "1px solid #5acba1" }}></span>
        <span>
          <i
            className={
              layout === "grid"
                ? "fas fa-th-large fa-2x grid-active"
                : "fas fa-th-large fa-2x"
            }
            onClick={() => gridToggle()}
          ></i>
        </span>
      </Div>
      {isListView === true && isGridView === false ? TableView : GridView}
    </Section>
  );
};

export default PublicGists;
