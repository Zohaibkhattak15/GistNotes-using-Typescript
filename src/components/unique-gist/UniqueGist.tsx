import { useState, useContext, useEffect } from "react";

import {
  Div,
  Section,
  ContentBody,
} from "./style";
import { GistContext } from "../../context/GistContext";
import ProfileContent from "./ProfileContent";
import FileContent from "./FileContent";
import { getGistData , checkGist , updateGist , deleteGist , starThisGist , forkThisGist } from "../../utils/UniqueGist";



const UniqueGist = () => {
  const [uniqueData, setUniqueData] = useState([]);
  const [gistStarValue, setGistStarValue] = useState(0);
  const [gistForkValue, setGistForkValue] = useState(0);
  const { state, dispatch } = useContext(GistContext);
  const { tab, gistID } = state;
  let filename;

  forkThisGist(gistForkValue , setGistForkValue, gistID)
  starThisGist(gistStarValue,setGistStarValue , gistID );
  deleteGist(dispatch , gistID)
  updateGist(dispatch , gistID);

  useEffect(() => {
    getGistData(uniqueData, setUniqueData , gistID);
    checkGist(gistStarValue , setGistStarValue, gistID );
  }, []);

  return (
    <Div>
      <Section>
            <ProfileContent  
            data={uniqueData} 
            filename={filename}  
            updateGist={updateGist}  
            deleteGist={deleteGist}
            starThisGist={starThisGist}
            forkThisGist={forkThisGist}
            gistStarValue={gistStarValue}  
            gistForkValue={gistForkValue}
            />
      </Section>
      <ContentBody>
            <FileContent 
            filename={filename}
            uniqueData={uniqueData}
            />
      </ContentBody>
    </Div>
  );
};

export default UniqueGist;
