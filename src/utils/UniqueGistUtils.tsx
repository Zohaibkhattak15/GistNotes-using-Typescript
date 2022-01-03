import { VISIBLESCREEN } from "../constants";
import { getPublicGist, checkGistStared, delAGist } from "./fetchAPIs";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import { dispatch } from "../types/ContextTypes";

const { confirm } = Modal;

export const getGistData = async (uniqueData: any, setUniqueData: any, gistID: string) => {
  const resp = await getPublicGist(gistID);
  setUniqueData(resp);
  return uniqueData;
};
export const checkGist = (gistStarValue: number, setGistStarValue: any, gistID: string) => {
  checkGistStared(gistID).then(() => setGistStarValue(1));
  return gistStarValue;
};
export const updateGist = (id: string, dispatch: dispatch) => {
  dispatch({
    type: VISIBLESCREEN,
    payload: {
      tab: 11,
      gistID: id,
    },
  });
};

export const deleteGist = (id: string, dispatch: dispatch) => {
  confirm({
    title: "Do you Want to delete these Gist?",
    icon: <ExclamationCircleOutlined />,
    content: "",
    onOk() {
      delAGist(id);
      dispatch({
        type: VISIBLESCREEN,
        payload: {
          tab: 3,
          gistID: "",
        },
      });
    },
    onCancel() {
      dispatch({
        type: VISIBLESCREEN,
        payload: {
          tab: 9,
          gistID: "",
        },
      });
    },
  });
};
