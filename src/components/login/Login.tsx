import React, { useCallback, useContext, useState } from 'react';
import { Button, Form, Input } from 'antd';
import { FormWrapper } from './style';
import { GistContext } from '../../context/GistContext';
import { loginAuth, loginInputFormRules } from '../../utils/LoginUtils';

const Login = () => {
  const [name, setName] = useState<string>('');
  const { dispatch } = useContext(GistContext);

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setName(e.currentTarget.value);
  };
  const handleFinish = () => {
    loginAuth(name, dispatch);
  };

  return (
    <FormWrapper>
      <Form onFinish={handleFinish}>
        <Form.Item
          name="name"
          rules={loginInputFormRules(true, 'username')}
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
