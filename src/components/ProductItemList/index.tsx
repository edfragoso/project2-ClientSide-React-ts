import { products } from "mocks/products";
import ProductItem from "./ProductItem";
import "./List.scss";
import { useEffect, useState } from "react";
import axios from "axios";

interface Props {
  seek: string;
}

interface Api {
  title:string;
  image:string;
  score:number;
  trailer:string;
  year:string;
  description:string;
}

const ProductItemList = (props: Props) => {
  const [list, setList] = useState(products);
  const [games, setGames] = useState<Api[]>([]);
  const { seek } = props;

  function Seek(title: string | any) {
    const regex = new RegExp(seek, "i");
    return regex.test(title);
  }
  useEffect(() => {

    const token = localStorage.getItem('token')

    axios
      .get<Api[]>("https://gamingdev.onrender.com/games", {
        headers:{'Authorization': `Bearer ${token}`}
      })
      .then(response => setGames(response.data))
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
