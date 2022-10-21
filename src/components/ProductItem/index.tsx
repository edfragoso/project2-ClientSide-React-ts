import * as S from "./style";
import { ProductResponse } from "types/Product";

type ProductItemProps = {
    product: ProductResponse
    onSelect: (data: ProductResponse) => void
}
const ProductItem = ({product, onSelect}: ProductItemProps) => {
    return (

        <S.ProductItem role='listitem' onClick={()=> onSelect(product)}>
        <S.ProductItemImage src={product.image} alt={`Jogo ${product.title}`}/>
        <div>
                <S.ProductItemName>{product.title}</S.ProductItemName>
                <S.ProductItemYear>{product.year}</S.ProductItemYear>
                <S.ProductItemScore>{product.score}</S.ProductItemScore>
            </div>
            </S.ProductItem>
    );
            
}

export default ProductItem;