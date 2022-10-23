import { products } from "mocks/products";
import ProductItem from "./ProductItem";
import "./List.scss";
import { useEffect, useState } from "react";

interface Props {
  seek: string ;
  
}

const ProductItemList = (props: Props) => {
  const [list, setList] = useState(products);
  const { seek} = props;

  function Seek(title: string | any) {
    const regex = new RegExp(seek, "i");
    return regex.test(title);
  }
 

  useEffect(() => {
    const newList = products.filter((item) => Seek(item.title)    )
    setList(newList);
  }, [seek]);

  return (
    <div className="boxList">
      {list.map((product, index) => (
        <ProductItem key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductItemList;
