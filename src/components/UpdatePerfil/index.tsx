import { NavLink } from "react-router-dom";
import "./UpdatePerfil.scss";

const UpdatePerfil = () => {
  return (
    <>
      <div className="BoxCreatePerfil">
        <h1>Edite seu Perfil</h1>

        <form action="">
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Digite seu nome."
            required
          />
          <label htmlFor="image">Adicione sua Foto</label>
          <input type="file" />
          <NavLink to={"/"}>
            <button type="submit">Enviar</button>
          </NavLink>
        </form>
      </div>
    </>
  );
};

export default UpdatePerfil;
