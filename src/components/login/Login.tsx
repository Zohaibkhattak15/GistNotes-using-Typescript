import React, { useCallback, useContext, useState } from "react";
import { FormDiv } from "./style";
import { loginAuthUser } from "../../utils/fetchAPIs";
import { GistContext } from "../../context/GistContext";
import { Button, Input, Form, Alert } from "antd";
import { openNotification } from "../../utils/commonUtilis";
import { LOGIN, VISIBLESCREEN } from "../../constants/index";
import { loginInputFormRules } from "../../utils/loginUtils";


const Login = () => {
  const [name, setName] = useState<string>("");
  const { dispatch } = useContext(GistContext);
  const [showError, setShowError] = useState<boolean>(false);

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setName(e.currentTarget.value);
  };

  const loginAuth = useCallback(() => {
    loginAuthUser(name)
      .then((resp) => {
        if (resp?.data?.login === name) {
          dispatch({
            type: LOGIN,
            payload: {
              userName: name,
              isLoggedin: true
            },
          });
          openNotification("Login", "Login Successfully...");
          dispatch({
            type: VISIBLESCREEN,
            payload: {
              tab: 3,
              gistID: "",
            },
          });
        }
        else {
          openNotification("Failed", "Wrong Username.....");
        }
      });
  }, []);
  const displayError = showError ? (<Alert message="Wrong Username..." type="error" />) : null;

  return (
    <FormDiv>
      {displayError}
      <Form onFinish={loginAuth} autoComplete="off">
        <Form.Item
          name="username"
          rules={loginInputFormRules(true, "username")}
        >
          <Input
            size="large"
            placeholder="Enter username"
            value={name}
            onChange={handleInputChange}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" size="large" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </FormDiv>
  );
};

export default Login;
