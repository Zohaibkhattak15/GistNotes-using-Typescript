import { useState, useEffect } from "react";
import { loginAuthUser, privateGistsRecord } from "../../utils/fetchAPIs";
import {
  Section,
  ProlfieLeft,
  Button,
  Heading,
  CardSection,
  CardHeader,
  ProfileCol,
  LeftSec,
  GistIcons,
  ContentBody,
  CardBody,
  CardBodyContent,
  Icon1,
  ProfilePicSec,
  ProfileImage,
  Img,
} from "./style";
import { Span, SpanValues } from "../unique-gist/style";
import { NOCONTENT, USERNAME } from "../../constants/Constants";

const GitHubProfilePage = () => {
  const [authUserRecord, setAuthUserRecord] = useState<any>("");
  const [gists, setGists] = useState<any>("");

  const getLoginData = async () => {
    let authData = await loginAuthUser(USERNAME).then((data) =>
      setAuthUserRecord(data)
    );
  };
  const getGists = async () => {
    const getAuthGists = await privateGistsRecord().then((data) =>
      setGists(data)
    );
  };

  const { files } = gists;
  let filename: string | undefined ; 
  let content: string | undefined;
  let myContentArray: any[] | undefined;

  if (files) {
    Object.values(files).map((file) => {
      filename = file?.filename;
      content = file?.content;
    });
    myContentArray = content.split("\n");
  }

  useEffect(() => {
    getLoginData();
    getGists();
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
          {gists &&
            gists.map((item : any, index : number) => (
              <CardHeader key={index}>
                <LeftSec>
                  <ProfileCol>
                    <Img src={item?.owner?.avatar_url} alt="profile" />
                    <div>
                      <span>
                        <h4>
                          {item?.owner?.login}/{Object.keys(item?.files)[0]}
                        </h4>
                        <span>Created 7 housrs Ago</span>
                        <br />
                        <span> Broadcast Server</span>
                      </span>
                    </div>
                  </ProfileCol>
                  <GistIcons>
                    <Icon1>
                      <Span>
                        <i className="far fa-star"></i> Star
                      </Span>
                      <SpanValues>0</SpanValues>
                    </Icon1>
                    <Icon1>
                      <Span>
                        <i className="fas fa-code-branch"></i> Fork
                      </Span>
                      <SpanValues>0</SpanValues>
                    </Icon1>
                  </GistIcons>
                </LeftSec>

                <ContentBody>
                  <CardBody>
                    <i className="fas fa-code"></i>
                    <span style={{ paddingBottom: "20px" }}>
                      {" "}
                      {"  "} {Object.keys(item?.files)[0]}
                    </span>
                  </CardBody>
                  <CardBodyContent>
                    {myContentArray !== undefined
                      ? myContentArray?.map((content, index) => {
                          return (
                            <span>
                              {" "}
                              <p>
                                <span
                                  style={{
                                    fontWeight: "700",
                                    marginRight: "10px",
                                  }}
                                >
                                  {++index}
                                </span>{" "}
                                {content}
                              </p>{" "}
                            </span>
                          );
                        })
                      : <p>{NOCONTENT}</p>}
                  </CardBodyContent>
                </ContentBody>
              </CardHeader>
            ))}
        </CardSection>
      </Section>
    </>
  );
};

export default GitHubProfilePage;
