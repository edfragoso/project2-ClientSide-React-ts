import ProductDetails from "components/ProductDetails";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBarr from "components/NavBar";
import http from "Http";
import "./Details.scss";

export interface Game {
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

  const [game, setGame] = useState<Game>();
  useEffect(() => {
    http
      .get<Game>(`/games/${id}`)
      .then((response) => setGame(response.data))
      .catch((erro) => console.log(erro));
  }, []);

  return (
    <>
      <header>
        <NavBarr />
      </header>
      <main className="boxDetails">
        {game ? <ProductDetails product={game} /> : null}
      </main>
    </>
  );
}

export default Details;
