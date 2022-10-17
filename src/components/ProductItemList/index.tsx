import * as S from "./style";

interface ProductItemListProps {
  children: React.ReactNode;
}
const ProductItemList = ({ children }: ProductItemListProps) => {
  return (
    <section>
      <S.ProductItemListHeader>
        <S.ProductItemListHeaderName>
          Escolha dos Jogos
        </S.ProductItemListHeaderName>
      </S.ProductItemListHeader>
      <S.ProductItemList>{children}</S.ProductItemList>
    </section>
  );
};

export default ProductItemList;
