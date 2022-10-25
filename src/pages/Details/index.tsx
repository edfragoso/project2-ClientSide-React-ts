import ProductDetails from "components/ProductDetails";

import { products } from "mocks/products";
import { useParams } from "react-router-dom";
import NavBarr from "components/NavBar";
import "./Details.scss";

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
    </>
  );
}

export default Details;
