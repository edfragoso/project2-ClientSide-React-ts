import { MdTipsAndUpdates } from "react-icons/md";
import { MdCreate } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { NavLink } from "react-router-dom";

import "./NavCrud.scss";

const NavCrud = () => {
  return (
    <div className="container">
      <div className="logo">
        <NavLink to="/">GameFlix</NavLink>
      </div>
      <div className="menu">
        <NavLink to={"/updatePerfil"}>
          <MdTipsAndUpdates size={20} color="#fff" />
        </NavLink>
        <NavLink to={"/createPerfil"}>
          <MdCreate size={20} color="#fff" />
        </NavLink>
        <MdDelete size={20} color="#fff" />
      </div>
    </div>
  );
};

export default NavCrud;
