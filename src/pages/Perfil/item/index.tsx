import "./Item.scss";
import { Profile } from "../";
import { NavLink } from "react-router-dom";



export default function Item(props: Profile) {
  const {id, imageUrl, title } = props;

  return (
    <div className="box1">
      <div className="foto">
        <img src={imageUrl} alt="" />
      </div>
      <div className="nome">
        <h2>{title}</h2>
      </div>
      <NavLink to={`/updateperfil/${id}`}>
        <button>Editar</button>
      </NavLink>
    </div>
  );
}

