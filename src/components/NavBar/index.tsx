import "./navBar.scss";
import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBarr2() {
  return (
    <div className="container">
      <div className="logo">
        <NavLink to="/">GameFlix</NavLink>
      </div>
      <div className="menu">
        <ul>
          <li>
            <NavLink to="/login">Entrar</NavLink>
          </li>
          <li id="destaque">
            <NavLink to="/users">Cadastre-se</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
