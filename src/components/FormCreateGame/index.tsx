import axios from "axios";
import { useState } from "react";
import "./FormCreateGame.scss";

const CreateGame = () => {
  const [name, setName] = useState<string>("");
  const [descricao, setDescricao] = useState<string>("");
  const [ano, setAno] = useState<string>("");
  const [imagem, setImagem] = useState<string>("");
  const [trailer, setTrailer] = useState<string>("");
  const [gameplay, setGameplay] = useState<string>("");

  const submitForm = (event: any) => {
    event.preventDefault();

    axios({
      method: "post",
      // url: "https://gamingdev.onrender.com/users",
      data: {
        name: name,
        descricao: descricao,
        ano: ano,
        imagem: imagem,
        trailer: trailer,
        gameplay: gameplay,
      },
    });
    // .then(() => {
    //   alert("Game criado com sucesso");
    //   window.location.href = "http://localhost:3000/Home";
    // })
    // .catch(() => {
    //   alert("Ops! Algo de errado não esta certo");
      
    // });
  };

  return (
    <div className="BoxCreateGame">
      <h1>Cadastre um novo Game</h1>

      <form onSubmit={submitForm}>
        <label htmlFor="title">Nome do Jogo</label>
        <input
          type="text"
          name="title"
          id="title"
          value={name}
          placeholder="Digite o nome do jogo"
          required
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="descricao">Descrição</label>
        <input
          type="text"
          name="descricao"
          id="descricao"
          value={descricao}
          placeholder="descricao"
          required
          onChange={(e) => {
            setDescricao(e.target.value);
          }}
        />
        <label htmlFor="year">Ano de Lançamento</label>
        <input
          type="text"
          name="year"
          id="year"
          value={ano}
          placeholder="Digite o ano de lançamento"
          required
          onChange={(e) => {
            setAno(e.target.value);
          }}
        />
        <label htmlFor="image">Adicione a imagem</label>
        <input
          type="file"
          name="image"
          id="image"
          value={imagem}
          placeholder="Adicione a imagem do jogo"
          required
          onChange={(e) => {
            setImagem(e.target.value);
          }}
        />
        <label htmlFor="trailer">Trailer </label>
        <input
          type="text"
          name="trailer"
          id="trailer"
          value={trailer}
          placeholder="Adicione o Trailer do jogo"
          required
          onChange={(e) => {
            setTrailer(e.target.value);
          }}
        />
        <label htmlFor="gameplay">Gameplay </label>
        <input
          type="text"
          name="gameplay"
          id="gameplay"
          value={gameplay}
          placeholder="Adicione o Gameplay do jogo"
          required
          onChange={(e) => {
            setGameplay(e.target.value);
          }}
        />

        <button type="submit">Criar</button>
      </form>
    </div>
  );
};

export default CreateGame;
