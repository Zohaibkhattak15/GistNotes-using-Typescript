import React, { useEffect, useState, useCallback } from 'react';
import TableData from '../common/Table/TableData';
import GridDisplay from '../common/Grid/Grid';
import Loader from '../common/Spinner/Spinner';
import {
  Section, Wrapper, SpanBorder, ViewIcon,
} from '../public-gist-list/style';
import { getPrivateGists } from '../../utils/PrivateGistUtils';

const PrivateGists = () => {
  const [loading, setLoading] = useState(false);
  const [privateGistsList, setPrivateGistsList] = useState([]);
  const [isListView, setIsListView] = useState(true);

  const listToggle = useCallback(() => {
    setIsListView(true);
  }, []);

  const gridToggle = useCallback(() => {
    setIsListView(false);
  }, []);

  const views = loading ? <Loader /> : isListView === true
    ? <TableData privateGistsDisplay={privateGistsList} />
    : <GridDisplay privateGistsDisplay={privateGistsList} />;

  useEffect(() => {
    getPrivateGists(loading, setLoading, privateGistsList, setPrivateGistsList);
  }, []);

  return (
    <Section>
      <Wrapper>
        <span onClick={listToggle}>
          <ViewIcon className="fas fa-list fa-2x" isListView={isListView} />
        </span>
        <SpanBorder className="divider" />
        <span onClick={gridToggle}>
          <ViewIcon className="fas fa-th-large fa-2x" isListView={isListView} />
        </span>
      </Wrapper>
      {views}
    </Section>
  );
};
export default PrivateGists;
