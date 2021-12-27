import  { useContext } from "react";
import { Nav, Imgdiv, SearchDiv } from "./style";
import Logo from "../../assets/emumba-logo.png";
// import SearchBar from "./searchbar/SearchBar";
// import DropdownMenu from "./dropdown/DropdownMenu";
import { GistContext } from "../../App";
import { Button, Col, Row } from "antd";
import SearchBar from "./Search-Bar/SearchBar";
// import { UserName } from "../../constants/Constants";

const Navbar = () => {
  const { dispatch } = useContext(GistContext);
//   const checkUserName =
//     JSON.parse(localStorage.getItem("authUserName")) === UserName;

const GoToHomeScreen = () => {
  dispatch({
    type: "VISIBLESCREEN",
    payload: {
      tab: 1,
      gistID: null,
    },
  });
};

const GoToLoginScreen = () => {
  dispatch({
    type: "VISIBLESCREEN",
    payload: {
      tab: 2,
      gistID: null,
    },
  });
};
  

  return (
    <Row>
      <Col span={24}>
        <Nav>
          <Imgdiv>
            <img
              src={Logo}
              alt="Emumba"
              width="150px"
              height="30px"
              onClick={GoToHomeScreen}
            />
          </Imgdiv>
          <SearchDiv>
          <SearchBar />
         
              <Button type="primary" size="large" onClick={GoToLoginScreen} >
                Login
              </Button>
     
          </SearchDiv>
        </Nav>
      </Col>
    </Row>
  );
};
export default Navbar;

