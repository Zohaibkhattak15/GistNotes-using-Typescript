import React, { useCallback, useContext, useState } from "react";
import { FormWrapper } from "./style";
import { GistContext } from "../../context/GistContext";
import { Button } from "antd";
import { loginAuth, loginInputFormRules } from "../../utils/loginUtils";
import { Form, Input } from 'antd';

const Login = () => {
  const [name, setName] = useState<any>("");
  const { dispatch } = useContext(GistContext);

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setName(e.currentTarget.value);
  };
  const handleFinish = () =>{
     loginAuth(name, dispatch);
    };
  

  return (
    <FormWrapper>
        <Form onFinish={handleFinish}>
          <Form.Item
            name="name"
            rules={loginInputFormRules(true, "username")}
          >
            <Input
              size="large"
              placeholder="Enter username"
              value={name}
              onChange={handleInputChange}
              name="name"
            />
          </Form.Item>
          <Button type="primary" size="large" htmlType="submit">
            Login
          </Button>
        </Form>
    </FormWrapper>
  );
};

export default Login;
