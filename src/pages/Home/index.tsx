import ProductItem from "components/ProductItem";
import ProductItemList from "components/ProductItemList";
import { products } from "mocks/products";
import { ProductResponse } from "types/Product";
import * as S from "./style";
import NavBarr from "components/NavBar";
import { NavLink } from "react-router-dom";

const handleSelection = (product: ProductResponse) => {};
const Home = () => {
  return (
    <>
      <NavBarr />
      <S.Home>
        <S.HomeContent>
          <S.HomeContentItems>
            <div>
              <ProductItemList>
                {Boolean(products.length) &&
                  products.map((product, index) => (
                    <NavLink to={`/details/${product.id}`}>
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
