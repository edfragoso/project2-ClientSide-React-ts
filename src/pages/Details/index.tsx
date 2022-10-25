import ProductDetails from "components/ProductDetails";
// import * as S from "./style";
import { products } from "mocks/products";
import { useParams } from "react-router-dom";
import NavBarr from "components/NavBar";
import './Details.scss';

function Details() {
  const { id } = useParams();
  const product = products.find((i) => i.id === id);

  return (
    <>
      <header>
        <NavBarr />
      </header>
      <main className="boxDetails">
        {product ? <ProductDetails product={product} /> : null}
      </main>



      {/* <NavBarr />
      <S.Home>
        <S.HomeContent>
          <S.HomeContentItems>
            <div>
              {product ? <ProductDetails product={product} /> : null}
            </div>
          </S.HomeContentItems>
        </S.HomeContent>
      </S.Home> */}
    </>
  );
}

export default Details;
