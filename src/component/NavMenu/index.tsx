import React from "react";
import * as S from "./style";
import { ReactComponent as Search } from "assets/icons/search.svg";

const NavBar = () => {
  return (
    <>
      <S.Nav>
        <S.Bars />
        <S.NavMenu>
          <S.NavLink to="/">Inicio</S.NavLink>
          <S.NavLink to="/">Cadastre-se</S.NavLink>
          <S.NavLink to="/signin">Entrar</S.NavLink>
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
