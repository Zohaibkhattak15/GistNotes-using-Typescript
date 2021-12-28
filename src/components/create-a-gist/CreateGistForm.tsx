import  { useState, useContext, useCallback } from "react";
import { Heading , Section} from "./style";
import { createAGist } from "../../utils/fetchAPIs";
import { GistContext } from "../../context/GistContext";
import { Form, Input, Select, Button } from "antd";
import {  formInputRules, openNotification } from "../../utils/createGistUtilis";
import { VISIBLESCREEN } from "../../context/ActionTypes";


const { TextArea } = Input;
const { Option } = Select;

//will be in the types files 
interface gistDataFormType {
  description : string ;
  fileName : string ;
  content : string  ;
  privacy : boolean ;
}

const CreateAGist = () => {
  const [gistFormData, setGistFormData] = useState<gistDataFormType>({
    description: "" ,
    fileName : "" ,
    content : "" ,
    privacy: true
  })

  const changeDescription = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setGistFormData({
      ...gistFormData,
      description: event.currentTarget.value
      });
 };
  const changeFileName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGistFormData({
      ...gistFormData,
      fileName: event.currentTarget.value
      });
  };
  const changeContent = (event: React.ChangeEvent<HTMLTextAreaElement>) : void => {
    setGistFormData({
      ...gistFormData,
      content: event.currentTarget.value
      });
  };
  
  const { dispatch } = useContext(GistContext);
  const creatGist = useCallback(() => {
    const gistData = {
      description: gistFormData?.description,
      privacy : gistFormData?.privacy,
      files: {
        [gistFormData?.fileName]: {
          content: gistFormData?.content,
        },
      },
    }
    createAGist(gistData);
    openNotification();
    dispatch({
      type: VISIBLESCREEN,
      payload: {
        tab: 3,
        gistID: "",
      },
    });
  }, []);

  return (
    <Section>
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
      </Section>
  );
};

export default CreateAGist;
