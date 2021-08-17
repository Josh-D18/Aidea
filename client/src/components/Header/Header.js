import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="home">
      <nav className="home__navbar">
        <ul className="home__navbarList">
          <Link to="/" className="home__navbarItem">
            <li>Home</li>
          </Link>
          <Link to="/about" className="home__navbarItem">
            <li>About</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
