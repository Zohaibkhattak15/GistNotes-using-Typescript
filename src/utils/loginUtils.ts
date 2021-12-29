import {LOGIN,USERNAME,VISIBLESCREEN} from "../constants";
import {loginAuthUser} from "./FetchAPIs";
import { openNotification } from "./CommonUtilis";

  export const loginInputFormRules = (required : boolean , name : string)  =>{
    return ([
       {
         required: required,
         message: `Please input your ${name}!`,
       },
     ])
   }

  export const loginAuth = (name : string , dispatch : any) => {
     if(name === USERNAME){
    loginAuthUser(name).then(resp => resp)
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
 };
