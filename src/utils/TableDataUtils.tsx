import React from 'react';
import { Col, Row } from 'antd';
import { StarOutlined, ForkOutlined } from '@ant-design/icons/lib/icons';
import { UserNameSection, Username, Img } from '../components/common/Table/style';

export const columns = [
  {
    key: '1',
    title: 'Name',
    dataIndex: 'owner',
    sorter: true,
    render: (owner: any) => (
      <UserNameSection>
        <span>
          <Img src={owner?.avatar_url} alt="Profile Pics" />
        </span>
        <Username>{owner?.login}</Username>
      </UserNameSection>
    ),
    width: '20%',
  },
  {
    key: '2',
    title: 'Date',
    dataIndex: 'created_at',
    width: '20%',
  },
  {
    key: '3',
    title: 'Time',
    dataIndex: 'created_at',
  },
  {
    key: '4',
    title: 'Keyword',
    dataIndex: 'files',
    render: (files: any) => (
      <span>
        $
        {Object.keys(files)[0]}
      </span>
    ),
  },
  {
    key: '5',
    title: 'Notebok Name',
    dataIndex: 'description',
  },
  {
    key: '6',
    title: 'Actions',
    dataIndex: '',
    render: () => (
      <Row gutter={[16, 16]}>
        <Col>
          <StarOutlined style={{ color: '#5acba1' }} />
        </Col>
        <Col>
          <ForkOutlined style={{ color: '#5acba1' }} />
        </Col>
      </Row>
    ),
  },
];
