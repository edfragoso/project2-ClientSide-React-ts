import NavCrudGames from "components/NavCrudGames";
import { NavLink } from "react-router-dom";
import "./UpdateGames.scss";

const UpdateGames = () => {

  // const submitForm = (event: any) => {
  //   event.preventDefault();


  //   const createGames = {
  //     name,
  //     descricao,
  //     ano,
  //     imagem,
  //     trailer,
  //     gameplay,
  //   }

  //   axios
  //     .post("https://gamingdev.onrender.com/auth/games", createGames)
  //     .then((response) => {
  //       alert("ok");
  //       localStorage.setItem("token", response.data.token);
  //       window.location.href = "http://localhost:3000";
  //     })
  //     .catch((erro) => {
  //       if (erro?.response?.data?.message) {
  //         alert(erro.response.data.message);
  //       } else {
  //         alert(
  //           "Aconteceu um erro inesperado ao afetuar o seu login! Entre em contato com o suporte!"
  //         );
  //       }
  //     });
  
  // };


  return (
    <>
      <header>
        <NavCrudGames />
      </header>

      <div className="BoxCreateGame">
        <h1>Edite Game</h1>

        <form action="">
          <label htmlFor="title">Nome do Jogo</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Digite o nome do jogo"
            required
          />
          <label htmlFor="descricao">Descrição</label>
          <input
            type="text"
            name="descricao"
            id="descricao"
            placeholder="descricao"
            required
          />
          <label htmlFor="year">Ano de Lançamento</label>
          <input
            type="text"
            name="year"
            id="year"
            placeholder="Digite o ano de lançamento"
            required
          />
          <label htmlFor="image">Adicione a imagem</label>
          <input
            type="file"
            name="image"
            id="image"
            placeholder="Adicione a imagem do jogo"
            required
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
            <button type="submit">Editar</button>
          </NavLink>
        </form>
      </div>
    </>
  );
};

export default UpdateGames;
