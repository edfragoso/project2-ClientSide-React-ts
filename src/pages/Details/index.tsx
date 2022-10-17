import NavBar from "components/NavMenu";
import ProductDetails from "components/ProductDetails";
import * as S from "./style";


const Details = () => {
    return (
      <>
        <NavBar />
        <S.Home>
          <S.HomeContent>
            <S.HomeContentItems>
              <div>
                <ProductDetails />                
              </div>
            </S.HomeContentItems>
          </S.HomeContent>
        </S.Home>
      </>
    );
  };
  
  export default Details;