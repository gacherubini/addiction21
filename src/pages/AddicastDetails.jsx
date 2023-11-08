import React from 'react'
import { useParams } from "react-router-dom";
// import AddicastSoundCloudIFrame from '../pages/AddicastSoundCloudIFrame';


const AddicastDetails = () => {

  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [addicast, setAddicastData] = useState([]); 

  useEffect(() => {
    fetch('http://localhost:3000/track/' + id)
    .then(response => response.json())
      .then(data => {
        setAddicastData(data)
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);


  // get track by addicast id
  // get from API
  // no sucesso, vai popular a tela conforme o esperado
  // no erro, vai orientar o usuário para tentar novamente mais tarde

  return (
    <div className='div-music-card'>
        <img src={addicast.avatar_url} alt="" />
        <h2> {addicast.title} </h2>
        <p> {addicast.description} </p>

        {/* <AddicastSoundCloudIFrame id={props.id}/> */}


    </div>
  )
}

export default AddicastDetails

