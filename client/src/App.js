import "./App.scss";
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
        <Switch></Switch>
      </div>
    );
  }
}

export default App;
