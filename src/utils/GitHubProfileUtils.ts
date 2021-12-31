import { USERNAME } from "../constants";
import { loginAuthUser, privateGistsRecord } from "./FetchAPIs";

export const getLoginData = async (setAuthUserRecord: any, authUserRecord: any) => {
    await loginAuthUser(USERNAME).then(resp => {
        setAuthUserRecord(resp?.data)
    });
    return authUserRecord;
};
export const getGists = async (setGists: any, gists: any) => {
    const getAuthGistsResp = await privateGistsRecord();
    setGists(getAuthGistsResp);
    return gists;
};


