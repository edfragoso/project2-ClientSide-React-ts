import {Perfis} from "mocks/perfis";
import "./Item.scss";

type Props = typeof Perfis[0];

export default function Item(props: Props) {
  const { foto, usuario } = props;
  return (
    <div className="box1">
      <div className="foto">
        <img src={foto} alt="" />
      </div>
      <div className="nome">
        <h2>{usuario}</h2>
      </div>
    </div>
  );
}
