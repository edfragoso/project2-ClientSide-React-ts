// import {Perfis} from "mocks/perfis";
import "./Item.scss";
import { Profile } from "../"


// type Props = typeof Perfis[0];

export default function Item( props: Profile) {
  const { imageUrl, title } = props;
  return (
    <div className="box1">
      <div className="foto">
        <img src={imageUrl} alt="" />
      </div>
      <div className="nome">
        <h2>{title}</h2>
      </div>
    </div>
  );
}
