import { Menu, Dropdown } from "antd";
import Zohaib from "../../../assets/zohaib.png";
import {Img} from './style';

const DropdownMenu = () => {
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
      >
        <p>Your Gists</p>
      </Menu.Item>
      <Menu.Item
        key="2"
      >
        <p>Stared Gists</p>
      </Menu.Item>
      <Menu.Item
        key="3"
      >
        <p>Create A Gist</p>
      </Menu.Item>
      <Menu.Item key="4">
        <p>Help</p>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item
        key="5"
      >
        <p> Your Github Profile</p>
      </Menu.Item>
      <Menu.Item
        key="6"
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
