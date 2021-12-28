import { notification } from "antd";


export const openNotification = () => {
    const args = {
      message: "Login",
      description: "Login Successfully...",
      duration: 0,
    };
    notification.success(args);
  };

  export const loginInputFormRules = (required : boolean , name : string)  =>{
    return ([
       {
         required: required,
         message: `Please input your ${name}!`,
       },
     ])
   }
