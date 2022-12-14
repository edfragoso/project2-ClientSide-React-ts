import "../navBar.scss";

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
            <NavLink to="/perfil">Perfil</NavLink>
          </li>
          <li>
            <NavLink to="/CreateGames">Adicionar</NavLink>
          </li>
          <li id="destaque">
            <NavLink to="/users">Cadastre-se</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}