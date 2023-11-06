import { useNavigate } from "react-router-dom";
import React , { useEffect, useState } from "react";
import "./Home.css"
import Constants from "../Constants";
import AddicastSoundCloudIFrame from "./AddicastSoundCloudIFrame";


function Home() {
  
  const [shows, setShows] = useState([]); // State to store the fetched data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [musicas, setMusicasData] = useState([]); // State to store the fetched data

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
    let path = `/sobre`; 
    navigate(path);
  } 
  
  if (loading) return <img className="imageLoading" src={"public/loading.gif"}/>;
  if (error) return <p className="errorMensagem">{Constants.GENERIC_ERROR_MESSAGE}</p>;

  return (
    <div className="div-pagina-home">
      <h1>Addiciton21</h1>
      <AddicastSoundCloudIFrame/>
        <ul>
            {musicas.map((musica) => (
              <li>
                      <a  href={musica.link}>
                      <img 
                    className="imagemMusicaInternaHome"
                     src={musica.imagem}
                   />   
              </a> 
                  <h4 className="nome-interno">{musica.nome}</h4> 
                  <p>Artista: {musica.artistas}</p>
                  <p>Data: {musica.data}</p>
              </li>
            ))}
          </ul>
    </div>
    
    )
  }
  
  
  export default Home
  
  {/* {shows.map((show) => (
   <ul>
    <li>
      <div className="div-itens-show">
        <h2>{show.nome}</h2> 
        <p>Artista: {show.artistas}</p>
        <p>Data: {show.data}</p>
      </div>
    </li>
    </ul>
  ))}  */}