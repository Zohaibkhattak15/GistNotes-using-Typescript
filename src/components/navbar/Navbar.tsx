import  { useContext } from "react";
import { Nav, Imgdiv, SearchDiv } from "./style";
import Logo from "../../assets/emumba-logo.png";
import DropdownMenu from "./Dropdown/DropdownMenu";
import SearchBar from "./Search-Bar/SearchBar";
import { GistContext } from "../../context/GistContext";
import { Button, Col, Row } from "antd";
import { USERNAME } from "../../constants/index";
import { VISIABLESCREEN } from "../../context/ActionTypes";

const Navbar = () => {
  const { dispatch } = useContext(GistContext);
  const get : any =localStorage.getItem("authUserName");
  const val = JSON.parse(get) ;
  const checkUserName = val === USERNAME;
  
  const GoToHomeScreen = () => {
  dispatch({
    type: VISIABLESCREEN,
    payload: {
      tab: 1,
      gistID: "",
    },
  });
};

const GoToLoginScreen = () => {
  dispatch({
    type: VISIABLESCREEN,
    payload: {
      tab: 2,
      gistID:"",
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
          {checkUserName ? (
            <DropdownMenu />
          ) : (
            <Button type="primary" size="large" onClick={GoToLoginScreen}>
              Login
            </Button>
          )}
        </SearchDiv>
      </Nav>
    </Col>
  </Row>
  );
};
export default Navbar;

