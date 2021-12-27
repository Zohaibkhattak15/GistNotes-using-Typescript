import  { useState, useContext, useCallback } from "react";
import { FormDiv, Heading } from "./style";
import { createAGist } from "../../utils/fetchAPIs";
import { GistContext } from "../../App";
import { Form, Input, Select, Button } from "antd";
import {  formInputRules, openNotification } from "../../utils/createGistUtilis";


const { TextArea } = Input;
const { Option } = Select;

const CreateAGist = () => {
  const [gistFormData, setGistFormData] = useState({
    description: "" ,
    fileName : "" ,
    content : "" ,
    privacy: ""
  })

  const changeDescription = e => {
    setGistFormData({
      ...gistFormData,
      description: e.target.value
      });
 };
  const changeFileName = e => {
    setGistFormData({
      ...gistFormData,
      fileName: e.target.value
      });
  };
  const changeContent = e => {
    setGistFormData({
      ...gistFormData,
      content: e.target.value
      });
  };
  
  const getStatus = (value) => {
    if (value === "public") {
      setGistFormData({
        ...gistFormData,
        privacy:"public"
      });
    } else 
    {
      setGistFormData({
        ...gistFormData,
       privacy: "private"
      });
    }
  }

  const { dispatch } = useContext(GistContext);
  const creatGist = useCallback(() => {
    const gistData = {
      description: gistFormData.description,
      privacy : gistFormData.privacy,
      files: {
        [gistFormData.fileName]: {
          content: gistFormData.content,
        },
      },
    }
    createAGist(gistData);
    openNotification();
    dispatch({
      type: "VISIBLESCREEN",
      payload: {
        tab: 3,
        gistID: null,
      },
    });
  }, []);



  return (
    <FormDiv>
      <Form onFinish={creatGist} autoComplete="off" >
        <Heading>Create A Gist</Heading>
        <Form.Item
          rules={formInputRules(true, "description")}
          name="description"
        >
          <Input
            size="large"
            placeholder="Enter gist Discription..."
            onChange={changeDescription}
          />
        </Form.Item>
        <Form.Item  name="filename" rules={formInputRules(true, "filename")} >
          <Input
            placeholder="Enter File name..."
            size="large"
            onChange={changeFileName}
          />
        </Form.Item>
        <Form.Item  name="content" rules={formInputRules(true, "content")} >
          <TextArea
            rows={4}
            placeholder="Enter File Content..."
            size="large"
            onChange={changeContent}
            
          />
        </Form.Item>
        <Form.Item>
          <Select
           size="large"
           onChange={(value) => getStatus(value)}
          >
            <Option value="public"> Public</Option>
            <Option value="private">Private</Option>
          </Select>
        </Form.Item>

        <Form.Item>
          <Button size="large" htmlType="submit">
            Create Gist
          </Button>
        </Form.Item>
      </Form>
    </FormDiv>
  );
};

export default CreateAGist;
