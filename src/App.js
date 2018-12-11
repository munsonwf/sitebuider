import React, { Component } from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";

// Components for router
import Welcome from "./components/staticPages/Welcome";
import NavHeader from "./components/navigation/NavHeader";
import About from "./components/staticPages/About";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";

// Styling
import "./App.css";
import "zent/css/index.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <NavHeader />
            <Switch>
              <Route exact path="/" component={Welcome} />
              <Route path="/about" component={About} />
              <Route path="/projects" component={Projects} />
              <Route path="/resume" component={Resume} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
