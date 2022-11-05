import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./FormCreatePerfil.scss";

const FormCreatePerfil = () => {
  const [name, setName] = useState<string>("");
  const [imagem, setImagem] = useState<string>("");

  const submitForm = (event: any) => {
    event.preventDefault();

    const token = localStorage.getItem('token');

  interface createPerfil {
    title: string,
    image: string,
  }

  axios
      .post<createPerfil[]>("https://gamingdev.onrender.com/auth/profiles", )
      .then((response) => {
        alert("ok");
        window.location.href = "http://localhost:3000";
      })
      .catch((erro) => {
        if (erro?.response?.data?.message) {
          alert(erro.response.data.message);
        } else {
          alert(
            "Aconteceu um erro inesperado ao afetuar o seu login! Entre em contato com o suporte!"
          );
        }
      });
  };

  return (
    <div className="BoxCreatePerfil">
      <h1>Cadastre seu Perfil</h1>

      <form onSubmit={submitForm}>
        <label htmlFor="title">Nome</label>
        <input
          type="text"
          name="title"
          id="title"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Digite seu nome."
          required
        />
        <label htmlFor="image">Adicione sua Foto</label>
        <input
          type="text"
          name="image"
          id="image"
          value={imagem}
          onChange={(e) => setImagem(e.target.value)}
        />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default FormCreatePerfil;
