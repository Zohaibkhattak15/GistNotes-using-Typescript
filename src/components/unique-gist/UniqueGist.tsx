import React, { useState, useContext, useEffect } from "react";
import { GistIcons, Icon1 } from "../../githubprofilepage/style";

import {
  Div,
  Section,
  Profile,
  ContentBody,
  CardBody,
  CardBodyContent,
  ProfileImage,
  Heading,
  Filename,
  Span,
  SpanValues,
  Icon,
} from "./style";
import {
  getPublicGist,
  delAGist,
  staredAGist,
  unStaredAGist,
  forkedGist,
  checkGistStared
} from "../../../utils/fetchAPIs";
import { GistContext } from "../../../context/GistContext";

const UniqueGist = () => {
  const [uniqueData, setUniqueData] = useState([]);
  const [gistStarValue, setGistStarValue] = useState(0);
  const [gistForkValue, setGistForkValue] = useState(0);
  const [starValue, setStarValue] = useState(null);

  const { state, dispatch } = useContext(GistContext);
  const { tab, gistID } = state;

  const { files } = uniqueData;
  let filename;
  let content;
  let myContentArray;

  if (files !== undefined) {
    Object.values(files).map((file) => {
      filename = file.filename;
      content = file.content;
    });
    myContentArray = content.split(" \n");
  }

  const getGistData = async () => {
    const getGistObj = await getPublicGist(gistID).then((data) => {
      setUniqueData(data);
    });
  };

  const starThisGist = async () => {
    if (gistStarValue === 0) {
      const star = await staredAGist(gistID)
        .then((data) => (setGistStarValue(gistStarValue + 1)))
        .catch((err) => err);
    } else {
      const unStar = await unStaredAGist(gistID)
        .then((data) => setGistStarValue(gistStarValue - 1))
        .catch((err) => err);
    }
  };

  const forkThisGist = async () => {
    let alreadyFork = 0;
    let fork = await forkedGist(gistID)
      .then((data) => (alreadyFork = 1))
      .catch((err) => alreadyFork);
    if (alreadyFork) {
      setGistForkValue(gistForkValue + 1);
    }
  };

  const deleteGist = async (id) => {
    let delGist = await delAGist(id);
    dispatch({
      type: "VISIBLESCREEN",
      payload: {
        tab: 9,
        gistID: null,
      },
    });
  };

  const updateGist = (id) => {
    dispatch({
      type: "VISIBLESCREEN",
      payload: {
        tab: 11,
        gistID: id,
      },
    });
  };

  const checkGist = () => {
      checkGistStared(gistID).then(data => setGistStarValue(data?.status));
  }

  useEffect(() => {
    getGistData();
    checkGist();
  }, []);

  return (
    <Div>
      <Section>
        <Profile>
          <div>
            <ProfileImage src={uniqueData?.owner?.avatar_url} alt="profile" />
          </div>
          <div className="">
            <span className="">
              <Heading>
                {uniqueData?.owner?.login}/{filename}{" "}
              </Heading>
              <span>Created 7 housrs Ago</span>
              <br />
              <span> Broadcast Server</span>
            </span>
          </div>
        </Profile>

        <GistIcons>
          {uniqueData?.owner?.login === "Zohaibkhattak15" ? (
            <>
              <Span>
                <Icon
                  className="far fa-edit"
                  onClick={() => updateGist(uniqueData?.id)}
                />{" "}
                Edit
              </Span>
              <Span>
                <Icon
                  className="far fa-trash-alt"
                  onClick={() => deleteGist(uniqueData?.id)}
                />{" "}
                Delete
              </Span>
            </>
          ) : null}
          <Icon1>
            <Span>
              
                <Icon
                className={gistStarValue === 0 ? "far fa-star" : "fas fa-star"}
                onClick={() => starThisGist()}
              />
              
              {" "}
              Star
            </Span>
            <SpanValues>{gistStarValue}</SpanValues>
          </Icon1>
          <Icon1>
            <Span>
              <Icon
                className="fas fa-code-branch"
                onClick={() => forkThisGist()}
              />{" "}
              Fork
            </Span>
            <SpanValues>{gistForkValue}</SpanValues>
          </Icon1>
        </GistIcons>
      </Section>
      <ContentBody>
        <CardBody>
          <Icon className="fas fa-code" />
          <Filename>
            {"  "} {filename}{" "}
          </Filename>
        </CardBody>
        <CardBodyContent>
          {myContentArray !== undefined
            ? myContentArray?.map((content, index) => {
                return (
                  <span key={index}>
                    {" "}
                    <p>
                      <span style={{ fontWeight: "700", marginRight: "10px" }}>
                        {++index}
                      </span>{" "}
                      {content}{" "}
                    </p>{" "}
                  </span>
                );
              })
            : "No Content There......."}
        </CardBodyContent>
      </ContentBody>
    </Div>
  );
};

export default UniqueGist;
