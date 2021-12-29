import { useCallback, useContext } from "react";
import { GistContext } from "../../../context/GistContext";
import { Row } from "antd";
import PublicGistsGrid from "./PublicGistsGrid";
import PrivateGistsGrid from "./PrivateGistsGrid";
import { VISIBLESCREEN } from "../../../constants/index";
import { privateFilesRecord, publicFilesRecord } from "../../../utils/GridUtils";

const GridDisplay = ({ publicGistsDisplay, privateGistsDisplay }: any) => {
  const { dispatch } = useContext(GistContext);
  const pubFiles = publicFilesRecord(publicGistsDisplay);
  const priFiles = privateFilesRecord(privateGistsDisplay);

  const showUniqueGistRecord = useCallback((id: string) => {
    dispatch({
      type: VISIBLESCREEN,
      payload: {
        tab: 9,
        gistID: id,
      },
    });
    /* eslint-disable */
  },[]);
/* eslint-enable */

  return (
    <>
      <Row gutter={[16, 100]}>
        {publicGistsDisplay ? (
          <PublicGistsGrid
            publicGistsDisplay={publicGistsDisplay}
            showUniqueGistRecord={showUniqueGistRecord}
            publicFiles={pubFiles}
          />
        ) : (
          <PrivateGistsGrid
            privateGistsDisplay={privateGistsDisplay}
            showUniqueGistRecord={showUniqueGistRecord}
            privateFiles={priFiles}
          />
        )}
      </Row>
    </>
  );
};

export default GridDisplay;
