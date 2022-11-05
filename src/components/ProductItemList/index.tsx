import ProductItem from "./ProductItem";
import "./List.scss";
import { useEffect, useState } from "react";
import http from "Http";

interface Props {
  seek: string;
}

interface Api {
  title: string;
  image: string;
  score: number;
  trailer: string;
  year: string;
  description: string;
}

const ProductItemList = (props: Props) => {
  const [games, setGames] = useState<Api[]>([]);
  const { seek } = props;

  function Seek(title: string | any) {
    const regex = new RegExp(seek, "i");
    return regex.test(title);
  }
  useEffect(() => {
    http
      .get<Api[]>("games")
      .then((response) => setGames(response.data))
      .catch((erro) => console.log(erro));
  }, []);

  useEffect(() => {
    const newList = games.filter((item) => Seek(item.title));
    setGames(newList);
  }, [seek]);

  return (
    <div className="boxList">
      {games.map((product, index) => (
        <ProductItem key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductItemList;
