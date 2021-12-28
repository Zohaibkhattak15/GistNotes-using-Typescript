import React, { useState, useEffect, useContext } from "react";
import {
  loginAuthUser,
  privateGistsRecord,
  checkGistStared,
  staredAGist,
  unStaredAGist,
} from "../../utils/fetchAPIs";
import {
  Section,
  ProlfieLeft,
  Button,
  Heading,
  CardSection,
  ProfilePicSec,
  ProfileImage,
} from "./style";
import { GistContext } from "../../context/GistContext";
import { USERNAME } from "../../constants/index";
import CardaContent from "./CardaContent";

const GitHubProfilePage = () => {
  const [authUserRecord, setAuthUserRecord] = useState<any>();
  const [gists, setGists] = useState<any>("");
  const [gistStarValue, setGistStarValue] = useState<number>(0);

  const { state } = useContext(GistContext);
  const { tab, gistID } = state;

  const getLoginData = async () => {
    let authResp = await loginAuthUser(USERNAME);
    setAuthUserRecord(authResp);
  };
  const getGists = async () => {
    const getAuthGistsResp = await privateGistsRecord();
    setGists(getAuthGistsResp);
  };

  const starThisGist = async () => {
    if (gistStarValue === 0) {
      staredAGist(gistID)
        .then(() => setGistStarValue(gistStarValue + 1))
        .catch((err) => err);
    } else {
      await unStaredAGist(gistID)
        .then(() => setGistStarValue(gistStarValue - 1))
        .catch((err) => err);
    }
  };

  const checkGist = () => {
    checkGistStared(gistID).then(() => setGistStarValue(1));
  };

  useEffect(() => {
    getLoginData();
    getGists();
    checkGist();
  }, []);

  return (
    <>
      <Section>
        <ProlfieLeft>
          <ProfilePicSec>
            <ProfileImage
              id="profile-pic"
              src={authUserRecord?.avatar_url}
              alt="zohaib"
            />
          </ProfilePicSec>
          <Heading>
            <h5>{authUserRecord?.login}</h5>
          </Heading>
          <Button>View GitHub Profile</Button>
        </ProlfieLeft>

        <CardSection>
          <CardaContent
            gists={gists}
            gistStarValue={gistStarValue}
            starThisGist={starThisGist}
          />
        </CardSection>
      </Section>
    </>
  );
};

export default GitHubProfilePage;
