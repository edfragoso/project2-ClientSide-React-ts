import NavBar from "components/NavMenu";
import ProductItem from "components/ProductItem";
import ProductItemList from "components/ProductItemList";

import { products } from "mocks/products";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ProductResponse } from "types/Product";


// interface item {
//   id: string;
// }


import * as S from "./style";






const Home = () => {

  // const [details, setDetails] = useState<ProductResponse[]>([]);

  const handleSelection = (product: ProductResponse) => {

 
 
   };

  return (
    <>
      <NavBar />
      <S.Home>
        <S.HomeContent>
          <S.HomeContentItems>
            <div>
            <ProductItemList>
              {Boolean(products.length) &&
                products.map((product, index) => (
              <NavLink to= {`/details/${product.id}`}>

                    <ProductItem 
                     
                      product={product}
                      key={`ProductItem-${index}`}
                      onSelect={handleSelection}
                    />
                  </NavLink>
                ))}
            </ProductItemList>
            </div>
          </S.HomeContentItems>
        </S.HomeContent>
      </S.Home>
    </>
  );
};

export default Home;
