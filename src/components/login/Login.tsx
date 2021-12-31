import React, { useCallback, useContext, useState } from "react";
import { FormWrapper } from "./style";
import { GistContext } from "../../context/GistContext";
import { Button } from "antd";
import { loginAuth, loginInputFormRules } from "../../utils/LoginUtils";
import { Form, Input } from 'formik-antd';
import * as Yup from 'yup';
import { Formik } from "formik";

const Login = () => {
  const initialValue ={ name : ""}
  const [name, setName] = useState<any>("");
  const { dispatch } = useContext(GistContext);

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setName(e.currentTarget.value);
  };
  const handleFinish = useCallback((values) =>{
    loginAuth(values, dispatch)
    },[]);
  const CreateLoginFormSchema = Yup.object({
    username: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required UserName'),
  });

  return (
    <FormWrapper>
      <Formik initialValues={initialValue} onSubmit={handleFinish} validationSchema={CreateLoginFormSchema} >
        <Form>
          <Form.Item
            name="username"
            rules={loginInputFormRules(true, "username")}
          >
            <Input
              size="large"
              placeholder="Enter username"
              value={name}
              onChange={handleInputChange}
              name="username"
            />
          </Form.Item>
          <Button type="primary" size="large" htmlType="submit">
            Login
          </Button>
        </Form>
      </Formik>
    </FormWrapper>
  );
};

export default Login;
