import http from "Http";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./BoxLogin.scss";

const BoxLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SubmitForm = (event: any) => {
    event.preventDefault();
    const navigate =  useNavigate()

    const user = {
      email,
      password,
    };

    http
      .post("auth/login", user)
      .then((response) => {
        alert("ok");
        localStorage.setItem("token", response.data.token);
        sessionStorage.setItem("id", response.data.user.id);

        /* window.location.href = "https://project2-client-side-react-onrht4oyj-edfragoso.vercel.app"; */
        
        navigate('/')
      })
      .catch((erro) => {
        if (erro?.response?.data?.message) {
          alert(erro.response.data.message);
        } else {
          alert(
            "Aconteceu um erro inesperado ao afetuar o seu login! Entre em contato com o suporte!"
          );
        }
      });
  };

  return (
    <div className="BoxLogin">
      <h1>Faça seu Login</h1>

      <form onSubmit={SubmitForm}>
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
        <NavLink to={"/"}></NavLink>
      </div>
    </div>
  );
};

export default BoxLogin;
