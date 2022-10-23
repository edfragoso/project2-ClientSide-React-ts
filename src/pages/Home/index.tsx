import ProductItemList from "components/ProductItemList";
import NavBarr from "components/NavBar";
import { useState } from "react";
import Seek from "components/Seek";
import './Home.scss';

function Home() {
  const [seek, setSeek] = useState("")
  return (
    <>
      <header>
        <NavBarr />
      </header>
      <main className="boxHome">
        <Seek seek={seek} setSeek={setSeek} />
        <ProductItemList seek={seek} />
      </main>
    </>
  );
}

export default Home;
