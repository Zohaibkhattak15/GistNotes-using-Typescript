import { useState, useEffect } from 'react';
import {
  Section,
  LeftWrapper,
  Button,
  Heading,
  CardSection,
  ProfilePicWrapper,
  ProfileImage,
} from './style';
import CardaContent from './CardaContent';
import { getLoginData, getGists } from '../../utils/GitHubProfileUtils';

const GitHubProfilePage: React.FC = () => {
  const [authUserRecord, setAuthUserRecord] = useState<any>();
  const [gists, setGists] = useState<any>('');
  const [gistStarValue] = useState<number>(0);

  useEffect(() => {
    getLoginData(setAuthUserRecord, authUserRecord);
    getGists(setGists, gists);
  }, []);

  return (
    <Section>
      <LeftWrapper>
        <ProfilePicWrapper>
          <ProfileImage
            id="profile-pic"
            src={authUserRecord?.avatar_url}
            alt="zohaib"
          />
        </ProfilePicWrapper>
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
  );
};

export default GitHubProfilePage;
