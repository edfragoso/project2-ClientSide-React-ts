import { MdCreate, MdDelete, MdTipsAndUpdates } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import './NavCrudGames.scss'

const NavCrudGames = () => {
    return (<div className="container">
    <div className="logo">
      <NavLink to="/">GameFlix</NavLink>
    </div>
    <div className="menu">
      <NavLink to={"/updategames"}>
        <MdTipsAndUpdates size={20} color="#fff" />
      </NavLink>
      <NavLink to={"/creategames"}>
        <MdCreate size={20} color="#fff" />
      </NavLink>
      <MdDelete size={20} color="#fff" />
    </div>
  </div>);
}

export default NavCrudGames;