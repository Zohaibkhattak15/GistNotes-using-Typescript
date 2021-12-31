import {useEffect,useState,useCallback,useMemo } from "react";
import TableData from "../common/Table/TableData";
import GridDisplay from "../common/Grid/Grid";
import Loader from "../common/Spinner/Spinner";
import { Section, Wrapper, SpanBorder, ViewIcon } from "./style";
import { getPublicGists } from "../../utils/PublicGistUtils";


const PublicGists: React.FC = () => {
  const [publicGistsList, setPublicGistsList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isListView, setIsListView] = useState(true);

  const view = useMemo(() => loading ? (
    <Loader />
  ) : isListView === true ? (
    <TableData publicGistsDisplay={publicGistsList} />
  ) : (
    <GridDisplay publicGistsDisplay={publicGistsList} />
  ), [loading,isListView,publicGistsList]);

  const listToggle = useCallback(() => {
    setIsListView(true);
  }, []);

  const gridToggle = useCallback(() => {
    setIsListView(false);
  }, []);

  useEffect(() => {
    getPublicGists(loading , setLoading ,publicGistsList , setPublicGistsList);
}, []);

  return (
    <Section>
      <Wrapper>
        <span onClick={listToggle}>
          <ViewIcon className="fas fa-list fa-2x" isListView={isListView} />
        </span>
        <SpanBorder className="divider"></SpanBorder>
        <span onClick={gridToggle}>
        <ViewIcon className="fas fa-th-large fa-2x" isListView={isListView}  />
        </span>
      </Wrapper>
      {view}
    </Section>
  );
};
export default PublicGists;
