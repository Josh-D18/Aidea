import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import axios from "axios";

class Header extends Component {
  state = {
    token: [],
    users: [],
  };

  getToken = () => {
    axios
      .get(`http://localhost:8080/profile/token/1`, {
        headers: {
          authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        this.setState({
          token: [res.data],
        });
      });
  };

  getUser = () => {
    axios
      .get(`http://localhost:8080/profile/`, {
        headers: {
          authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        this.setState({
          users: res.data,
        });
      });
  };

  logginInUser = this.state.token.username;
  showUser = () => {
    this.state.users.map((user) =>
      user.user_name === this.state.token.username
        ? console.log("True")
        : console.log("F")
    );
  };

  componentDidMount() {
    this.getToken();
    this.getUser();
    // this.showUser();
  }

  render() {
    console.log(this.state.token);
    return (
      <header className="header">
        <nav className="header__navbar">
          <ul className="header__navbarList">
            <Link to="/" className="header__navbarItem">
              <li>Home</li>
            </Link>
            <Link to="/ideas" className="header__navbarItem">
              <li>Ideas</li>
            </Link>
            {/* {this.state.users.map((user) =>
              user.user_name === this.state.token.username ? (
                <Link to={`/profile/${user.id}`} className="header__navbarItem">
                  <li>My Profile</li> : <></>
                </Link>
              ) : (
                <></>
              )
            )} */}
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
