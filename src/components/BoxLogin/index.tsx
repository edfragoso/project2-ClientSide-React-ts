import axios from "axios";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./BoxLogin.scss";

const BoxLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitForm = (event: any) => {
    event.preventDefault();

    axios({
      method: "post",
      url: "https://gamingdev.onrender.com/auth/login",
      data: {
        email: email,
        password: password,
      },
    })
      .then((resposta) => {
        alert("ok");
        sessionStorage.setItem('token', resposta.data.acess_token)
      })
      .catch(() => {
        alert("deu errado");
      });
  };

  return (
    <div className="BoxLogin">
      <h1>Faça seu Login</h1>

      <form onSubmit={submitForm}>
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email@email.com"
          required
        />
        <label htmlFor="password">Senha</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
          <button type="submit">Entrar</button>
      </form>

      <div className="links">
        <NavLink to={"/users"}>Cadastre-se</NavLink>
        <NavLink to={"/"}>
        </NavLink>
      </div>
    </div>
  );
};

export default BoxLogin;
