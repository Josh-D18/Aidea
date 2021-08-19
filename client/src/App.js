import "./App.scss";
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Ideas from "./components/ideasComponent/Ideas";
import Idea from "./components/ideaComponent/Idea";
import Profile from "./components/profileComponent/profileComponent";
import Header from "./components/Header/Header";
import Login from "./pages/Login/Login";
import Register from "./pages/Signup/Signup";
import AddIdea from "./pages/AddIdea/AddIdea";
import EditIdea from "./pages/EditIdea/EditIdea";
import DeleteIdea from "./pages/DeleteIdea/DeleteIdea";

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
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/addIdea" component={AddIdea} />
          <Route exact path="/editIdea" component={EditIdea} />
          <Route exact path="/deleteIdea" component={DeleteIdea} />
        </Switch>
      </section>
    );
  }
}

export default App;
