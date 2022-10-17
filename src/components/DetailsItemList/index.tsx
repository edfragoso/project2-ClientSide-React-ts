
import * as S from "./style";
import React, { HTMLAttributes } from "react";

type DivType = HTMLAttributes<HTMLDivElement>;

export type ProductItemListProps = {
    list: React.ReactNode;
  } & DivType;

const DetailsItemList = ({ list, ...props }: ProductItemListProps) => {
  return(
    <div {...props}>
        <S.ProductItemList role="listbox">{list}</S.ProductItemList>
    </div>
  );
}

export default DetailsItemList;


