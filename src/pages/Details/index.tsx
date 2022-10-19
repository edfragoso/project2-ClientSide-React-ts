import NavBar from "components/NavMenu";
import ProductDetails from "components/ProductDetails";
import * as S from "./style";
import { products } from "mocks/products";
import { useParams } from "react-router-dom";
// import { ProductResponse } from "types/Product";

const Details = () => {
  const { id } = useParams();
  
 const product = products.find((i) => i.id === id);

  return (
    <>
      <NavBar />
      <S.Home>
        <S.HomeContent>
          <S.HomeContentItems>
            <div>
              <S.ProductItemListHeaderName>
                Detalhes dos Jogos
              </S.ProductItemListHeaderName>
              {product ?   <ProductDetails product={product}  /> : null  }
                  
            </div>
          </S.HomeContentItems>
        </S.HomeContent>
      </S.Home>
    </>
  );
};

export default Details;
