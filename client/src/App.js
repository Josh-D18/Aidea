import "./App.scss";
import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
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
import NotFound404 from "./pages/NotFound/NotFound";

class App extends Component {
  RedirectWithStatus({ from, to, status }) {
    return (
      <Route
        render={({ staticContext }) => {
          if (staticContext) staticContext.status = status;
          return <Redirect from={from} to={to} />;
        }}
      />
    );
  }

  render() {
    return (
      <section>
        <Route component={Header} />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/ideas" component={Ideas} />
          <Route exact path="/ideas/:id" component={Idea} />
          <Route exact path="/profile/:id" component={Profile} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/addIdea/:id" component={AddIdea} />
          <Route exact path="/editIdea/:id" component={EditIdea} />
          <Route exact path="/deleteIdea/:id" component={DeleteIdea} />

          {/* Redirects */}
          <Route exact path="*" component={NotFound404} status={404} />
        </Switch>
      </section>
    );
  }
}

export default App;
