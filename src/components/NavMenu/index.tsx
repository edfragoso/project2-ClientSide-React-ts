import React from "react";
import * as S from "./style";
import { ReactComponent as Search } from "assets/icons/search.svg";

const NavBar = () => {
  return (
    <>
      <S.Nav>
        <S.Bars />
        <S.NavMenu>
          <div>
          <S.NavLink to="/">Inicio</S.NavLink>
          <S.NavLink to="/users">Cadastre-se</S.NavLink>
          <S.NavLink to="/login">Entrar</S.NavLink>
          </div>
          <S.NavDetails>
            
            <Search />
            <input type="text" placeholder="Buscar" />
          </S.NavDetails>
        </S.NavMenu>
      </S.Nav>
    </>
  );
};

export default NavBar;
