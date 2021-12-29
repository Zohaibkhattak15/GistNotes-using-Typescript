import { FC, useState, useEffect, useContext, useCallback } from 'react';
import { Table } from "antd";
import { GistContext } from "../../context/GistContext";
import Loader from "../common/Spinner/Spinner";
import { Section } from "./style";
import { VISIBLESCREEN } from '../../constants/index';
import { columns, getStared } from '../../utils/StarGistUtilis';

const StaredGists: FC = () => {
  const [staredGists, setStaredGists] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { dispatch } = useContext(GistContext);

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
    }, []);
    /* eslint-enable */


  const onRow = useCallback((record: any) => {
    return { onClick: () => showUniqueGistRecord(record?.id) };
    /* eslint-disable */
  }, [])
  /* eslint-enable */

  useEffect(() => {
    getStared(staredGists , setStaredGists , loading , setLoading);
    /* eslint-disable */
  }, []);
   /* eslint-enable */

  return (
    loading ?
      <Loader />
      :
      <Section>
        <Table
          rowKey="id"
          columns={columns}
          dataSource={[...staredGists]}
          onRow={onRow}
        />
      </Section>
  );
};

export default StaredGists;
