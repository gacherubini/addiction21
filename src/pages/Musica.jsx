import React , { useEffect, useState } from "react";
import Constants from "../Constants";
import { useNavigate } from "react-router-dom";


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



let navigate = useNavigate(); 
const routeChange = () =>{ 
  let path = `/contato`; 
  navigate(path);
} 

if (loading) return <img className="imageLoading" src={"public/loading.gif"}/>;
if (error) return <p className="errorMensagem">{Constants.GENERIC_ERROR_MESSAGE}</p>;

  return (
    
    <div className="div-pagina-musica">
      <h1>Addiction Records</h1>
      <div className="div-records">
      <p>A "Addiction 21 Records".
        É uma gravadora que vai integrar a nossa marca com lançamentos esporádicos de tracks dos gêneros: 
        Minimal, Deep Tech, Rominimal, Deep House e demais vertentes do House music.
        Se quiser enviar a sua track pra gente <b>clique na imagem abaixo para entrar em contato:</b></p>
      <div className="div-div-records">
      <img className="imagemRecords" src="public/records.png" width="500px" onClick={routeChange} />
      </div>
          </div>
            <h1>Musicas Lançamento</h1>
          <ul>
            {musicas.map((musica) => (
              <li>
                      <a  href={musica.link}>
                      <img 
                    className="imagemMusicaInterna"
                     src={musica.imagem}
                   />   
              </a> 
                  <h2>{musica.nome}</h2> 
                  <p>Artista: {musica.artistas}</p>
                  <p>Data: {musica.data}</p>
              </li>
            ))}
          </ul>
    </div>
  );
}

export default Musica;
