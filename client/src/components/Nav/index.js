import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
      <a id="text" className="navbar-brand" href="/search">
        Search
      </a>
      <a id="text" className="navbar-brand" href="/">
        Google Books Search
      </a>
      <a id="text" className="navbar-brand" href="/saved">
        Saved
      </a>
    </nav>
  );
}

export default Nav;
