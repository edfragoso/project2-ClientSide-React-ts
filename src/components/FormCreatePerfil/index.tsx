import http from "Http";
import { useState } from "react";
import "./FormCreatePerfil.scss";

const FormCreatePerfil = () => {
  const [title, setTitle] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");

  const submitForm = (event: any) => {
    event.preventDefault();

    const UserId = sessionStorage.getItem("id");
    const userId = UserId;
    interface createPerfil {
      title: string;
      imageUrl: string;
    }

    const perfil = {
      title,
      imageUrl,
      userId,
    };

    http
      .post<createPerfil[]>("profiles", perfil)
      .then(() => {
        alert("ok");
        window.location.href = "https://project2-client-side-react-onrht4oyj-edfragoso.vercel.app";
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
          title="title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Digite seu nome."
          required
        />
        <label htmlFor="image">Adicione sua Foto</label>
        <input
          type="text"
          title="image"
          id="image"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default FormCreatePerfil;
