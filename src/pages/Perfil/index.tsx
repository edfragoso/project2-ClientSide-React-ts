import NavBarr from "components/NavBar";
import "./Usuarios.scss";
import { Perfis } from "mocks/perfis";
import Item from "./item";
import { NavLink } from "react-router-dom";

type Props = typeof Perfis[0];

export default function Perfil() {
  return (
    <>
      <NavBarr />
      <div className="box">
        {Perfis.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </div>
      <div id="btnPerfil">
        <NavLink to={"/createperfil"}>
          <button id="addPerfil">Adicionar novo Perfil</button>
        </NavLink>
      </div>
    </>
  );
}
