import React, { Component } from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";

// Components for router
import Welcome from "./components/staticPages/Welcome";
import NavHeader from "./components/navigation/NavHeader";
import About from "./components/staticPages/About";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Edit from "./components/edit/Edit";
import Education from "./components/edit/education/Education";

// Styling
import "./App.css";
import "zent/css/index.css";
import { I18nProvider as Provider } from "zent";
import enUS from "zent/lib/i18n/en-US";

class App extends Component {
  render() {
    return (
      <Provider i18n={enUS}>
        <div className="App">
          <BrowserRouter>
            <div>
              <NavHeader />
              <Switch>
                <Route exact path="/" component={Welcome} />
                <Route path="/about" component={About} />
                <Route path="/projects" component={Projects} />
                <Route path="/resume" component={Resume} />
                <Route path="/edit" component={Edit} />
                <Route path="/education" component={Education} />
              </Switch>
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
