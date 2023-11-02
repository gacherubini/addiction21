import {FaInstagramSquare, FaTwitter, FaTiktok} from "react-icons/fa"
import React , { useEffect, useState } from "react";
import Constants from "../Constants";
import "./Artistas.css"; // Importe seu arquivo CSS para aplicar estilos

const gui = "public/guilherme.jpg";
const daluz = "public/daluz.jpg";

function Sobre() {
 
  
  return (
    <div className="div-pagina-home">
       <div>
            <h1>Artistas</h1>
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
    </div>
    
  );
}

export default Sobre;
