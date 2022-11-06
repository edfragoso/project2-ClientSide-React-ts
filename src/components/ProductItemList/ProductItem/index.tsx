import { ProductResponse } from "types/Product";
import "./style.scss";
import { NavLink } from "react-router-dom";

type ProductItemProps = {
  product: /* ProductResponse */ any;
};
const ProductItem = ({ product }: ProductItemProps) => {
  const { image, title, year, score, id } = product;
  return (
    <div className="card">
      <div className="imageItem">
        <img src={image} alt={title} />
      </div>
      <div className="titleItem">
        {" "}
        <h2> {title} </h2>{" "}
      </div>
      <div className="yearScoreItem">
        <p>Lançamento: {year}</p>
        <p>Nota: {score}</p>
      </div>
      <NavLink to={`/details/${id}`}>
        <button className="btnDetails" role="listitem">
          Detalhes
        </button>
      </NavLink>
      <NavLink to={`/updategames/${id}`}>
        <button>Editar</button>
      </NavLink>
    </div>
  );
};

export default ProductItem;
