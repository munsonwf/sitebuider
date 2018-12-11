import React from "react";
import { Menu } from "zent";
import { Link } from "react-router-dom";
const { MenuItem } = Menu;

export default class MainMenu extends React.Component {
  onClick = (e, key) => {
    console.log(e, key);
  };
  render() {
    return (
      <Menu onClick={this.onClick} className="hello" mode="inline">
        <MenuItem key="1-1" className="food">
          <Link to="/about">About</Link>
        </MenuItem>
        <MenuItem key="1-2" className="food">
          About
        </MenuItem>
        <MenuItem key="1-3" className="food">
          Projects
        </MenuItem>
        <MenuItem key="1-4" disabled>
          Clothing
        </MenuItem>
      </Menu>
    );
  }
}
