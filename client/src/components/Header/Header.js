import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import axios from "axios";

class Header extends Component {
  state = {
    token: [],
    user: [],
  };

  getToken = () => {
    axios
      .get(`http://localhost:8080/profile/user/1`, {
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

  handleClick = (id) => {
    this.props.history.push(`/profile/${id}`);
  };

  componentDidMount() {
    this.getToken();
  }

  render() {
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
            {this.state.token.map((user) => {
              return (
                <span
                  onClick={() => this.handleClick(user.id)}
                  key={user.id}
                  to={`/profile/${user.id}`}
                  className="header__navbarItem"
                >
                  <li>My Profile</li>
                </span>
              );
            })}
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
