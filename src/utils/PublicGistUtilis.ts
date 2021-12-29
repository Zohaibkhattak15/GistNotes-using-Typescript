import { publicGistsRecord } from "./fetchAPIs";


  export const getPublicGists = async (loading:boolean , setLoading:any ,publicGistsList:any , setPublicGistsList:any ) => {
    setLoading(true);
    let resp = await publicGistsRecord();
    setLoading(false);
    setPublicGistsList(resp);
    return { loading ,publicGistsList }
  };