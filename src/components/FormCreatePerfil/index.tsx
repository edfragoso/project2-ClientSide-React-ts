import axios from "axios";
import { useState } from "react";
import "./FormCreatePerfil.scss";

const FormCreatePerfil = () => {
  const [name, setName] = useState<string>("");
  const [imagem, setImagem] = useState<string>("");

  const submitForm = (event: any) => {
    event.preventDefault();

    axios({
      method: "post",
      // url: "https://gamingdev.onrender.com/users",
      data: {
        name: name,
        imagem: imagem,
      },
    });
    // .then(() => {
    //   alert("Perfil criado com sucesso");
    //   window.location.href = "http://localhost:3000/Perfil";
    // })
    // .catch(() => {
    //   alert("Ops! Algo de errado não esta certo");

    // });
  };

  return (
    <div className="BoxCreatePerfil">
      <h1>Cadastre seu Perfil</h1>

      <form onSubmit={submitForm}>
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Digite seu nome."
          required
        />
        <label htmlFor="imagem">Adicione sua Foto</label>
        <input
          type="file"
          name="imagem"
          id="imagem"
          value={imagem}
          onChange={(e) => setImagem(e.target.value)}
        />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default FormCreatePerfil;
