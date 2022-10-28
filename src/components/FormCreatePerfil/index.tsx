import { NavLink } from "react-router-dom";
import "./FormCreatePerfil.scss";

const FormCreatePerfil = () => {
  return (
    <div className="BoxCreatePerfil">
      <h1>Cadastre seu Perfil</h1>

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
      <NavLink to={"/perfil"}>
        <button type="submit">Enviar</button>
      </NavLink>
      </form>
    </div>
  );
};

export default FormCreatePerfil;
