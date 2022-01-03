import React, {
  useContext, useState,
} from 'react';
import { Button, Form, Input } from 'antd';
import { FormWrapper } from './style';
import { GistContext } from '../../context/GistContext';
import { loginAuth, loginInputFormRules } from '../../utils/LoginUtils';

const Login = () => {
  const [userName, setUserName] = useState<string>('');
  const { dispatch } = useContext(GistContext);

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setUserName(e.currentTarget.value);
  };

  const handleFinish = (userName: string) => {
    loginAuth(userName, dispatch);
  };

  return (
    <FormWrapper>
      <Form onFinish={handleFinish}>
        <Form.Item
          rules={loginInputFormRules(true, 'username')}
        >
          <Input
            size="large"
            placeholder="Enter username"
            value={userName}
            onChange={handleInputChange}
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
