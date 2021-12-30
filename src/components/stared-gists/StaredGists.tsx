import { FC, useState, useEffect, useContext, useCallback } from 'react';
import { Table } from "antd";
import { GistContext } from "../../context/GistContext";
import Loader from "../common/Spinner/Spinner";
import { Section } from "./style";
import { VISIBLESCREEN } from '../../constants/index';
import { columns, getStared } from '../../utils/StarGistUtilis';

const StaredGists: FC = () => {
  const [staredGists, setStaredGists] = useState<any>();
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
    }, [dispatch]);


  const onRow = useCallback((record: any) => {
    return { onClick: () => showUniqueGistRecord(record?.id) };
  }, [])

  useEffect(() => {
    getStared(staredGists , setStaredGists , loading , setLoading);
  }, []);

  return (
    loading ?
      <Loader />
      :
      <Section>
        <Table
          rowKey="id"
          columns={columns}
          dataSource={staredGists}
          onRow={onRow}
        />
      </Section>
  );
};

export default StaredGists;
