import React, { useEffect, useState , useCallback } from "react";
import { privateGistsRecord, checkGistStared } from "../../utils/fetchAPIs";
import TableData from "../common/Table/TableData";
import GridDisplay from "../common/Grid/Grid";
import Loader from "../common/Spinner/Spinner";
import { Section, Div } from "../publicgistslist/style";

const PrivateGists = () => {
  const [loading, setLoading] = useState(false);
  const [privateGistsList, setPrivateGistsList] = useState([]);
  const [isListView, setIsListView] = useState(true);
  const [isGridView, setIsGridView] = useState(false);
  const [isActive, setIsActive] = useState("list");

  const TableView = loading ? (
    <Loader />
  ) : (
    <TableData privateGistsDisplay={privateGistsList} />
  );
  const GridView = loading ? (
    <Loader />
  ) : (
    <GridDisplay privateGistsDisplay={privateGistsList} />
  );

  const getPrivateGists = useCallback(async () => {
    setLoading(true);
    let val = await privateGistsRecord().then((data) => {
      setLoading(false);
      setPrivateGistsList(data);
    });
  }, [privateGistsRecord]);

  const listToggle = () => {
    setIsListView(true);
    setIsGridView(false);
    setIsActive("list");
  };

  const gridToggle = () => {
    setIsListView(false);
    setIsGridView(true);
    setIsActive("grid");
  };

  useEffect(() => {
    getPrivateGists();
  }, []);

  return (
    <Section>
      <Div>
        <span>
          <i
            className={
              isActive === "list"
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
              isActive === "grid"
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

export default PrivateGists;
