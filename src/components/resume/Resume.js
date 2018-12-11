import React from "react";

import Education from "./components/Education";
import Header from "./components/Header";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default class Resume extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Resume</h1>
        <div className="bgBlock" />
        <Header />
        <Experience />
        <Education />
        <Projects />
        <Skills />
      </div>
    );
  }
}
