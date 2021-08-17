import "./App.scss";
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Ideas from "./components/ideasComponent/Ideas";
import Idea from "./components/ideaComponent/Idea";
import User from "./components/profileComponent/profileComponent";

class App extends Component {
  render() {
    return (
      <section>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/ideas" component={Ideas} />
          <Route exact path="/ideas/:id" component={Idea} />
          <Route exact path="/profile/:id" component={User} />
        </Switch>
      </section>
    );
  }
}

export default App;
