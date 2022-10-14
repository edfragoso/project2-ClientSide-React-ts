import "./navBar.scss";
import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBarr() {
  return (
    <div className="container">
      <div className="logo">
        <NavLink to="/">GameFlix</NavLink>
      </div>
      <div className="menu">
        <ul>
          <li>
            <NavLink to="/">Login</NavLink>
          </li>
          <li id="destaque">
            <NavLink to="/">Cadastre-se</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
