import { ProductResponse } from "types/Product";
import "./Details.scss";

type ProductItemProps = {
  product: ProductResponse;
};

const ProductDetails = ({ product }: ProductItemProps) => {
  return (
    <div className="boxDetails">
      <div className="title">
        <h2>{product.title}</h2>
      </div>

      <div className="description">
        <img src={product.image} alt={product.title} className="imgDetails" />
        <div className="descricao">
          <p>
            {product.description}
            <br />
            <br />
            ano de lançamento: {product.year}
          </p>

          <p>IMDb:{product.score}/5</p>
        </div>
      </div>

      <div className="boxVideos">
        <div>
          <h3>Trailer</h3>
          <iframe
            width="560"
            height="315"
            src={product.trailer}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div>
          <h3>GamePlay</h3>
          <iframe
            width="560"
            height="315"
            src={product.gameplay}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
