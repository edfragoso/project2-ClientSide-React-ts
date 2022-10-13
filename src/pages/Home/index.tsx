import NavBar from "components/NavMenu";
import ProductItem from "component/ProductItem";
import ProductItemList from "component/ProductItemList";
import { products } from "mocks/products";
import { ProductResponse } from "types/Product";
import * as S from "./style";


const handleSelection = (product: ProductResponse) => {};
const Home = () => {
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
