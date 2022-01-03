import { useState, useContext, useEffect, useCallback } from "react";
import {
  Div,
  Section,
  ContentBody,
} from "./style";
import {
  staredAGist,
  unStaredAGist,
  forkedGist,
} from "../../utils/fetchAPIs";
import { GistContext } from "../../context/GistContext";
import ProfileContent from "./ProfileContent";
import FileContent from "./FileContent";
import { getGistData, checkGist, updateGist, deleteGist } from "../../utils/UniqueGistUtils";

const UniqueGist: React.FC = () => {
  const [uniqueData, setUniqueData] = useState<any>([]);
  const [gistStarValue, setGistStarValue] = useState<number>(0);
  const [gistForkValue, setGistForkValue] = useState<number>(0);
  const { state, dispatch } = useContext(GistContext);
  const { gistID } = state;
  let filename;

  const starThisGist = useCallback(async () => {
    if (gistStarValue === 0) {
      await staredAGist(gistID)
        .then(() => setGistStarValue(gistStarValue + 1))
        .catch((err) => err);
    } else {
      await unStaredAGist(gistID)
        .then(() => setGistStarValue(gistStarValue - 1))
        .catch((err) => err);
    }
  }, [gistID,gistStarValue]);

  const forkThisGist = useCallback(async () => {
    let alreadyFork = 0;
    await forkedGist(gistID)
      .then(() => (alreadyFork = 1))
      .catch(() => alreadyFork);
    if (alreadyFork) {
      setGistForkValue(gistForkValue + 1);
    }
  }, [gistForkValue,gistID]);

  const handleUpdate = useCallback(() => updateGist(gistID, dispatch),[gistID,dispatch]);
  const handleDelete = useCallback(() => deleteGist(gistID, dispatch),[gistID,dispatch]);

  useEffect(() => {
    getGistData(uniqueData, setUniqueData, gistID);
    checkGist(gistStarValue, setGistStarValue, gistID);
  }, []);
  return (
    <Div>
      <Section>
        <ProfileContent
          data={uniqueData}
          filename={filename}
          updateGist={handleUpdate}
          deleteGist={handleDelete}
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
