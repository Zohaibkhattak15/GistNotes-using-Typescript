import { createContext } from "react";
import { USERNAME , PAT } from "../constants/Constants";
import * as ActionTypes from "./ActionTypes";


export type StateType = {
    userName : string ;
    PAT : string ;
    isLoggedin : boolean;
    tab : number ;  
    gistID : string | null | undefined;
    searchValue : string;
}

export const initialState : StateType = {
  userName: USERNAME,
  PAT: PAT,
  isLoggedin: false,
  tab:1,
  gistID: null,
  searchValue: "",
};

export type Action = 
   | {type : "LOGIN" , payload : {
    isLoggedin : boolean ,
    userName ?: string ,
    gistID ?: string ,
    PAT ?: string ,
    searchValue ?:string ,
    tab ?: number
   } } 
   | {type : "LOGOUT" , payload : {
    isLoggedin ?: boolean ,
    userName ?: string ,
    gistID ?: string ,
    PAT ?: string ,
    searchValue ?:string ,
    tab ?: number
   }} 
   | {type : "VISIBLESCREEN" , payload : {
    isLoggedin ?: boolean ,
    userName ?: string ,
    gistID ?: string | null ,
    PAT ?: string ,
    searchValue ?:string ,
    tab : number
   }} 
   | {type : "SEARCH" , payload ?: {
    isLoggedin ?: boolean ,
    userName ?: string ,
    gistID ?: string ,
    PAT ?: string ,
    searchValue :string ,
    tab : number
   }} 
  



export const GistContext = createContext<{
  state: StateType;
  dispatch: React.Dispatch<Action>;
  }>({
      state: initialState,
      dispatch: () => undefined,
  });;

export const GistReducer = (state : StateType , action: Action ) : StateType => {
  const {
    type,
    payload: { user, gistID, searchValue, tab },
  } = action;
  switch (type) {
    case ActionTypes.LOGIN:
      return {
        ...state,
        isLoggedin: true,
        userName: user,
      };
    case ActionTypes.LOGOUT:
      return state;

    case ActionTypes.VISIABLESCREEN:
      return {
        ...state,
        tab: tab,
        gistID: gistID,
      };
    case ActionTypes.SEARCH:
      return {
        ...state,
        searchValue: searchValue,
        tab: tab,
      };
    default:
      return state;
  }
};
