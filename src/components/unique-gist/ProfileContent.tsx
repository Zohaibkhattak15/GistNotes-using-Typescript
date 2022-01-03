import { USERNAME } from '../../constants/index';
import {
  Span,
  Icon,
  Profile,
  ProfileImage,
  Heading,
  SpanValues,
} from './style';
import { GistIcons, Icon1 } from '../github-profile-page/style';

const ProfileContent = ({
  data,
  filename,
  updateGist,
  deleteGist,
  gistStarValue,
  starThisGist,
  forkThisGist,
  gistForkValue,
}: any) => {
  const { owner } = data;
  const dispDelandUpdIcons = owner?.login === USERNAME ? (
    <>
      <Span>
        <Icon className="far fa-edit" onClick={() => updateGist(data?.id)} />
        Edit
      </Span>
      <Span>
        <Icon
          className="far fa-trash-alt"
          onClick={() => deleteGist(data?.id)}
        />
        Delete
      </Span>
    </>
  ) : null;
  const getStarClass = (gistStarValue : number) => (gistStarValue === 0 ? 'far fa-star' : 'fas fa-star');

  return (
    <>
      <Profile>
        <div>
          <ProfileImage src={owner?.avatar_url} alt="profile" />
        </div>
        <div>
          <span>
            <Heading>
              {owner?.login}
              /
              {filename}
              {' '}
            </Heading>
            <span>{data?.created_at}</span>
            <br />
          </span>
        </div>
      </Profile>

      <GistIcons>
        {dispDelandUpdIcons}
        <Icon1>
          <Span>
            <Icon
              className={getStarClass(gistStarValue)}
              onClick={() => starThisGist()}
            />
            Star
          </Span>
          <SpanValues>{gistStarValue}</SpanValues>
        </Icon1>
        <Icon1>
          <Span>
            <Icon
              className="fas fa-code-branch"
              onClick={() => forkThisGist()}
            />
            Fork
          </Span>
          <SpanValues>{gistForkValue}</SpanValues>
        </Icon1>
      </GistIcons>
    </>
  );
};

export default ProfileContent;
