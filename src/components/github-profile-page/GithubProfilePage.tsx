import { useState, useEffect, useContext } from "react";
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
import CardaContent from "./CardaContent";
import { getLoginData, getGists, checkGist, starThisGist } from "../../utils/GitHubProfileUtilis";


const GitHubProfilePage = () => {
  const [authUserRecord, setAuthUserRecord] = useState<any>();
  const [gists, setGists] = useState<any>("");
  const [gistStarValue, setGistStarValue] = useState<number>(0);
  const { state } = useContext(GistContext);
  const { gistID } = state;

  useEffect(() => {
    getLoginData(setAuthUserRecord, authUserRecord);
    getGists(setGists, gists);
    checkGist(setGistStarValue, gistStarValue, gistID);
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
            starThisGist={starThisGist(gistStarValue, setGistStarValue, gistID)}
          />
        </CardSection>
      </Section>
    </>
  );
};

export default GitHubProfilePage;
