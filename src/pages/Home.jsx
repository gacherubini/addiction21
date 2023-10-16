import { useNavigate } from "react-router-dom";
import React , { useEffect, useState } from "react";
import "./Home.css"
import Constants from "../Constants";


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
                  <div className="div-buttonVerMais">
                    <button onClick={routeChange} className="buttonVerMais">Ver Mais</button>
                   </div>
              </li>
              </ul>
            ))}
    </div>
    
    )
  }
  

  export default Home
