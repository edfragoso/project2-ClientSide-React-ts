import ProductItemList from "components/ProductItemList";
import NavBarr from "components/NavBar";
import { useState } from "react";
import Seek from "components/Seek";
import "./Home.scss";
import NavBarr2 from "components/NavBar/NavBarAut";

function Home() {
  const [seek, setSeek] = useState("");
  const UserId = sessionStorage.getItem("id");
  return (
    <>
      <header>{!UserId ? <NavBarr /> : <NavBarr2 />}</header>
      <main className="boxHome">
        <Seek seek={seek} setSeek={setSeek} />
        <ProductItemList seek={seek} />
      </main>
    </>
  );
}

export default Home;
