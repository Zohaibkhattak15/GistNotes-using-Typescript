import {
  LOGIN,
  PROFILEIMG,
  USERNAME,
  VISIBLESCREEN,
} from '../constants/index';
import { dispatch } from '../types/ContextTypes';
import { openNotification } from './CommonUtils';
import { loginAuthUser } from './FetchAPIs';

export const loginInputFormRules = (required: boolean, name: string) => [
  {
    required,
    message: `Please input your ${name}!`,
  },
];

// eslint-disable-next-line no-shadow
export const loginAuth = (username: string, dispatch: dispatch) => {
  if (username === USERNAME) {
    loginAuthUser(username).then((resp) => {
      dispatch({
        type: PROFILEIMG,
        payload: {
          imgURL: resp?.avatar_url,
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
    openNotification('Login', 'Login Successfully...');
    dispatch({
      type: VISIBLESCREEN,
      payload: {
        tab: 3,
        gistID: '',
      },
    });
  } else {
    openNotification('Failed', 'Wrong Username.....');
  }
};
