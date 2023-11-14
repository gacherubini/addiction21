import React from 'react'
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./AddicastDetails.css"; // Importe seu arquivo CSS para aplicar estilos
import Constants from "../Constants";
import "../../public/background.jpg"
import '../styles/app.css'





import AddicastSoundCloudIFrame from './AddicastSoundCloudIFrame';

const AddicastDetails = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const [tracks, setTracks] = useState([]); 

  useEffect(() => {
    fetch(`http://localhost:3000/track/${id}`)
    .then(response => response.json())
      .then(data => {
        setTracks(data)
        setLoading(false);
      })
      .catch(error => { 
        setError(error);
        setLoading(false);
      });
    }, [id]); 


  if (loading) { 
    return <img className="imageLoading" src={"../public/loading.gif"}/>;
  }
  if (error) { 
    return <p className="errorMensagem">{Constants.GENERIC_ERROR_MESSAGE}</p>;
  }
  return (
    <div className='div-music-card'>
      <div className='div-informacoes-details'>
        <img className='imagem-details' src={tracks.artwork_url} />
          <div className='div-informacoes-details-inside'>
            <div></div>
            <h2>{tracks.title}</h2>
            <p className='p-inside'>Gênero: <span>{tracks.genre}</span></p>
            <p className='p-inside'>Label: <span><a className='label-inside-details' href="https://soundcloud.com/addictionlabel21">{tracks.user.username}</a></span></p>
            <p className='p-inside'>Cidade: <span>{tracks.user.city}</span></p>
            <p className='p-inside'>Data de Lançamento: <span>{tracks.created_at}</span></p>
          </div>
      </div>
        <p>{tracks.description} </p>
        <div className='div-frame'>
          <AddicastSoundCloudIFrame id={tracks.id}/>
        </div>
    </div>
  )
}

export default AddicastDetails

