import * as S from "./style";
import logo from "assets/imgs/logo.png";
import ButtonLarge from "components/ButtonLarge";
import { HTMLAttributes, useState } from "react";

type BoxLoginType = HTMLAttributes<HTMLDivElement>;

export type BoxLoginProps = {
  onSubmitData: (data: { nickname: string; password: string }) => void;
  errorMessage: string;
} & BoxLoginType;

const BoxLogin = ({ onSubmitData, errorMessage }: BoxLoginProps) => {
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (): void => {
    const data = { nickname, password };
    onSubmitData(data);
  };

  return (
    <S.BoxLogin>
      <S.BoxLoginLogo>
        <S.BoxLoginLogoText>
          <span>Project2</span>
          <span>Frontend</span>
        </S.BoxLoginLogoText>
        {/* <S.BoxLoginLogoImage src={logo} alt="Logo" /> */}
      </S.BoxLoginLogo>
      <S.BoxLoginForm>
        <input
          type="text"
          placeholder="Nickname"
          value={nickname}
          onChange={({ target }) => setNickname}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={({ target }) => setPassword}
        />
        <ButtonLarge
         value="Entrar"
         type="button"
         onClick={handleSubmit}
        />
      </S.BoxLoginForm>
      {Boolean(errorMessage.length) && <S.BoxLoginError>{errorMessage}</S.BoxLoginError>}
    </S.BoxLogin>
  );
};

export default BoxLogin;
