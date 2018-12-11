import React from "react";
import MainMenu from "../navigation/MainMenu";

export default class Welcome extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome</h1>
        <p>This is the main page</p>
        <MainMenu />
      </div>
    );
  }
}
