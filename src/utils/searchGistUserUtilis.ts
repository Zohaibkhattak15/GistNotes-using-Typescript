import { searchRecords } from "./fetchAPIs"


export const getFilterData = (searchValue:string , loading :boolean , setLoading : any, searchRecordsData : any , setSearchRecordsData : any ) => {
    setLoading(true);
    const resp = searchRecords(searchValue).then(response => {
      setLoading(false);
      setSearchRecordsData(response);
    }).catch(err => err);
    return { loading ,searchRecordsData }
  };