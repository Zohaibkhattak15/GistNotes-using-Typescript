import { notification } from 'antd';

export const openNotification = (msg: string, desp: string) => {
  const args = {
    message: msg,
    description: desp,
    duration: 0,
  };
  if (msg === 'Login') {
    notification.success(args);
  } else if (msg === 'Failed') {
    notification.error(args);
  } else {
    notification.success(args);
  }
};
