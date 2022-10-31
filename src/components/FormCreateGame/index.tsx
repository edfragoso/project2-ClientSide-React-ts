import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./FormCreateGame.scss";




// const [nome, definirNome] = useState<string>();
// const [descricacao, definirDescricao] = useState<string>();
// const [ano, definirAno] = useState<string>();
// const [image, definirImage] = useState<string>();

const CreateGame = () => {
  return (
    <div className="BoxCreateGame">
      <h1>Cadastre um novo Game</h1>

      <form  onSubmit={(e) => {
        e.preventDefault();
        // CreateGame();
      }}>

        <label htmlFor="title">Nome do Jogo</label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Digite o nome do jogo"
          required
        //   onChange={(e) => definirNome(e.target.value) }
        />
        <label htmlFor="descricao">Descrição</label>
        <input
          type="text"
          name="descricao"
          id="descricao"
          placeholder="descricao"
          required
        //   onChange={(e) => { definirDescricao(e.target.value) }}
        />
        <label htmlFor="year">Ano de Lançamento</label>
        <input
          type="text"
          name="year"
          id="year"
          placeholder="Digite o ano de lançamento"
          required
        //   onChange={(e) => { definirAno(e.target.value) }}
        />
        <label htmlFor="image">Adicione a imagem</label>
        <input
          type="file"
          name="image"
          id="image"
          placeholder="Adicione a imagem do jogo"
          required
        //   onChange={(e) => { definirImage(e.target.value) }}
        />
        <label htmlFor="trailer">Trailer </label>
        <input
          type="text"
          name="trailer"
          id="trailer"
          placeholder="Adicione o Trailer do jogo"
          required
        />
        <label htmlFor="gameplay">Gameplay </label>
        <input
          type="text"
          name="gameplay"
          id="gameplay"
          placeholder="Adicione o Gameplay do jogo"
          required
        />

        <NavLink to={"/"}>
          <button type="submit">Criar</button>
        </NavLink>
      </form>
    </div>
  );
};

export default CreateGame;
