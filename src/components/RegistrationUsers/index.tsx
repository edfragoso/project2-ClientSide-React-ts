import { HTMLAttributes } from "react";
import * as S from "./style";
import NavBar from "components/NavBar";

type RegistrationUsersType = HTMLAttributes<HTMLDivElement>;

type RegistrationUsersProps = {} & RegistrationUsersType;

const RegistrationUsers = ({ ...props }: RegistrationUsersProps) => {
  return (
    <>
      <NavBar />
      <S.RegistrationUsers {...props}>
        <S.RegistrationUsersContent>
          <S.RegistrationUsersContentAdd>
            <S.RegistrationUsersTitle>Cadastro de Usuários</S.RegistrationUsersTitle>
            <S.EditForm type="text" placeholder="Nickname" />
            <S.EditForm type="text" placeholder="Nome" />
            <S.EditForm type="text" placeholder="Sobrenome" />
            <S.EditForm type="password" placeholder="Senha" />
            <S.EditForm type="password" placeholder="Confirmar Senha" />
            <S.EditForm type="url" placeholder="Imagem" />
          </S.RegistrationUsersContentAdd>
          {/*  {"Componente EditUser"} */}
        </S.RegistrationUsersContent>
        <S.RegistrationUsersActions>
          <S.RegistrationUsersActionsCancel>Cancelar</S.RegistrationUsersActionsCancel>
          <S.RegistrationUsersActionsSave>Enviar</S.RegistrationUsersActionsSave>
        </S.RegistrationUsersActions>
      </S.RegistrationUsers>
    </>
  );
};

export default RegistrationUsers;
