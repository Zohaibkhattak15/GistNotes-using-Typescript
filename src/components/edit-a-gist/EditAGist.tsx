import React, { useState, useEffect, useContext } from "react";
import { Form, Input, Button } from "../create-a-gist/style";
import { updateAGist, getGistObj } from "../../utils/fetchAPIs";
import { GistContext } from "../../context/GistContext";

const EditAGist = () => {
  const [gistData, setGistData] = useState<any>("");
  const { state, dispatch } = useContext(GistContext);
  const { gistID } = state;

  const editGist = async () => {
    const { description } = gistData;
    let val = await updateAGist(gistID , description );
    dispatch({
      type: "VISIBLESCREEN",
      payload: {
        tab: 3,
        gistID: null,
      },
    });
  };

  const getAGist = async () => {
    let gistOBJ = await getGistObj(gistID).then((data) => setGistData(data));
  };

  useEffect(() => {
    getAGist();
  }, []);

  return (
    <section>
      <Form onSubmit={(e) => e.preventDefault()}>
        <h1 className="create-gist-heading">Update Gist Description</h1>
        <Input
          type="text"
          onChange={(e:React.ChangeEvent<HTMLInputElement>) : void => setGistData({ description: e.target.value })}
          placeholder="Enter gist Discription..."
          value={gistData?.description}
        />
        <Button onClick={() => editGist()}>Save Gist</Button>
      </Form>
    </section>
  );
};

export default EditAGist;
