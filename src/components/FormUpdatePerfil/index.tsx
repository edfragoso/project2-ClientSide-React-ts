import http from "Http";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import "./UpdatePerfil.scss";

interface UpdateProfiles {
  title: string;
  imageUrl: string;
}

const UpdatePerfil = () => {
  const [title, setTitle] = useState<string>('')
  const [imageUrl, setImageUrl] = useState<string>('')

  const {id} = useParams()

  useEffect(() =>{
    http.get(`profiles/${id}`)
    .then(response => {
      console.log(response);
      setTitle(response.data.title);
      setImageUrl(response.data.imageUrl);
    })
    .catch((error) => console.log(error))
  }, [])

  const SubmitForm = (event:any) =>{
    event.preventDefault();

    const editedProfile = {
      title,
      imageUrl
    }

    http.patch(`profiles/${id}`, editedProfile)
    .then((response) => {
      alert('ok');
      window.location.href = "http://localhost:3000";
    })
    .catch((erro) => {
      if (erro?.response?.data?.message) {
        alert(erro.response.data.message);
      } else {
        alert("Aconteceu um erro inesperado ao criar uma game!");
      }
    });

  }


  return (
    <>
      <div className="BoxCreatePerfil">
        <h1>Edite seu Perfil</h1>

        <form onSubmit={SubmitForm}>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            placeholder="Digite seu nome."
            required
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="image">Adicione sua Foto</label>
          <input type="text" 
          name="imageUrl"
          id="imageUrl"
          value={imageUrl}
          placeholder="Adicione a imagem do jogo"
          required
          onChange={(e) => {
            setImageUrl(e.target.value);
          }}
          />
        
            <button type="submit">Enviar</button>
          
        </form>
      </div>
    </>
  );
};

export default UpdatePerfil;
