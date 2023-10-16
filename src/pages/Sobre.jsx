import "./Sobre.css"; // Importe seu arquivo CSS para aplicar estilos
import {FaInstagramSquare, FaTwitter, FaTiktok} from "react-icons/fa"
import React , { useEffect, useState } from "react";
import Constants from "../Constants";

const gui = "public/guilherme.jpg";
const daluz = "public/daluz.jpg";

function Sobre() {
  const [ShowsDataNew, setShowData] = useState([]); // State to store the fetched data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    fetch('http://localhost:3000/showAntigo')
    .then(response => response.json())
      .then(data => {
        setShowData(data)
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);
  
  if (loading) return <img className="imageLoading" src={"public/loading.gif"}/>;
  if (error) return <p className="errorMensagem">{Constants.GENERIC_ERROR_MESSAGE}</p>;
  
  return (
    <div className="div-pagina-home">
       <div>
            <h1>Sobre Nos</h1>
          </div>
      <div className="sobre-descricao">
        <p>
          Eletrônica Addiction21: Explorando Novos Horizontes Sonoros com Guilherme Cherubini e Daluz. A cena da música eletrônica está sempre evoluindo, e entre as diversas vertentes que se desenvolvem, há um projeto que merece destaque especial: Eletrônica Addiction21. Este projeto é a colaboração única entre os talentosos músicos Guilherme Cherubini e Daluz, que têm cativado audiências em todo o mundo com sua música eletrônica inovadora e envolvente.
        </p>
      </div>
      <div className="author-section">
        <div className="author">
          <h2>Cherubini</h2>
          <img width={300} src={gui} alt="Guilherme Cherubini" />
          <p>
            Cherubini é um visionário da música eletrônica. Com sua habilidade excepcional para criar paisagens sonoras complexas e emotivas, ele é o responsável por boa parte do som distinto do Eletrônica Addiction21. Sua jornada na música eletrônica começou cedo, e desde então ele tem explorado os limites do som, fundindo elementos de diferentes gêneros musicais para criar algo verdadeiramente único. Seus anos de experiência e paixão pela música são evidentes em cada batida e melodia que ele produz.
          </p>
          <h2>Siga Cherubini nas redes sociais  </h2>
          <div className="insta-section-cherubini">
              <a  href="https://www.instagram.com/cherubinimusic/">
              <FaInstagramSquare size={80} />     
              </a> 
              <a  href="https://www.instagram.com/cherubinimusic/">
              <FaTwitter size={80} />     
              </a>
              <a  href="https://www.instagram.com/cherubinimusic/">
              <FaTiktok size={80} />     
              </a>
            </div>
        </div>
        <div className="author">
          <h2>Daluz</h2>
          <img  width={300} src={daluz} alt="Daluz" />
            <p>
            Da luz, é um visionário da música eletrônica.  Com sua habilidade excepcional para criar paisagens sonoras complexas e emotivas, ele é o responsável por boa parte do som distinto do Eletrônica Addiction21. Sua jornada na música eletrônica começou cedo, e desde então ele tem explorado os limites do som, fundindo elementos de diferentes gêneros musicais para criar algo verdadeiramente único. Seus anos de experiência e paixão pela música são evidentes em cada batida e melodia que ele produz.
           </p>
          <h2>Siga Daluz nas redes sociais</h2>
          <div className="insta-section-daluz">
              <a  href="https://www.instagram.com/henriquedaluz/">
              <FaInstagramSquare size={80} />     
              </a> 
              <a  href="https://www.instagram.com/cherubinimusic/">
              <FaTwitter size={80} />     
              </a>
              <a  href="https://www.instagram.com/cherubinimusic/">
              <FaTiktok size={80} />     
              </a>
            </div>
        </div>
      </div>
      <div className="div-pagina-shows">
        <div>
            <h1>Shows Antigos</h1>
          </div>
         <ul className="lista-toda-show">
        {ShowsDataNew.map((show) => (
          <li>
            <h2>{show.nome}</h2>
            <p>Data: {show.data}</p>
            <p>Artista: {show.artistas}</p>
            <img 
            className="imagemShowInterna"
            src={show.imagem}
             />
          </li>
        ))}
        </ul>
      </div>
    </div>
    
  );
}

export default Sobre;
