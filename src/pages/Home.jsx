import { useEffect, useState} from "react";
import "./Home.css"
import Constants from "../Constants";
import Addicast from "../components/Addicast";

function Home() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [addicasts, setAddicast] = useState([]);


  useEffect(() => {
    fetch('http://localhost:3000/addicast')
      .then((response) => response.json())
      .then((data) => {
        setAddicast(data); 
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);


  if (loading) return <img className="imageLoading" src={"public/loading.gif"}/>;
  if (error) return <p className="errorMensagem">{Constants.GENERIC_ERROR_MESSAGE}</p>;

  return (
      <div className="div-pagina-home">
          {/*<p>A Addiction21 é uma label natural de Porto Alegre, BR (🇧🇷), que visa fortalecer a cena da música eletrônica*/}
          {/*    na capital e região, com a promoção de eventos e artistas. Você escutará aqui sets e mixes dos nossos*/}
          {/*    residentes e de diversos outros DJ's reconhecidos na indústria da música eletrônica. Acompanhe cada*/}
          {/*    história musical atrelada à identidade de cada DJ apresentado.</p>*/}
          <div className="row coluna-addicast">
              <h2>Ultimos Addicasts:</h2>
              <div className="div-lista-addicast"
                   style={{
                       width: "100%",
                       overflowX: "scroll",
                       scrollBehavior: "smooth",
                   }}>
                  {addicasts.map((addicast) => (
                      <Addicast
                          key={addicast.id}
                          id={addicast.id}
                          imagem={addicast.artwork_url}
                          nome={addicast.title}
                          label="Addiction 21"
                          link={addicast.permalink_url}
                      />
                  ))}
              </div>
          </div>
      </div>
  )
}


export default Home


