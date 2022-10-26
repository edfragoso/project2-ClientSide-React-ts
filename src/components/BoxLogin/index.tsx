import { NavLink } from "react-router-dom";
import "./BoxLogin.scss";

const BoxLogin = () => {
 

  return (
    <div className="BoxLogin">
      <h1>Faça seu Login</h1>

      <form action="">
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="email@email.com"
          required
        />
        <label htmlFor="password">Senha</label>
        <input type="password" name="password" id="password" required />
      </form>
      <div className="links">
        <NavLink to={"/users"}>Cadastre-se</NavLink>
        <NavLink to={"/"}>
        <button type="submit">Entrar</button>
        </NavLink>
      </div>
    </div>
  );
};

export default BoxLogin;
