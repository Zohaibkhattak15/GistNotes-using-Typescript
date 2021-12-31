import { searchRecords } from "./FetchAPIs"

export const getFilterData = async (searchValue: string, loading: boolean, setLoading: (loading: boolean) => void, searchRecordsData: any, setSearchRecordsData: any) => {
  setLoading(true);
  await searchRecords(searchValue).then(response => {
    setLoading(false);
    setSearchRecordsData(response);
  }).catch(err => err);
  return { loading, searchRecordsData }
};