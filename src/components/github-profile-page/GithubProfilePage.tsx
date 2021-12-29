import { useState, useEffect, useContext } from "react";
import {
  Section,
  LeftWrapper,
  Button,
  Heading,
  CardSection,
  ProfilePicSec,
  ProfileImage,
} from "./style";
import { GistContext } from "../../context/GistContext";
import CardaContent from "./CardaContent";
import { getLoginData, getGists, } from "../../utils/GitHubProfileUtilis";


const GitHubProfilePage = () => {
  const [authUserRecord, setAuthUserRecord] = useState<any>();
  const [gists, setGists] = useState<any>("");
  const [gistStarValue, setGistStarValue] = useState<number>(0);
  const { state } = useContext(GistContext);
  const { gistID } = state;

  useEffect(() => {
    getLoginData(setAuthUserRecord, authUserRecord);
    getGists(setGists, gists);
  }, []);

  return (
    <>
      <Section>
        <LeftWrapper>
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
        </LeftWrapper>

        <CardSection>
          <CardaContent
            gists={gists}
            gistStarValue={gistStarValue}
          />
        </CardSection>
      </Section>
    </>
  );
};

export default GitHubProfilePage;
