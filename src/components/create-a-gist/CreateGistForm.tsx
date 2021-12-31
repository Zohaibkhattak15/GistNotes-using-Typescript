import { useState, useContext, useCallback, useMemo } from "react";
import { Heading, Section } from "./style";
import { GistContext } from "../../context/GistContext";
import { Button } from "antd";
import { formInputRules, creatGist } from "../../utils/CreateGistUtils";
import { CREATEGISTOBJ } from "../../constants/index";
import { gistDataFormType } from '../../types/CreateGistFormTypes';
import { Form, Input, Select } from 'formik-antd';
import { Formik } from "formik";
import { CreateGistFormSchema } from "../../validations";

const { TextArea } = Input;
const { Option } = Select;

const CreateAGist: React.FC = () => {
  const [gistFormData, setGistFormData] = useState<gistDataFormType>(CREATEGISTOBJ)
  const { dispatch } = useContext(GistContext);

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
  const changeContent = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setGistFormData({
      ...gistFormData,
      content: event.currentTarget.value
    });
  };

  const validations = useMemo(() => CreateGistFormSchema(), []);

  const handleFinish = useCallback((values) => {
    creatGist(values, dispatch)
  }, [])

  return (
    <Section>
      <Formik initialValues={gistFormData} onSubmit={handleFinish} validationSchema={validations} >
        <Form>
          <Heading>Create A Gist</Heading>
          <Form.Item
            rules={formInputRules(true, "description")}
            name="description"
          >
            <Input
              size="large"
              placeholder="Enter gist Discription..."
              onChange={changeDescription}
              type="description"
              id="description"
              name="description"
            />
          </Form.Item>
          <Form.Item name="fileName" rules={formInputRules(true, "filename")} >
            <Input
              placeholder="Enter File name..."
              size="large"
              onChange={changeFileName}
              name="fileName"
            />
          </Form.Item>
          <Form.Item name="content" rules={formInputRules(true, "content")} >
            <TextArea
              rows={4}
              placeholder="Enter File Content..."
              size="large"
              onChange={changeContent}
              name="content"
            />
          </Form.Item>
          <Form.Item name="privacy">
            <Select
              size="large"
              name="privacy"
            >
              <Option value="public"> Public</Option>
              <Option value="private">Private</Option>
            </Select>
          </Form.Item>
          <Button size="large" htmlType="submit">
            Create Gist
          </Button>
        </Form>
      </Formik>
    </Section>
  );
};

export default CreateAGist;
