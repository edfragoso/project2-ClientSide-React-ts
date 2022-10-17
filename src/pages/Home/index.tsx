import NavBar from "components/NavMenu";
import ProductItem from "components/ProductItem";
import ProductItemList from "components/ProductItemList";
import { details } from "mocks/details";
import { products } from "mocks/products";
import { useState } from "react";
import { ProductResponse } from "types/Product";
import { ProductItemType } from "types/ProductItemType";


import * as S from "./style";


const handleSelection = (product: ProductResponse) => {
  const existing = details.find((i) => i.details.id === product.id);
  const item: ProductItemType = {details};
  const list = existing
  ? details.map((i) => (i.details.id === existing.details.id ? item : i))
  : [...details, item];
  setDetails(list)

};
const Home = () => {

  const [details, setDetails] = useState<ProductItemType[]>([]);

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
                  <ProductItem
                    product={product}
                    key={`ProductItem-${index}`}
                    onSelect={handleSelection}
                  />
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
