import React, { useCallback, useContext, useState } from "react";
import { FormDiv } from "./style";
import { loginAuthUser } from "../../utils/fetchAPIs";
import { GistContext } from "../../context/GistContext";
import { Button, Input, Form, Alert } from "antd";
import { openNotification, loginInputFormRules } from "../../utils/loginUtils";
import { LOGIN, VISIABLESCREEN } from "../../context/ActionTypes";

const Login = () => {
  const [name, setName] = useState<string>("");
  const {state, dispatch } = useContext(GistContext);
  const [showError, setShowError] = useState<boolean>(false);

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setName(e.currentTarget.value);
  };

  const loginAuth = () => {
    const { PAT } = state;
   
    loginAuthUser(name)
      .then((resp) => {
        if (resp?.login === name) {
          localStorage.setItem("authUserName", JSON.stringify(name));
          localStorage.setItem("token", JSON.stringify(PAT));
          openNotification();
          dispatch({
            type: VISIABLESCREEN,
            payload: {
              tab: 3,
              gistID: "",
            },
          });
        }
      })
      .catch(err => setShowError(true));
      dispatch({
        type: LOGIN,
        payload: {
          userName : name,
          isLoggedin : true
        },
      });
  };
  const displayError = showError ? ( <Alert message="Wrong Username..." type="error" />) : null;

  return (
    <>
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
    </>
  );
};

export default Login;
