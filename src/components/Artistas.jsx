import {FaInstagramSquare, FaSoundcloud, FaYoutube} from "react-icons/fa"
import {AiFillInstagram} from "react-icons/ai"
import React , { useEffect, useState } from "react";

const gui = "public/guilherme.jpg";
const daluz = "public/daluz.jpg";
const lorenzet = "public/lorenzet.jpg";
const doug = "public/doug.jpg";

const artistas = [
    {nome: "cherubini", img: {gui}, descricao:"Cherubini, é um visionário da música eletrônica. Com sua habilidade excepcional para criar paisagens sonoras complexas e emotivas, ele é o responsável por boa parte do som distinto do Eletrônica Addiction21. Sua jornada na música eletrônica começou cedo, e desde então ele tem explorado os limites do som, fundindo elementos de diferentes gêneros musicais para criar algo verdadeiramente único. Seus anos de experiência e paixão pela música são evidentes em cada batida e melodia que ele produz.", 
    insta: "https://www.instagram.com/cherubinimusic/", soundcloud: "https://www.instagram.com/cherubinimusic/", youtube: "https://www.instagram.com/cherubinimusic/"},
    {nome: "Da luz", img: {daluz}, descricao:"Da luz, é um visionário da música eletrônica.  Com sua habilidade excepcional para criar paisagens sonoras complexas e emotivas, ele é o responsável por boa parte do som distinto do Eletrônica Addiction21. Sua jornada na música eletrônica começou cedo, e desde então ele tem explorado os limites do som, fundindo elementos de diferentes gêneros musicais para criar algo verdadeiramente único. Seus anos de experiência e paixão pela música são evidentes em cada batida e melodia que ele produz.",
     insta: "https://www.instagram.com/cherubinimusic/", soundcloud: "https://www.instagram.com/cherubinimusic/", youtube: "https://www.instagram.com/cherubinimusic/"},
    {nome: "Lorenzet", img: {lorenzet}, descricao:"Lorenzet, é um visionário da música eletrônica.  Com sua habilidade excepcional para criar paisagens sonoras complexas e emotivas, ele é o responsável por boa parte do som distinto do Eletrônica Addiction21. Sua jornada na música eletrônica começou cedo, e desde então ele tem explorado os limites do som, fundindo elementos de diferentes gêneros musicais para criar algo verdadeiramente único. Seus anos de experiência e paixão pela música são evidentes em cada batida e melodia que ele produz.",
     insta: "https://www.instagram.com/cherubinimusic/", soundcloud: "https://www.instagram.com/cherubinimusic/", youtube: "https://www.instagram.com/cherubinimusic/"},
    {nome: "Doug", img: {doug}, descricao:"Doug, é um visionário da música eletrônica.  Com sua habilidade excepcional para criar paisagens sonoras complexas e emotivas, ele é o responsável por boa parte do som distinto do Eletrônica Addiction21. Sua jornada na música eletrônica começou cedo, e desde então ele tem explorado os limites do som, fundindo elementos de diferentes gêneros musicais para criar algo verdadeiramente único. Seus anos de experiência e paixão pela música são evidentes em cada batida e melodia que ele produz.",
     insta: "https://www.instagram.com/cherubinimusic/", soundcloud: "https://www.instagram.com/cherubinimusic/", youtube: "https://www.instagram.com/cherubinimusic/"},

]



const Artistas = () => {
  return (
<div className="author-section">
        <div className="author">
          <h2>Cherubini</h2>
          <img width={300} src={gui} alt="Guilherme Cherubini" />
          <p>
          Cherubini, é um visionário da música eletrônica. Com sua habilidade excepcional para criar paisagens sonoras complexas e emotivas, ele é o responsável por boa parte do som distinto do Eletrônica Addiction21. Sua jornada na música eletrônica começou cedo, e desde então ele tem explorado os limites do som, fundindo elementos de diferentes gêneros musicais para criar algo verdadeiramente único. Seus anos de experiência e paixão pela música são evidentes em cada batida e melodia que ele produz.
          </p>
                <h2 >Siga Cherubini nas redes sociais  </h2>
          <div className="socialMedia-section">
              <a  href="https://www.instagram.com/cherubinimusic/">
              <AiFillInstagram className="instagram" size={40} />     
              </a> 
              <a  className="soundcloud" href="https://www.instagram.com/cherubinimusic/">
              <FaSoundcloud className="soundcloud" size={40} />     
              </a>
              <a  className="youtube" href="https://www.instagram.com/cherubinimusic/">
              <FaYoutube className="youtube" size={40} />     
              </a>
            </div>
        </div>
        <div className="author">
          <h2>Daluz</h2>
          <img  width={300} src={daluz}  />
            <p>
            Da luz, é um visionário da música eletrônica.  Com sua habilidade excepcional para criar paisagens sonoras complexas e emotivas, ele é o responsável por boa parte do som distinto do Eletrônica Addiction21. Sua jornada na música eletrônica começou cedo, e desde então ele tem explorado os limites do som, fundindo elementos de diferentes gêneros musicais para criar algo verdadeiramente único. Seus anos de experiência e paixão pela música são evidentes em cada batida e melodia que ele produz.
           </p>
          <h2>Siga Daluz nas redes sociais</h2>
          <div className="socialMedia-section">
          <a  href="https://www.instagram.com/cherubinimusic/">
              <AiFillInstagram className="instagram" size={40} />     
              </a> 
              <a  className="soundcloud" href="https://www.instagram.com/cherubinimusic/">
              <FaSoundcloud className="soundcloud" size={40} />     
              </a>
              <a  className="youtube" href="https://www.instagram.com/cherubinimusic/">
              <FaYoutube className="youtube" size={40} />     
              </a>
            </div>
        </div>
        <div className="author">
          <h2>Lorenzet</h2>
          <img  width={300} src={lorenzet} height={300}  />
            <p>
            Da luz, é um visionário da música eletrônica.  Com sua habilidade excepcional para criar paisagens sonoras complexas e emotivas, ele é o responsável por boa parte do som distinto do Eletrônica Addiction21. Sua jornada na música eletrônica começou cedo, e desde então ele tem explorado os limites do som, fundindo elementos de diferentes gêneros musicais para criar algo verdadeiramente único. Seus anos de experiência e paixão pela música são evidentes em cada batida e melodia que ele produz.
           </p>
          <h2>Siga Daluz nas redes sociais</h2>
          <div className="socialMedia-section">
              <a  className="instagram" href="https://www.instagram.com/henriquedaluz/">
              <AiFillInstagram size={40} />     
              </a> 
              <a  className="soundcloud" href="https://www.instagram.com/cherubinimusic/">
              <FaSoundcloud  size={40} />     
              </a>
              <a  className="youtube" href="https://www.instagram.com/cherubinimusic/">
              <FaYoutube size={40} />     
              </a>
            </div>
        </div>
        <div className="author">
          <h2>Doug</h2>
          <img  width={300} src={doug}/>
            <p>
            Da luz, é um visionário da música eletrônica.  Com sua habilidade excepcional para criar paisagens sonoras complexas e emotivas, ele é o responsável por boa parte do som distinto do Eletrônica Addiction21. Sua jornada na música eletrônica começou cedo, e desde então ele tem explorado os limites do som, fundindo elementos de diferentes gêneros musicais para criar algo verdadeiramente único. Seus anos de experiência e paixão pela música são evidentes em cada batida e melodia que ele produz.
           </p>
          <h2>Siga Daluz nas redes sociais</h2>
          <div className="socialMedia-section">
              <a  className="instagram" href="https://www.instagram.com/henriquedaluz/">
              <AiFillInstagram size={40} />     
              </a> 
              <a   className="soundcloud" href="https://www.instagram.com/cherubinimusic/">
              <FaSoundcloud  size={40} />     
              </a>
              <a   className="youtube" href="https://www.instagram.com/cherubinimusic/">
              <FaYoutube size={40} />     
              </a>
            </div>
        </div>
      </div> 
       )
}

export default Artistas