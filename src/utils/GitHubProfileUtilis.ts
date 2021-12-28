import { USERNAME } from "../constants";
import { checkGistStared, loginAuthUser, privateGistsRecord, staredAGist, unStaredAGist } from "./fetchAPIs";



export const getLoginData = async (setAuthUserRecord: any, authUserRecord: any) => {
    let authResp = await loginAuthUser(USERNAME);
    setAuthUserRecord(authResp);
    return authUserRecord;
};


export const getGists = async (setGists: any, gists: any) => {
    const getAuthGistsResp = await privateGistsRecord();
    setGists(getAuthGistsResp);
    return gists;
};


export const checkGist = (setGistStarValue: any, gistStarValue: number, gistID: string) => {
    checkGistStared(gistID).then(() => setGistStarValue(1));
    return gistStarValue;
};



export const starThisGist = async (gistStarValue: number, setGistStarValue: any, gistID: string) => {
    if (gistStarValue === 0) {
        staredAGist(gistID)
            .then(() => setGistStarValue(gistStarValue + 1))
            .catch((err) => err);
    } else {
        await unStaredAGist(gistID)
            .then(() => setGistStarValue(gistStarValue - 1))
            .catch((err) => err);
    }
};


