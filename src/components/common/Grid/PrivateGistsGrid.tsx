import { Col } from 'antd';
import {
  Grid, FooterWrapper, Span1, ProfilePic, ProfileWrapper, ProfileFooter,
} from './style';

const PrivateGistsGrid = ({ privateGistsDisplay, showUniqueGistRecord, privateFiles }: any) => {
  const dispPrivateFiles = privateFiles
    && privateFiles?.map((content: string, index: number) => (
      <span key={index = 0}>
        <p>
          <Span1>{++index}</Span1>
          {content}
        </p>
      </span>
    ));
  const fileName = (gist:any) => Object.keys(gist?.files)[0];

  return (
    privateGistsDisplay.map((gist: any, index: number) => (
      <Col xs={{ span: 12, offset: 1 }} lg={{ span: 6, offset: 1 }} key={index}>
        <Grid key={index} onClick={() => showUniqueGistRecord(gist?.id)}>
          <div>
            {dispPrivateFiles}
          </div>
          <FooterWrapper>
            <div>
              <ProfilePic src={gist?.owner?.avatar_url} alt="profile" />
            </div>
            <ProfileWrapper>
              <ProfileFooter>
                <h4>
                  {gist?.owner?.login}
                  {' '}
                  /
                  {' '}
                  {fileName}
                </h4>
                <span>{gist?.created_at}</span>
                <br />
              </ProfileFooter>
            </ProfileWrapper>
          </FooterWrapper>
        </Grid>
      </Col>
    ))
  );
};
export default PrivateGistsGrid;
