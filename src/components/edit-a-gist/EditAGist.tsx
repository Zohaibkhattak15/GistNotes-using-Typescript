import React, { useState, useEffect, useContext, useCallback } from "react";
import { Section, Heading } from "../create-a-gist/style";
import { getGistObj } from "../../utils/FetchAPIs";
import { GistContext } from "../../context/GistContext";
import { Form, Input, Button } from "antd";
import { editGist } from "../../utils/EditGistUtilis";

const EditAGist = () => {
  const [gistData, setGistData] = useState<any>();
  const { state, dispatch } = useContext(GistContext);
  const { gistID } = state;
  const desp = gistData.description;

  const getAGist = useCallback(async () => {
    const resp = await getGistObj(gistID);
    setGistData(resp);
  /* eslint-disable */
  }, []);
/* eslint-enable */

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => setGistData({ description: e.currentTarget.value });
  const handleFinish = () => editGist(gistID ,desp, dispatch);

  useEffect(() => {
    getAGist();
  }, []);

  return (
    <Section>
      <Form onFinish={handleFinish}>
        <Heading className="create-gist-heading">
          Update Gist Description
        </Heading>
        <Form.Item>
          <Input
            size="large"
            placeholder="Enter gist Discription..."
            onChange={handleInputChange}
            value={gistData?.description}
          />
        </Form.Item>
        <Form.Item>
          <Button size="large" htmlType="submit">
            Save Gist
          </Button>
        </Form.Item>
      </Form>
    </Section>
  );
};
export default EditAGist;
