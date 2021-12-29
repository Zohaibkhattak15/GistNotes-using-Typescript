import {useEffect,useState,useCallback,useMemo } from "react";
import TableData from "../common/Table/TableData";
import GridDisplay from "../common/Grid/Grid";
import Loader from "../common/Spinner/Spinner";
import { Section, Div, SpanBorder } from "./style";
import { getPublicGists } from "../../utils/PublicGistUtilis";


const PublicGists = () => {
  const [publicGistsList, setPublicGistsList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isListView, setIsListView] = useState(true);
  const [isGridView, setIsGridView] = useState(false);
  const [layout, setLayout] = useState("list");

  const listLayout = useMemo(() => layout === "list" ? "fas fa-list fa-2x list-active" : "fas fa-list fa-2x",[layout]);
  const gridLayout = useMemo(() => layout === "grid" ? "fas fa-th-large fa-2x grid-active" : "fas fa-th-large fa-2x",[layout]);

  const view = loading ? (
    <Loader />
  ) : isListView === true ? (
    <TableData publicGistsDisplay={publicGistsList} />
  ) : (
    <GridDisplay publicGistsDisplay={publicGistsList} />
  );


  const listToggle = useCallback(() => {
    setIsListView(true);
    setIsGridView(false);
    setLayout("list");
  }, [isGridView, isListView, layout]);

  const gridToggle = useCallback(() => {
    setIsListView(false);
    setIsGridView(true);
    setLayout("grid");
  }, [isGridView, isListView, layout]);

  useEffect(() => {
    getPublicGists(loading , setLoading ,publicGistsList , setPublicGistsList);
  }, []);

  return (
    <Section>
      <Div>
        <span>
          <i className={listLayout} onClick={listToggle} />
        </span>
        <SpanBorder></SpanBorder>
        <span>
          <i className={gridLayout} onClick={gridToggle} />
        </span>
      </Div>
      {view}
    </Section>
  );
};

export default PublicGists;
