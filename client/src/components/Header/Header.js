import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

function Header(props) {
  console.log(props);
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
          <Link to="/profile/1" className="header__navbarItem">
            <li>My Profile</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
