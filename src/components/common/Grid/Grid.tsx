import { useCallback, useContext } from "react";
import { Row } from "antd";
import { GistContext } from "../../../context/GistContext";
import PublicGistsGrid from "./PublicGistsGrid";
import PrivateGistsGrid from "./PrivateGistsGrid";
import { VISIBLESCREEN } from "../../../constants/index";
import { privateFilesRecord, publicFilesRecord } from "../../../utils/GridUtils";

const GridDisplay = ({ publicGistsDisplay, privateGistsDisplay }: any) => {
  const { dispatch } = useContext(GistContext);
  const publicFiles = publicFilesRecord(publicGistsDisplay);
  const privateFiles = privateFilesRecord(privateGistsDisplay);

  const showUniqueGistRecord = useCallback((id: string) => {
    dispatch({
      type: VISIBLESCREEN,
      payload: {
        tab: 9,
        gistID: id,
      },
    });
  },[dispatch]);

  return (
    <>
      <Row gutter={[16, 100]}>
        {publicGistsDisplay ? (
          <PublicGistsGrid
            publicGistsDisplay={publicGistsDisplay}
            showUniqueGistRecord={showUniqueGistRecord}
            publicFiles={publicFiles}
          />
        ) : (
          <PrivateGistsGrid
            privateGistsDisplay={privateGistsDisplay}
            showUniqueGistRecord={showUniqueGistRecord}
            privateFiles={privateFiles}
          />
        )}
      </Row>
    </>
  );
};

export default GridDisplay;
