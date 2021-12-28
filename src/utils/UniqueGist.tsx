import { VISIBLESCREEN } from "../constants";
import { getPublicGist, checkGistStared, delAGist , staredAGist , unStaredAGist ,forkedGist} from "./fetchAPIs";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Modal } from "antd";

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

export const updateGist = (dispatch: any, id: string) => {
    dispatch({
        type: VISIBLESCREEN,
        payload: {
            tab: 11,
            gistID: id,
        },
    });
};

export const deleteGist = (dispatch: any, id: string) => {
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


export const starThisGist = async (gistStarValue: number ,setGistStarValue: any , gistID: string ) => {
    if (gistStarValue === 0) {
      await staredAGist(gistID)
        .then(() => setGistStarValue(gistStarValue + 1))
        .catch((err) => err);
    } else {
      await unStaredAGist(gistID)
        .then(() => setGistStarValue(gistStarValue - 1))
        .catch((err) => err);
    }
  };

  
export const forkThisGist = async (gistForkValue:number , setGistForkValue:any, gistID:string) => {
    let alreadyFork = 0;
    await forkedGist(gistID)
      .then(() => (alreadyFork = 1))
      .catch(() => alreadyFork);
    if (alreadyFork) {
      setGistForkValue(gistForkValue + 1);
      return gistForkValue;
    }
  };
