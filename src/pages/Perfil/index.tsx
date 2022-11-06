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
  user: any;
}
export default function Perfil() {
  const [perfil, setPerfil] = useState<Profile[]>([]);

  const UserId = sessionStorage.getItem("id");

  useEffect(() => {
    http
      .get<Profile[]>("profiles")
      .then((response) =>
        setPerfil(response.data.filter((p) => p.user.id == UserId))
      )
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <NavBarr />
      <div className="box">
        {perfil.map((item) => (
          <Item key={item.userId} {...item} />
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
