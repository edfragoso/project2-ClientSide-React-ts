// import * as S from "./style";
// import logo from "assets/imgs/logo.png";
// import ButtonLarge from "components/ButtonLarge";
// import { HTMLAttributes, useState } from "react";
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
        <button type="submit">Enviar</button>
      </div>
    </div>
  );
};

export default BoxLogin;
