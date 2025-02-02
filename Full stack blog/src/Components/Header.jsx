import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <Link to="/" className="logo">
          Myblog
        </Link>
        <nav>
          <Link to="/login">Login</Link>
          <Link to="">Register</Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
