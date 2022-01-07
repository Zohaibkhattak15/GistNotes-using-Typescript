import React, { useCallback } from 'react'
import { NOCONTENT } from '../../constants/index'
import {
  CardHeader,
  ProfileCol,
  LeftSec,
  GistIcons,
  ContentBody,
  CardBody,
  CardBodyContent,
  Icon1,
  Img,
  Span1,
} from './style';
import { Span, SpanValues, Icon } from '../unique-gist/style'

const CardData = ({ gists, gistStarValue, starThisGist } : any) => {
  const starType = gistStarValue === 0 ? 'far fa-star' : 'fas fa-star'
  const { files } = gists
  let content : any
  let myContentArray: any[]

  if (files) {
    Object.values(files).map((file : any) => {
      content = file.content
    });
    myContentArray = content.split('\n');
  }
  const fileName = useCallback((item) => Object.keys(item?.files)[0], [])
  return (
    gists
        && gists.map((item : any, index : number) => (
          <CardHeader key={index}>
            <LeftSec>
              <ProfileCol>
                <Img src={item?.owner?.avatar_url} alt="profile" />
                <div>
                  <span>
                    <h4>
                      {item?.owner?.login}
                      /
                      {fileName(item)}
                    </h4>
                    <span>{item?.updated_at}</span>
                    <br />
                    <span />
                  </span>
                </div>
              </ProfileCol>
              <GistIcons>
                <Icon1>
                  <Span>
                    <Icon className={starType} onClick={() => starThisGist()} />
                    Star
                  </Span>
                  <SpanValues>0</SpanValues>
                </Icon1>
                <Icon1>
                  <Span>
                    <Icon className="fas fa-code-branch" />
                    {' '}
                    Fork
                  </Span>
                  <SpanValues>0</SpanValues>
                </Icon1>
              </GistIcons>
            </LeftSec>

            <ContentBody>
              <CardBody>
                <i className="fas fa-code" />
                <span>{Object.keys(item?.files)[0]}</span>
              </CardBody>
              <CardBodyContent>
                {myContentArray
                  ? myContentArray?.map((content, index) => (
                    <span key={index}>
                      <p>
                        <Span1>{++index}</Span1>
                        {content}
                      </p>
                    </span>
                  ))
                  : NOCONTENT}
              </CardBodyContent>
            </ContentBody>
          </CardHeader>
        ))
  );
};

export default CardData
