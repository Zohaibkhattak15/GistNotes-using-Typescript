import { useCallback, useContext } from "react";
import { Nav, Imgdiv, SearchDiv } from "./style";
import Logo from "../../assets/emumba-logo.png";
import DropdownMenu from "./Dropdown/DropdownMenu";
import SearchBar from "./Search-Bar/SearchBar";
import { GistContext } from "../../context/GistContext";
import { Button, Col, Row } from "antd";
import { VISIBLESCREEN } from "../../constants/index";

const Navbar = () => {
  const { state, dispatch } = useContext(GistContext);
  const { isLoggedin } = state;

  const GoToHomeScreen = useCallback(() => {
    dispatch({
      type: VISIBLESCREEN,
      payload: {
        tab: 1,
        gistID: "",
      },
    });
  },[dispatch]);

  const GoToLoginScreen = useCallback(() => {
    dispatch({
      type: VISIBLESCREEN,
      payload: {
        tab: 2,
        gistID: "",
      },
    });
  },[dispatch]);

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
            {isLoggedin ? (
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

