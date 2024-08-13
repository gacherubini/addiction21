import { FaSoundcloud, FaYoutube, FaInstagram } from "react-icons/fa";

const gui = "public/guilherme.jpg";
const daluz = "public/daluz.jpg";
const lorenzet = "public/lorenzet.jpg";
const doug = "public/doug.jpg";

const artistas = [
  {
    nome: "Cherubini",
    img: gui,
    descricao: "Cherubini é o arquiteto sonoro da Eletrônica Addiction21, combinando gêneros para criar sons únicos e emotivos.",
    insta: "https://www.instagram.com/cherubinimusic/",
    soundcloud: "https://www.instagram.com/cherubinimusic/",
    youtube: "https://www.instagram.com/cherubinimusic/",
    beatport: "https://www.instagram.com/cherubinimusic/",
    spotify:"https://www.instagram.com/cherubinimusic/"
  },
  {
    nome: "Da Luz",
    img: daluz,
    descricao: "Da Luz é mestre em criar paisagens sonoras que definem o som único da Eletrônica Addiction21.",
    insta: "https://www.instagram.com/cherubinimusic/",
    soundcloud: "https://www.instagram.com/cherubinimusic/",
    youtube: "https://www.instagram.com/cherubinimusic/",
    beatport: "https://www.instagram.com/cherubinimusic/",
    spotify:"https://www.instagram.com/cherubinimusic/"
  },
  {
    nome: "Lorenzet",
    img: lorenzet,
    descricao: "Lorenzet funde diversos estilos para criar composições eletrônicas inovadoras e marcantes.",
    insta: "https://www.instagram.com/cherubinimusic/",
    soundcloud: "https://www.instagram.com/cherubinimusic/",
    youtube: "https://www.instagram.com/cherubinimusic/",
    beatport: "https://www.instagram.com/cherubinimusic/",
    spotify:"https://www.instagram.com/cherubinimusic/"
  },
  {
    nome: "Doug",
    img: doug,
    descricao: "Doug traz uma abordagem única à Eletrônica Addiction21, explorando novas fronteiras sonoras.",
    insta: "https://www.instagram.com/cherubinimusic/",
    soundcloud: "https://www.instagram.com/cherubinimusic/",
    youtube: "https://www.instagram.com/cherubinimusic/",
    beatport: "https://www.instagram.com/cherubinimusic/",
    spotify:"https://www.instagram.com/cherubinimusic/"
  },
];


const Artistas = () => {
  return (
    <div className="author-section">
      {artistas.map((artista, index) => (
        <div className="author" key={index}>
          <h2>{artista.nome}</h2>
          <img src={artista.img} alt={artista.nome} />
          <p>{artista.descricao}</p>
          <div className="socialMedia-section">
            <a href={artista.insta}>
              <FaInstagram className="instagram" size={40} />
            </a>
            <a className="soundcloud" href={artista.soundcloud}>
              <FaSoundcloud className="soundcloud" size={40} />
            </a>
            <a className="youtube" href={artista.youtube}>
              <FaYoutube className="youtube" size={40} />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Artistas;
