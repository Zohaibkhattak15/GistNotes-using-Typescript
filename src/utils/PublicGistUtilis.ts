import { publicGistsRecord } from "./fetchAPIs";

  export const getPublicGists = async (loading:boolean , setLoading:(loading :boolean) => void ,publicGistsList:any , setPublicGistsList:any ) => {
    setLoading(true);
    let resp = await publicGistsRecord();
    setLoading(false);
    setPublicGistsList(resp);
    return { loading ,publicGistsList }
  };