import NavBar from "component/NavMenu";
import * as S from "./style";

const Home = () => {
  return (
    <>
      <NavBar />
      <S.Home>
        <S.HomeContent>
          <S.HomeContentItems>
            Items
            Items
            Items
          </S.HomeContentItems>
        </S.HomeContent>
      </S.Home>
    </>
  );
};

export default Home;
