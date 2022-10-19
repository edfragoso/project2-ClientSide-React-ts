import { ProductResponse } from "types/Product";
import { NavLink } from "react-router-dom";
import * as S from "./style";


type ProductItemProps = {
    product: ProductResponse 
    
}
const ProductDetails = ({product}: ProductItemProps) => {
    return (

        <S.ProductDetail>
            <S.ProductItemDetailImage src={product.image} alt={`Jogo ${product.title}`}/>
            <div>
                <S.ProductItemDetailName>{product.title}</S.ProductItemDetailName>
                <S.ProductItemDetailYear>{product.year}</S.ProductItemDetailYear>
                <S.ProductItemDetailScore>{product.score}</S.ProductItemDetailScore>
                <S.ProductItemDetailDescription>{product.description}</S.ProductItemDetailDescription>
                <S.ProductItemDetailYoutube>{product.youtube}</S.ProductItemDetailYoutube>
                <S.ProductItemDetailGameplay>{product.gameplay}</S.ProductItemDetailGameplay>
                
            </div>
            

            {/* <NavLink to="/details">Detalhes</NavLink> */}
            
        </S.ProductDetail>
    );
}

export default ProductDetails;