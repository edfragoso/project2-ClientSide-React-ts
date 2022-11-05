import http from "Http";
import { useState } from "react";
import "./FormCreatePerfil.scss";

const FormCreatePerfil = () => {
  const [name, setName] = useState<string>("");
  const [imagem, setImagem] = useState<string>("");

  const submitForm = (event: any) => {
    event.preventDefault();

    interface createPerfil {
      title: string;
      image: string;
    }

    http
      .post<createPerfil[]>("auth/profiles")
      .then(() => {
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
