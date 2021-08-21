import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import axios from "axios";

class Header extends Component {
  state = {
    token: [],
    user: [],
  };

  getToken = (id) => {
    axios
      .get(`http://localhost:8080/profile/token/${id}`, {
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

  getUser = (id) => {
    axios
      .get(`http://localhost:8080/profile/${id}`, {
        headers: {
          authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        this.setState({
          user: [res.data],
        });
      });
  };

  // logginInUser = this.state.token.username;
  // showUser = () => {
  //   this.state.users.map((user) =>
  //     user.user_name === this.state.token.username
  //       ? console.log("True")
  //       : console.log("F")
  //   );
  // };

  componentDidMount() {
    this.getToken(this.props.location.pathname.split("/")[2]);
    this.getUser(this.props.location.pathname.split("/")[2]);
    // this.showUser();
  }

  render() {
    console.log(this.state.token, this.state.user);
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
            {this.state.user.map((user) => {
              console.log(user);
            })}
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
