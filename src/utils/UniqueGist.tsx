import { getPublicGist, checkGistStared} from "./fetchAPIs";

export const getGistData = async (uniqueData: any, setUniqueData: any, gistID: string) => {
    const resp = await getPublicGist(gistID);
    setUniqueData(resp);
    return uniqueData;
};

export const checkGist = (gistStarValue: number, setGistStarValue: any, gistID: string) => {
    checkGistStared(gistID).then(() => setGistStarValue(1));
    return gistStarValue;
};


