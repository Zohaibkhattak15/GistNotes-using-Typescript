import { VISIBLESCREEN } from "../constants";
import { updateAGist } from "./FetchAPIs";

export const editGist = async (gistID : string ,desp : string , dispatch:any ) => {
    await updateAGist(gistID, desp);
    dispatch({
      type: VISIBLESCREEN,
      payload: {
        tab: 3,
        gistID: "",
      },
    });
  };
