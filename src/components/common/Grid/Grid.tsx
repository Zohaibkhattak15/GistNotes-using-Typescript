import { useCallback, useContext, useState } from "react";
import { Row } from "antd";
import { GistContext } from "../../../context/GistContext";
import PublicGistsGrid from "./PublicGistsGrid";
import PrivateGistsGrid from "./PrivateGistsGrid";
import { VISIBLESCREEN } from "../../../constants/index";
import { privateFilesRecord, publicFilesRecord } from "../../../utils/GridUtils";
import { Pagination } from 'antd';


const GridDisplay = ({ publicGistsDisplay, privateGistsDisplay }: any) => {
  const { dispatch } = useContext(GistContext);
  const publicFiles = publicFilesRecord(publicGistsDisplay);
  const privateFiles = privateFilesRecord(privateGistsDisplay);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const showUniqueGistRecord = useCallback((id: string) => {
    dispatch({
      type: VISIBLESCREEN,
      payload: {
        tab: 9,
        gistID: id,
      },
    });
  }, [dispatch]);

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

        <Pagination

        />

      </Row>
    </>
  );
};

export default GridDisplay;
