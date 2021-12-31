import {LOGIN,USERNAME,VISIBLESCREEN} from "../constants";
import {loginAuthUser} from "./FetchAPIs";
import { openNotification } from "./CommonUtils";
import { dispatch } from "../types/ContextTypes";

  export const loginInputFormRules = (required : boolean , name : string)  =>{
    return ([
       {
         required: required,
         message: `Please input your ${name}!`,
       },
     ])
   }

  export const loginAuth = (values:string | any , dispatch:dispatch) => {
     if(values.username === USERNAME){
    loginAuthUser(values.username).then(resp => resp)
         dispatch({
           type: LOGIN,
           payload: {
             userName: values.username,
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
 };
