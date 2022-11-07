import "./Item.scss";
import { Profile } from "../";
import { NavLink } from "react-router-dom";
import http from "Http";



export default function Item(props: Profile) {
  const {id, imageUrl, title } = props;

  const deleteProfile = (deletedProfile: Profile) => {
    http.delete(`profiles/${deletedProfile.id}`)
    .then(response => {
      alert(`Deletado com sucesso`);
      window.location.href = "http://localhost:3000/perfil"
    })
  }

  return (
    <div className="box1">
      <div className="foto">
        <img src={imageUrl} alt="" />
      </div>
      <div className="nome">
        <h2>{title}</h2>
      </div>
      <NavLink to={`/updateperfil/${id}`}>
        <button className="btnDetails">Editar</button>
      </NavLink>
      <NavLink to={`/deleteperfil/${id}`}>
        <button className="btnDetails" onClick={() => deleteProfile(props)}>Excluir</button>
      </NavLink>
    </div>
  );
}

