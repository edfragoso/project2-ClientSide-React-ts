import NavBarr from "components/NavBar";
import "./Usuarios.scss";
import Item from "./item";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import http from "Http";

export interface Profile {
  id: string;
  imageUrl: string;
  title: string;
  userId: string;
}

export default function Perfil() {
  const [perfil, setPerfil] = useState<Profile[]>([]);

  useEffect(() => {
    http
      .get<Profile[]>("profiles")
      .then((response) => setPerfil(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <NavBarr />
      <div className="box">
        {perfil.map((item) => (
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
