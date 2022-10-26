import NavBarr from "components/NavBar";
import "./RegistrationUsers.scss";
import { NavLink } from "react-router-dom";


const RegistrationUsers = () => {
  return (
    <>
      <header>
        <NavBarr />
      </header>
      <div className="BoxForm">
        <h1>Faça seu Cadastro</h1>
        <form action="">
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Digite seu nome"
            required
          />
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Digite seu e-mail"
            required
          />
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Digite sua senha"
            required
          />
          <label htmlFor="cpf">CPF</label>
          <input type="text" name="cpf" id="cpf" placeholder="Digite seu CPF" />
        </form>

        <div className="check">
          Administrador <input type="checkbox" name="adm" id="adm" required />
        </div>
        <NavLink to={"/login"}>
        <button type="submit">Cadastrar</button>
        </NavLink>
      </div>
    </>
  );
};

export default RegistrationUsers;
