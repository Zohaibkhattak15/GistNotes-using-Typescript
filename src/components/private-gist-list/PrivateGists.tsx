import  { useEffect, useState, useCallback, useMemo } from "react";
import TableData from "../common/Table/TableData";
import GridDisplay from "../common/Grid/Grid";
import Loader from "../common/Spinner/Spinner";
import { Section, Div, SpanBorder } from "../public-gist-list/style";
import { getPrivateGists } from "../../utils/PrivatreGistUtilis";


const PrivateGists = () => {
  const [loading, setLoading] = useState(false);
  const [privateGistsList, setPrivateGistsList] = useState([]);
  const [isListView, setIsListView] = useState(true);
  const [isGridView, setIsGridView] = useState(false);
  const [layout, setLayout] = useState("list");


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

  const listView = useMemo(() => layout === "list" ? "fas fa-list fa-2x list-active" : "fas fa-list fa-2x",[layout]);
  const gridView = useMemo(() => layout === "grid" ? "fas fa-th-large fa-2x grid-active" : "fas fa-th-large fa-2x",[layout]);

  const views = loading ? (
    <Loader />
  ) : isListView === true ? (
    <TableData privateGistsDisplay={privateGistsList} />
  ) : (
    <GridDisplay privateGistsDisplay={privateGistsList} />
  );

  useEffect(() => {
    getPrivateGists(loading, setLoading  , privateGistsList , setPrivateGistsList  )
  }, []);

  return (
    <Section>
      <Div>
        <span>
          <i className={listView} onClick={listToggle} />
        </span>
        <SpanBorder></SpanBorder>
        <span>
          <i className={gridView} onClick={gridToggle} />
        </span>
      </Div>
      {views}
    </Section>
  );
};

export default PrivateGists;
