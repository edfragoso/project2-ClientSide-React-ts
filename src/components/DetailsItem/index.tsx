
import * as S from "./style";
import { ProductItemType } from "types/ProductItemType";


 export type ProductItemDetailsProps = {
  details: ProductItemType
  onSelect: (data: ProductItemType) => void
}

const DetailsItem = ({details}: ProductItemDetailsProps) => {
  return(
   <S.DetailItem>
        <S.DetailsItemProduct>
            <S.DetailsItemProductImage src={details.image} alt={`Jogo ${details.title}`}/>
            <S.ItemProductDetails>
                <S.ItemProductDetailsTitle>{details.title}</S.ItemProductDetailsTitle>
                <S.ItemProductDetailsDescription>{details.description}</S.ItemProductDetailsDescription>
                <S.ItemProductDetailsScore>{details.score}</S.ItemProductDetailsScore>
                <S.DetailsItemProductYoutube>{details.youtube}</S.DetailsItemProductYoutube>
                <S.DetailsItemProductGameplay>{details.gameplay}</S.DetailsItemProductGameplay>
            </S.ItemProductDetails>
        </S.DetailsItemProduct>
   </S.DetailItem>
  );
}

export default DetailsItem;