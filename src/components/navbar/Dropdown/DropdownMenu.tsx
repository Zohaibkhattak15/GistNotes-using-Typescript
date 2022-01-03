import { Menu, Dropdown } from 'antd';
import { useCallback, useContext } from 'react';
import { LOGOUT, VISIBLESCREEN } from '../../../constants/index';
import { GistContext } from '../../../context/GistContext';
import { Img } from './style';

const DropdownMenu: React.FC = () => {
  const { state, dispatch } = useContext(GistContext);
  const { imgURL } = state;
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <p>
          Signed in As
          {' '}
          <br />
          {' '}
          Muhammad Zohaib
        </p>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item
        key="1"
        onClick={useCallback(() => {
          dispatch({
            type: VISIBLESCREEN,
            payload: {
              tab: 3,
              gistID: '',
            },
          });
        }, [dispatch])}
      >
        <p>Your Gists</p>
      </Menu.Item>
      <Menu.Item
        key="2"
        onClick={useCallback(() => {
          dispatch({
            type: VISIBLESCREEN,
            payload: {
              tab: 5,
              gistID: '',
            },
          });
        }, [dispatch])}
      >
        <p>Stared Gists</p>
      </Menu.Item>
      <Menu.Item
        key="3"
        onClick={useCallback(() => {
          dispatch({
            type: VISIBLESCREEN,
            payload: {
              tab: 6,
              gistID: '',
            },
          });
        }, [dispatch])}
      >
        <p>Create A Gist</p>
      </Menu.Item>
      <Menu.Item key="4">
        <p>Help</p>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item
        key="5"
        onClick={useCallback(() => {
          dispatch({
            type: VISIBLESCREEN,
            payload: {
              tab: 7,
              gistID: '',
            },
          });
        }, [dispatch])}
      >
        <p> Your Github Profile</p>
      </Menu.Item>
      <Menu.Item
        key="6"
        onClick={useCallback(() => {
          dispatch({
            type: LOGOUT,
            payload: {
              isLoggedin: false,
              tab: 1,
            },
          });
        }, [dispatch])}
      >
        <p> SignOut</p>
      </Menu.Item>
    </Menu>
  );
  return (
    <Dropdown overlay={menu} trigger={['click']}>
      <p
        className="ant-dropdown-link"
        onClick={(e) => e.preventDefault()}
      >
        <Img
          className="imgsize"
          src={imgURL}
        />
      </p>
    </Dropdown>
  );
};
export default DropdownMenu;
