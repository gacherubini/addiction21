import { useNavigate } from "react-router-dom";
import React , { useEffect, useState } from "react";
import "./Home.css"
import Constants from "../Constants";
import AddicastSoundCloudIFrame from "./AddicastSoundCloudIFrame";


function Home() {
  
  const [shows, setShows] = useState([]); // State to store the fetched data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    fetch('http://localhost:3000/show')
    .then(response => response.json())
      .then(data => {
        setShows(data)
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
      <div>
       <h1>Addiction</h1>
        <p>
        A Addiction21 é uma label natural de Porto Alegre, BR (🇧🇷), que visa fortalecer a cena da música eletrônica na capital e região, com a promoção de eventos e artistas. Você escutará aqui sets e mixes dos nossos residentes e de diversos outros DJ's reconhecidos na indústria da música eletrônica. Acompanhe cada história musical atrelada à identidade de cada DJ apresentado.
        </p> 
        <div>
      </div>
          <h1>Addicast</h1>
          <p>O Addicast é um projeto da Addiction 21 que visa fortalecer a cena da música eletrônica na capital e região, com a promoção de eventos
             e artistas. Você escutará aqui sets e mixes dos nossos residentes e de diversos outros DJ's 
             reconhecidos na indústria da música eletrônica. 
             /n/n
             Acompanhe cada história musical atrelada à identidade de cada DJ apresentado.</p>
          <AddicastSoundCloudIFrame/>
          <h1>Shows</h1>
          </div>
            {shows.map((show) => (
             <ul>
              <li>
                <div className="div-itens-show">
                  <h2>{show.nome}</h2> 
                  <p>Artista: {show.artistas}</p>
                  <p>Data: {show.data}</p>
                </div>
              </li>
              </ul>
            ))} 
    </div>
    
    )
  }
  

  export default Home
