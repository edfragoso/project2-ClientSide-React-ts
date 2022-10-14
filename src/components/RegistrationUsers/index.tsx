import { HTMLAttributes } from "react";
import * as S from "./style";
import NavBar from "components/NavBar";

type ManageUsersType = HTMLAttributes<HTMLDivElement>;

type ManageUsersProps = {} & ManageUsersType;

const ManageUsers = ({ ...props }: ManageUsersProps) => {
  return (
    <>
      <NavBar />
      <S.ManageUsers {...props}>
        <S.ManageUsersContent>
          <S.ManageUsersContentAdd>
            <S.ManageUsersTitle>Cadastro de Usuários</S.ManageUsersTitle>
            <S.EditForm type="text" placeholder="Nickname" />
            <S.EditForm type="text" placeholder="Nome" />
            <S.EditForm type="text" placeholder="Sobrenome" />
            <S.EditForm type="password" placeholder="Senha" />
            <S.EditForm type="password" placeholder="Confirmar Senha" />
            <S.EditForm type="url" placeholder="Imagem" />
          </S.ManageUsersContentAdd>
          {/*  {"Componente EditUser"} */}
        </S.ManageUsersContent>
        <S.ManageUsersActions>
          <S.ManageUsersActionsCancel>Cancelar</S.ManageUsersActionsCancel>
          <S.ManageUsersActionsSave>Enviar</S.ManageUsersActionsSave>
        </S.ManageUsersActions>
      </S.ManageUsers>
    </>
  );
};

export default ManageUsers;
