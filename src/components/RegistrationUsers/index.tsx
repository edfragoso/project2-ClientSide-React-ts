import NavBarr from "components/NavBar";
import "./RegistrationUsers.scss";
import { NavLink, redirect } from "react-router-dom";
import React, { useState } from "react";
import { GamesService } from "../../services/UsersService";
import axios from "axios";

const RegistrationUsers = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [cpf, setCpf] = useState<string>("");
  const [admin, setAdmin] = useState<boolean>(false);

  const submitForm = (event: any) => {
    event.preventDefault();
   
    axios({
      method: "post",
      url: "https://gamingdev.onrender.com/users",
      data: {
        name: name,
        email: email,
        password: password,
        cpf: cpf,
        isAdmin: admin,
      },
    })
      .then(() => {
        alert("Cadastro efetuado com sucesso");
        window.location.href="http://localhost:3000/Login"
      })
      .catch(() => {
        alert("Ops! Algo de errado não esta certo");
        console.log(submitForm,name,email,cpf,password,admin);
      });
  };

  return (
    <>
      <header>
        <NavBarr />
      </header>
      <div className="BoxForm">
        <h1>Faça seu Cadastro</h1>
        <form onSubmit={submitForm}>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Digite seu nome"
            required
          />
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu e-mail"
            required
          />
          <label htmlFor="cpf">CPF</label>
          <input
            type="text"
            name="cpf"
            id="cpf"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            placeholder="Digite seu CPF"
          />
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Digite sua senha"
            required
          />
          <div className="check">
            Administrador{" "}
            <input
              type="checkbox"
              name="adm"
              id="adm"
              checked={admin}
              onChange={(e) => setAdmin(e.target.checked)}
              required
            />
          </div>
          <button type="submit">Cadastrar</button>
        </form>

      
      </div>
    </>
  );
};

export default RegistrationUsers;
