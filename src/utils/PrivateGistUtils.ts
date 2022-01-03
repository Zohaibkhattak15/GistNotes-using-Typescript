import { privateGistsRecord } from "./fetchAPIs";

export const getPrivateGists = async (loading :boolean, setLoading: any ,privateGistsList :any, setPrivateGistsList : any ) => {
    setLoading(true);
    const resp = await privateGistsRecord();
    setLoading(false);
    setPrivateGistsList(resp);
    return { loading, privateGistsList} ;
  };

