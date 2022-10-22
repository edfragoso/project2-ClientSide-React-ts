import { ProductResponse } from "types/Product";
import "./style.scss";
import { NavLink } from "react-router-dom";

type ProductItemProps = {
  product: ProductResponse;
  onSelect: (data: ProductResponse) => void;
};
const ProductItem = ({ product, onSelect }: ProductItemProps) => {
  return (
    <div className="card">
      <div className="imageItem">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="titleItem">
        {" "}
        <h2> {product.title} </h2>{" "}
      </div>
      <div className="yearScoreItem">
        <p>Lançamento: {product.year}</p>
        <p>Nota: {product.score}/5</p>
      </div>
      <NavLink to={`/details/${product.id}`}>
        <button className="btnDetails" role="listitem">
          Detalhes
        </button>
      </NavLink>
    </div>

  );
};

export default ProductItem;
