import { useState, useContext, useEffect, useCallback } from "react";
import { GistContext } from "../../context/GistContext";
import { Section } from "../stared-gists/style";
import Spinner from "../common/Spinner/Spinner";
import { columns } from '../../utils/StarGistUtilis';
import { Table } from "antd";
import { VISIBLESCREEN } from "../../constants";
import { getFilterData } from "../../utils/searchGistUserUtilis";

const SearchGists = () => {
  const [searchRecordsData, setSearchRecordsData] = useState([]);
  const { state, dispatch } = useContext(GistContext);
  const [loading, setLoading] = useState(false);

  const { gistID, searchValue } = state;

  const showUniqueGistRecord = useCallback((gistID: string) => {
    dispatch({
      type: VISIBLESCREEN,
      payload: {
        tab: 9,
        gistID: gistID,
      },
    });
    /* eslint-disable */
  }, []);
 /* eslint-enable */

  const onRow = useCallback((record: any) => {
    return { onClick: () => showUniqueGistRecord(record?.id) };
    /* eslint-disable */
  }, [])
  /* eslint-enable */


  useEffect(() => {
    getFilterData(searchValue , loading , setLoading , searchRecordsData , setSearchRecordsData );
    /* eslint-disable */
  }, []);
  /* eslint-enable */

  return (
    loading ? (
      <Spinner />
    ) : (
      <Section>
        <Table
          rowKey="id"
          columns={columns}
          dataSource={[...searchRecordsData]}
          onRow={onRow}
        />
      </Section>
    )
  );
};

export default SearchGists;
