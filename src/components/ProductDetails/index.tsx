import DetailsItem from "components/DetailsItem";
import DetailsItemList from "components/DetailsItemList";
import { details } from "mocks/details";
import { products } from "mocks/products";
import * as S from "./style";

const ProductDetails = () => {
  return (
    <S.ProductDetails>
      <S.ProductDetailsTitle>Detalhes do Jogo</S.ProductDetailsTitle>
      <S.ProductDetailsList>
        <DetailsItemList
          list={
            Boolean(details.length) ? (
              details.map((item, index) => (
                <DetailsItem
                  details={item.details}
                  key={`ProductDetails-${index}`}
                  onSelect={}
                />
              ))
            ) : (
              <S.ProductDetailsListGap />
            )
          }
        />
      </S.ProductDetailsList>
    </S.ProductDetails>
  );
};

export default ProductDetails;
<></>;
