import "./App.scss";
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Ideas from "./components/ideasComponent/Ideas";
import Idea from "./components/ideaComponent/Idea";
import Profile from "./components/profileComponent/profileComponent";
import Header from "./components/Header/Header";

class App extends Component {
  render() {
    return (
      <section>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/ideas" component={Ideas} />
          <Route exact path="/ideas/:id" component={Idea} />
          <Route exact path="/profile/:id" component={Profile} />
        </Switch>
      </section>
    );
  }
}

export default App;
