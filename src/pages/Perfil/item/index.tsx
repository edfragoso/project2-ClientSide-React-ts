import "./Item.scss";
import { Profile } from "../";

export default function Item(props: Profile) {
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
