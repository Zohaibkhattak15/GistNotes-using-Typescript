import { Menu, Dropdown } from "antd";
import { useContext } from "react";
import Zohaib from "../../../assets/zohaib.png";
import { GistContext } from "../../../context/GistContext";
import {Img} from './style';


const DropdownMenu = () => {
  const { dispatch } = useContext(GistContext);
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <p>
          Signed in As <br /> Muhammad Zohaib
        </p>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item
        key="1"
        onClick={() => {
          dispatch({
            type: "VISIBLESCREEN",
            payload: {
              tab: 3,
              gistID: null,
            },
          });
        }}
      >
        <p>Your Gists</p>
      </Menu.Item>
      <Menu.Item
        key="2"
        onClick={() => {
          dispatch({
            type: "VISIBLESCREEN",
            payload: {
              tab: 5,
              gistID: null,
            },
          });
        }}
      >
        <p>Stared Gists</p>
      </Menu.Item>
      <Menu.Item
        key="3"
        onClick={() => {
          dispatch({
            type: "VISIBLESCREEN",
            payload: {
              tab: 6,
              gistID: null,
            },
          });
        }}
      >
        <p>Create A Gist</p>
      </Menu.Item>
      <Menu.Item key="4">
        <p>Help</p>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item
        key="5"
        onClick={() => {
          dispatch({
            type: "VISIBLESCREEN",
            payload: {
              tab: 7,
              gistID: null,
            },
          });
        }}
      >
        <p> Your Github Profile</p>
      </Menu.Item>
      <Menu.Item
        key="6"
        onClick={() => {
          dispatch({
            type: "LOGOUT",
            payload: {
              tab: 8,
            },
          });
          localStorage.clear();
        }}
      >
        <p> SignOut</p>
      </Menu.Item>
    </Menu>
  );
  return (
    <Dropdown overlay={menu} trigger={["click"]} >
      <p className="ant-dropdown-link" onClick={e => e.preventDefault()}>
        <Img
          width="50px"
          height="50px"
          src={Zohaib}
        />
      </p>
    </Dropdown>
  );
};

export default DropdownMenu;
