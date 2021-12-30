import { useContext, useCallback } from "react";
import { GistContext } from "../../../context/GistContext";
import { Table } from "antd";
import { Section } from "./style";
import { columns } from "../../../utils/TableDataUtilis";
import { VISIBLESCREEN } from "../../../constants";

const TableData = ({ publicGistsDisplay, privateGistsDisplay }: any) => {
  const { dispatch } = useContext(GistContext);
  const dataSource = publicGistsDisplay ? publicGistsDisplay : privateGistsDisplay;

  const showUniqueGistRecord = useCallback(
    (id) => {
      dispatch({
        type: VISIBLESCREEN,
        payload: {
          tab: 9,
          gistID: id,
        },
      });
      /* eslint-disable */
    },[]);
    /* eslint-enable */

  const getID = useCallback((record: any) => {
    return {
      onClick: () => showUniqueGistRecord(record?.id)
    }
  },[showUniqueGistRecord])
  return (
    <>
      <Section>
        <Table
          rowKey="id"
          columns={columns}
          dataSource={dataSource}
          onRow={record => getID(record)}
        />
      </Section>
    </>
  );
};
export default TableData;
