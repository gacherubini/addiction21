import React from 'react'
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

// import AddicastSoundCloudIFrame from '../pages/AddicastSoundCloudIFrame';

const AddicastDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
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

  // get track by addicast id
  // get from API
  // no sucesso, vai popular a tela conforme o esperado
  // no erro, vai orientar o usuário para tentar novamente mais tarde 

  if (loading) return <img className="imageLoading" src={"public/loading.gif"}/>;
  if (error) return <p className="errorMensagem">{Constants.GENERIC_ERROR_MESSAGE}</p>;

  return (
    <div className='div-music-card'>
        <img src={tracks.artwork_url} />
        <h2> {tracks.title} </h2>
        <p> {tracks.description} </p>
        {/* <AddicastSoundCloudIFrame id={props.id}/> */}
    </div>
  )
}

export default AddicastDetails

