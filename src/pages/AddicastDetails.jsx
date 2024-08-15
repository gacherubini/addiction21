import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./AddicastDetails.css";
import Constants from "../Constants";
import AddicastSoundCloudIFrame from './AddicastSoundCloudIFrame';

const AddicastDetails = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id } = useParams();
    const [track, setTrack] = useState(null);

    useEffect(() => {
        fetch(`https://addiction21-api.onrender.com/${id}`)
            .then(response => response.json())
            .then(data => {
                setTrack(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <img className="imageLoading" src={"../public/loading.gif"} alt="Loading" />;
    }

    if (error) {
        return <p className="errorMensagem">{Constants.GENERIC_ERROR_MESSAGE}</p>;
    }

    if (!track) {
        return <p className="errorMensagem">Track not found</p>;
    }

    return (
        <div className='div-music-card'>
            <div className='div-informacoes-details'>
                <img
                    className='imagem-details'
                    src={track.artwork_url}
                    alt={track.title || 'Track artwork'}
                />
                <div className='div-informacoes-details-inside'>
                    <h2>{track.title}</h2>
                    <p className='p-inside'>Gênero: <span>{track.genre}</span></p>
                    <p className='p-inside'>Label: <span><a className='label-inside-details' href={track.permalink_url}>{track.user?.username}</a></span></p>
                    <p className='p-inside'>Cidade: <span>{track.user?.city}</span></p>
                    <p className='p-inside'>Data de Lançamento: <span>{track.created_at}</span></p>
                </div>
            </div>
            <p>{track.description}</p>
            <div className='div-frame'>
                <AddicastSoundCloudIFrame id={track.id}/>
            </div>
        </div>
    );
};

export default AddicastDetails;
