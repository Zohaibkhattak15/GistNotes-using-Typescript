import React, { useState, useEffect, useContext, useCallback } from "react";
import { Section, Heading } from "../create-a-gist/style";
import { updateAGist, getGistObj } from "../../utils/fetchAPIs";
import { GistContext } from "../../context/GistContext";
import { Form, Input, Button } from "antd";
import { VISIBLESCREEN } from "../../constants/index";

const EditAGist = () => {
  const [gistData, setGistData] = useState<any>();
  const { state, dispatch } = useContext(GistContext);
  const { gistID } = state;

  const editGist = useCallback(async () => {
    const {description} = gistData
    await updateAGist(gistID, description);
    dispatch({
      type: VISIBLESCREEN,
      payload: {
        tab: 3,
        gistID: "",
      },
    });
    /* eslint-disable */
  }, []);
/* eslint-enable */

  const getAGist = useCallback(async () => {
    const resp = await getGistObj(gistID);
    setGistData(resp);
    console.log(resp)
        /* eslint-disable */
  }, []);
/* eslint-enable */

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => setGistData({ description: e.currentTarget.value });

  useEffect(() => {
    getAGist();
  }, []);

  return (
    <Section>
      <Form onFinish={editGist}>
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
