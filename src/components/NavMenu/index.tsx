import React from "react";
import * as S from "./style";

const NavBar = () => {
  return (
    <>
      <S.Nav>
        <S.Bars />
        <S.NavMenu>
          <S.NavLink to="/">Inicio</S.NavLink>
          <S.NavLink to="/">Cadastre-se</S.NavLink>
        <S.NavBtn>
          <S.NavBtnLink to="/signin">Entrar</S.NavBtnLink>
        </S.NavBtn>
        </S.NavMenu>
      </S.Nav>
    </>
  );
};

export default NavBar;
