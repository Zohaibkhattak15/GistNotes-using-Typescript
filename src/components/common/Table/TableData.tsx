import { useContext, useCallback } from 'react';
import { Table } from 'antd';
import { GistContext } from '../../../context/GistContext';
import { Section } from './style';
import { columns } from '../../../utils/TableDataUtils';
import { VISIBLESCREEN } from '../../../constants';

const TableData = ({ publicGistsDisplay, privateGistsDisplay }: any) => {
  const { dispatch } = useContext(GistContext);
  const dataSource = publicGistsDisplay || privateGistsDisplay;

  const showUniqueGistRecord = useCallback((id) => {
    dispatch({
      type: VISIBLESCREEN,
      payload: {
        tab: 9,
        gistID: id,
      },
    });
  }, [dispatch]);

  const getID = useCallback((record: any) => ({
    onClick: () => showUniqueGistRecord(record?.id),
  }), [showUniqueGistRecord]);
  return (
    <Section>
      <Table
        rowKey="id"
        columns={columns}
        dataSource={dataSource}
        onRow={(record) => getID(record)}
      />
    </Section>
  );
};
export default TableData;
