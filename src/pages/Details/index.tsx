import ProductDetails from "components/ProductDetails";

import { products } from "mocks/products";
import { useParams } from "react-router-dom";
import NavBarr from "components/NavBar";
/* import { useEffect, useState } from "react"; */
import axios from "axios";
import "./Details.scss";

interface Game {
  id: string;
  title: string;
  image: string;
  description: string;
  year: string;
  score: string;
  trailer: string;
  gameplay: string;
  genreId: string;
}

function Details() {
  const { id } = useParams();
  const product = products.find((i) => i.id === id);
/* 
  useEffect(() => {

    const [game, setGame] = useState<Game>()

    const token = localStorage.getItem('token')

    axios
      .get<Game[]>("https://gamingdev.onrender.com/games/${id}", {
        headers:{'Authorization': `Bearer ${token}`}
      })
      .then(response => setGame(response.data))
      .catch((erro) => console.log(erro));
  }, []); */

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
function useEffect(arg0: () => void, arg1: never[]) {
  throw new Error("Function not implemented.");
}

