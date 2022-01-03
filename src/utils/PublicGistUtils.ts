import { publicGistsRecord } from './FetchAPIs';

export const getPublicGists = async (loading:boolean, setLoading:(loading :boolean) => void, publicGistsList:any, setPublicGistsList:any) => {
  setLoading(true);
  const resp = await publicGistsRecord();
  setLoading(false);
  setPublicGistsList(resp);
  return { loading, publicGistsList };
};
