import { useState, useContext, useEffect, useCallback } from "react";
import {
  Div,
  Section,
  ContentBody,
} from "./style";
import {
  delAGist,
  staredAGist,
  unStaredAGist,
  forkedGist,
} from "../../utils/fetchAPIs";
import { GistContext } from "../../context/GistContext";
import { Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import ProfileContent from "./ProfileContent";
import FileContent from "./FileContent";
import { VISIBLESCREEN } from "../../constants/index";
import { getGistData , checkGist } from "../../utils/UniqueGist";

const { confirm } = Modal;

const UniqueGist = () => {
  const [uniqueData, setUniqueData] = useState([]);
  const [gistStarValue, setGistStarValue] = useState(0);
  const [gistForkValue, setGistForkValue] = useState(0);
  const { state, dispatch } = useContext(GistContext);
  const { tab, gistID } = state;
  let filename;

  const starThisGist = useCallback( async () => {
    if (gistStarValue === 0) {
      await staredAGist(gistID)
        .then(() => setGistStarValue(gistStarValue + 1))
        .catch((err) => err);
    } else {
      await unStaredAGist(gistID)
        .then(() => setGistStarValue(gistStarValue - 1))
        .catch((err) => err);
    }
  },[staredAGist , unStaredAGist]);

  const forkThisGist = useCallback(async () => {
    let alreadyFork = 0;
    await forkedGist(gistID)
      .then(() => (alreadyFork = 1))
      .catch(() => alreadyFork);
    if (alreadyFork) {
      setGistForkValue(gistForkValue + 1);
    }
  },[forkedGist]);

  const deleteGist = useCallback((id : string) => {
    confirm({
      title: "Do you Want to delete these Gist?",
      icon: <ExclamationCircleOutlined />,
      content: "",
      onOk() {
        delAGist(id);
        dispatch({
          type: VISIBLESCREEN,
          payload: {
            tab: 3,
            gistID: "",
          },
        });
      },
      onCancel() {
        dispatch({
          type: VISIBLESCREEN,
          payload: {
            tab: 9,
            gistID: "",
          },
        });
      },
    });
  },[delAGist]);

  const updateGist = useCallback((id) => {
    dispatch({
      type: VISIBLESCREEN,
      payload: {
        tab: 11,
        gistID: id,
      },
    });
  },[]);


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
