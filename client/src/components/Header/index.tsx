import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <Link to="">home</Link>
      <Link to="login">login</Link>
    </div>
  );
}

export default Header;
