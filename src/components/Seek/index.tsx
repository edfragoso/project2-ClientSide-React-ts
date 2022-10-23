import "./Seek.scss";
import { CgSearch } from "react-icons/cg";

interface Props {
  seek: string;
  setSeek: React.Dispatch<React.SetStateAction<string>>;
}

export default function Seek({ seek, setSeek }: Props) {
  return (
    <div className="seek">
      <input
        type="text"
        value={seek}
        placeholder="Buscar"
        onChange={(e) => setSeek(e.target.value)}
      />
      <CgSearch size={20} color="#4C4D5F" />
    </div>
  );
}
