import { VISIBLESCREEN } from "../constants";
import { createAGist } from "./fetchAPIs";
import { gistDataFormType } from '../types/CreateGistFormTypes';
import { dispatch } from "../types/ContextTypes";
import { openNotification } from './CommonUtils';


export const formInputRules = (required: boolean, name: string) => {
  return ([
    {
      required: required,
      message: `Please input your ${name}!`,
    },
  ])
}

export const creatGist = (gistFormData: gistDataFormType, dispatch: dispatch) => {
  const gistData = {
    description: gistFormData?.description,
    privacy: gistFormData?.privacy,
    files: {
      [gistFormData?.fileName]: {
        content: gistFormData?.content,
      },
    },
  }
  createAGist(gistData);
  openNotification("Gist Created", "Your gist has been created.");
  dispatch({
    type: VISIBLESCREEN,
    payload: {
      tab: 3,
      gistID: "",
    },
  });
};