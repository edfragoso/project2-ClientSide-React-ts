import { products } from "mocks/products";
import { Game } from "pages/Details";
import { Link } from "react-router-dom";
import { ProductResponse } from "types/Product";
import "./Details.scss";

type ProductItemProps = {
  product: Game;
};

const ProductDetails = ({ product}: ProductItemProps ) => {
  const { title, image, description, year, score, trailer, gameplay } = product;
  return (
    <div className="boxDetails">
      
      <div className="title">
        <h2>{title}</h2>
      </div>
      <div className="description">
        <img src={image} alt={title} className="imgDetails" />
        <div className="descricao">
          <p>
            {description}
            <br />
            <br />
            ano de lançamento: {year}
          </p>

          <p>IMDb:{score}/5</p>
        </div>
      </div>
      <div className="boxVideos">
        <div>
          <h3>Trailer</h3>
          <iframe
            width="560"
            height="315"
            src={trailer}
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
            src={gameplay}
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
