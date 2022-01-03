
import { LOGIN, USERNAME, VISIBLESCREEN , PROFILEIMG } from "../constants/index";
import { dispatch } from "../types/ContextTypes";
import { openNotification } from "./CommonUtils";
import { loginAuthUser } from "./fetchAPIs";

export const loginInputFormRules = (required: boolean, name: string) => {
  return [
    {
      required: required,
      message: `Please input your ${name}!`,
    },
  ];
};

export const loginAuth = (username: string, dispatch: dispatch) => {
  if (username === USERNAME) {
    loginAuthUser(username).then((resp) => {
      dispatch({
        type: PROFILEIMG,
        payload: {
          imgURL:resp?.avatar_url,
        },
      });
    });
    
    dispatch({
      type: LOGIN,
      payload: {
        userName: username,
        isLoggedin: true,
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
  } else {
    openNotification("Failed", "Wrong Username.....");
  }
};
