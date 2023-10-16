import React , { useEffect, useState } from "react";
import {FaSoundcloud} from "react-icons/fa"
import Constants from "../Constants";


import "./Musica.css"

function Musica() {

const [musicas, setMusicasData] = useState([]); // State to store the fetched data
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
  fetch('http://localhost:3000/musica')
  .then(response => response.json())
    .then(data => {
      setMusicasData(data)
      setLoading(false);
    })
    .catch(error => {
      setError(error);
      setLoading(false);
    });
}, []);



if (loading) return <img className="imageLoading" src={"public/loading.gif"}/>;
if (error) return <p className="errorMensagem">{Constants.GENERIC_ERROR_MESSAGE}</p>;

  return (
    <div className="div-pagina-musica">
      <div>
            <h1>Musicas Lançamento</h1>
          </div>
          <ul>
            {musicas.map((musica) => (
              <li>
                  <h2>{musica.nome}</h2> 
                  <p>Artista: {musica.artistas}</p>
                  <p>Data: {musica.data}</p>
                  <img 
                    className="imagemMusicaInterna"
                     src={musica.imagem}
                   />
              </li>
            ))}
          </ul>
            <div className="soundcloudSection">
          <h3 className="tituloEscuteNossoSom">Escute nosso som no SoundCloud</h3>
              <a  href="https://soundcloud.com/addictionlabel21">
              <FaSoundcloud size={100} />     
              </a> 
            </div> 
    </div>
  );
}

export default Musica;
