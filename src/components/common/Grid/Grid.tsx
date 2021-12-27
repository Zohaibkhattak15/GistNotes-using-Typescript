import { useContext } from "react";
import { GistContext } from "../../../context/GistContext";
import {
  Card,
  Footer,
  Grid,
  ProfileFooter,
  Profile,
  ProfilePic,
} from "./style";

const GridDisplay = ({ publicGistsDisplay, privateGistsDisplay }) => {
  const {dispatch} = useContext(GistContext);
  let publicFiles;
  let privateFiles;
  if (publicGistsDisplay) {
    publicFiles = publicGistsDisplay.map(
      (files) => Object.keys(files.files)[0]
    );
  } else
    privateFiles = privateGistsDisplay.map(
      (files) => Object.keys(files.files)[0]
    );

    const showUniqueGistRecord = (id) => {
      dispatch({
        type:"VISIBLESCREEN",
        payload : {
          tab : 9,
          gistID : id 
        }
      })
    };

  return (
    <>
      <Card>
        {publicGistsDisplay
          ? publicGistsDisplay.map((gist, index) => (
              <Grid
                key={index}
                onClick={() => {
                  showUniqueGistRecord(gist?.id);
                }}
              >
                <div>
                  {publicFiles &&
                    publicFiles?.map((content, index) => {
                      return (
                        <span key={index}>
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
                            {content}{" "}
                          </p>{" "}
                        </span>
                      );
                    })}
                </div>
                <Footer>
                  <div>
                    <ProfilePic src={gist.owner.avatar_url} alt="profile" />
                  </div>
                  <Profile>
                    <ProfileFooter>
                      <h4>
                        {gist.owner.login} / {Object.keys(gist.files)[0]}{" "}
                      </h4>
                      <span>Created 7 housrs Ago</span>
                      <br />
                      <span> Broadcast Server</span>
                    </ProfileFooter>
                  </Profile>
                </Footer>
              </Grid>
            ))
          : privateGistsDisplay.map((gist, index) => (
              <Grid
                key={index}
                onClick={() => {
                  showUniqueGistRecord(gist?.id);
                }}
              >
                <div>
                  {privateFiles &&
                    privateFiles?.map((content, index) => {
                      return (
                        <span key={index}>
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
                            {content}{" "}
                          </p>{" "}
                        </span>
                      );
                    })}
                </div>
                <Footer>
                  <div>
                    <ProfilePic src={gist.owner.avatar_url} alt="profile" />
                  </div>
                  <Profile>
                    <ProfileFooter>
                      <h4>
                        {gist.owner.login} / {Object.keys(gist.files)[0]}{" "}
                      </h4>
                      <span>Created 7 housrs Ago</span>
                      <br />
                      <span> Broadcast Server</span>
                    </ProfileFooter>
                  </Profile>
                </Footer>
              </Grid>
            ))}
      </Card>
    </>
  );
};

export default GridDisplay;
