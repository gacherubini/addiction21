import { useNavigate } from "react-router-dom";
import React , { useEffect, useState } from "react";
import "./Home.css"
import Constants from "../Constants";
import Addicast from "../components/Addicast";
import Track from "../components/Track";


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

      <p>A Addiction21 é uma label natural de Porto Alegre, BR (🇧🇷), que visa fortalecer a cena da música eletrônica na capital e região, com a promoção de eventos e artistas. Você escutará aqui sets e mixes dos nossos residentes e de diversos outros DJ's reconhecidos na indústria da música eletrônica. Acompanhe cada história musical atrelada à identidade de cada DJ apresentado.</p>

      <div className="row coluna-addicast">
      <h2>Tracks da Addiction 21 Records:</h2>
      
      {musicas.map((musica) => (
            <Track imagem={musica.imagem} nome={musica.nome} artistas={musica.artistas} label="Addiction 21"/>
      ))}

     
      <h2>Ultimos Addicasts:</h2>

      {musicas.map((musica) => (
          <Addicast imagem={musica.imagem} nome={musica.nome} artistas={musica.artistas}/>
      ))}
      </div>

    </div>
    )
  }
  
  
  export default Home

  {/* <h1>Addiciton21</h1>
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
      </ul> */}
  
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