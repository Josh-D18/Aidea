import "./App.scss";
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Ideas from "./components/ideasComponent/Ideas";
class App extends Component {
  render() {
    return (
      <section>
        <header>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </header>
        <Switch>
          <Route path="/ideas" component={Ideas} />
        </Switch>
      </section>
    );
  }
}

export default App;
