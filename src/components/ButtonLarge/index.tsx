import * as S from "./style";
import React, { ButtonHTMLAttributes } from "react";

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonLargeProps = {
    value: string;
  } & ButtonType;

  const ButtonLarge = ({ value, ...props }: ButtonLargeProps) => {
	return <S.ButtonLarge {...props}>{value}</S.ButtonLarge>;
};

export default ButtonLarge;