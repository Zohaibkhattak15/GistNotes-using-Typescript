import { FC, useState, useEffect, useContext, useCallback } from 'react';
import { StarOutlined, ForkOutlined } from "@ant-design/icons/lib/icons";
import { Table, Row, Col } from "antd";
import { ColumnsType } from 'antd/lib/table';
import { GistContext } from "../../context/GistContext";
import Loader from "../common/Spinner/Spinner";
import { UserNameSection, Img, Username } from "../common/Table/style";
import { Section } from "./style";
import { getStaredGists } from "../../utils/fetchAPIs";
import { VISIBLESCREEN } from '../../context/ActionTypes';

const columns: ColumnsType<any> = [
  {
    key: "1",
    title: "Name",
    dataIndex: "owner",
    sorter: true,
    render: (owner: any) => {
      return (
        <UserNameSection>
          <span>
            <Img src={owner?.avatar_url} alt="Profile Pics" />
          </span>
          <Username>{owner?.login}</Username>
        </UserNameSection>
      );
    },
    width: "20%",
  },
  {
    key: "2",
    title: "Date",
    dataIndex: "created_at",
    width: "20%",
  },
  {
    key: "3",
    title: "Time",
    dataIndex: "created_at",
  },
  {
    key: "4",
    title: "Keyword",
    dataIndex: "files",
    render: (files: any) => <span> ${Object.keys(files)[0]} </span>,
  },
  {
    key: "5",
    title: "Notebok Name",
    dataIndex: "description",
  },
  {
    key: "6",
    title: "Actions",
    dataIndex: "",
    render: (value: any) => {
      return (<Row gutter={[16, 16]}>
        <Col>
          <StarOutlined style={{ color: "#5acba1" }} />
        </Col>
        <Col>
          <ForkOutlined style={{ color: "#5acba1" }} />
        </Col>
      </Row>);
    },
  },
];

const StaredGists: FC = () => {
  const [staredGists, setStaredGists] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { dispatch } = useContext(GistContext);

  const getStared = useCallback(async () => {
    setLoading(true);
    const resp = await getStaredGists();
    setStaredGists(resp);
    setLoading(false);
  }, []);
  const showUniqueGistRecord = useCallback(
    (id) => {
      dispatch({
        type: VISIBLESCREEN,
        payload: {
          tab: 9,
          gistID: id,
        },
      });
    }, []);

  const onRow = useCallback((record: any) => {
    return { onClick: () => showUniqueGistRecord(record?.id) };
  }, [])

  useEffect(() => {
    getStared();
  }, []);

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
