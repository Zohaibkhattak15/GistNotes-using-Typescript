import { NOCONTENT } from "../../constants/index";
import { Td, UserNameSection, Username, Img } from "../common/Table/style";

const SearchedData = ({ searchRecordsData, showUniqueGistRecord } : any) => {
   
  const date = new Date("2021-01-09T14:56:23");
  return (
    <>
      {searchRecordsData ? (
        searchRecordsData.map((gist : any , index : number) => (
          <tr
            key={index}
            onClick={() => {
              showUniqueGistRecord(gist?.id);
            }}
          >
            <Td>
              <input type="checkbox" />{" "}
            </Td>
            <Td>
              <UserNameSection>
                <span>
                  <Img
                    className="profile-img"
                    src={gist?.owner?.avatar_url}
                    alt="Profile Pics"
                  />
                </span>
                <Username>{gist?.owner?.login}</Username>
              </UserNameSection>
            </Td>
            <Td>{date.toLocaleDateString()}</Td>
            <Td>{date.toLocaleTimeString()}</Td>
            <Td>{Object.keys(gist?.files)[0]}</Td>
            <Td>{gist?.description}</Td>
          </tr>
        ))
      ) : (
        <p>{NOCONTENT}</p>
      )}
    </>
  );
};

export default SearchedData;
