import { FaSoundcloud, FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const gui = "public/guilherme.jpg";
const daluz = "public/daluz.jpg";
const lorenzet = "public/lorenzet.jpg";
const doug = "public/doug.jpg";

const artistas = [
  { nome: "cherubini", img: gui, descricao: "Cherubini, é um visionário da música eletrônica. Com sua habilidade excepcional para criar paisagens sonoras complexas e emotivas, ele é o responsável por boa parte do som distinto do Eletrônica Addiction21. Sua jornada na música eletrônica começou cedo, e desde então ele tem explorado os limites do som, fundindo elementos de diferentes gêneros musicais para criar algo verdadeiramente único. Seus anos de experiência e paixão pela música são evidentes em cada batida e melodia que ele produz.", insta: "https://www.instagram.com/cherubinimusic/", soundcloud: "https://www.instagram.com/cherubinimusic/", youtube: "https://www.instagram.com/cherubinimusic/" , beatport: "https://www.instagram.com/cherubinimusic/", spotify:"https://www.instagram.com/cherubinimusic/"},
  { nome: "Da luz", img: daluz, descricao: "Da luz, é um visionário da música eletrônica.  Com sua habilidade excepcional para criar paisagens sonoras complexas e emotivas, ele é o responsável por boa parte do som distinto do Eletrônica Addiction21. Sua jornada na música eletrônica começou cedo, e desde então ele tem explorado os limites do som, fundindo elementos de diferentes gêneros musicais para criar algo verdadeiramente único. Seus anos de experiência e paixão pela música são evidentes em cada batida e melodia que ele produz.", insta: "https://www.instagram.com/cherubinimusic/", soundcloud: "https://www.instagram.com/cherubinimusic/", youtube: "https://www.instagram.com/cherubinimusic/" , beatport: "https://www.instagram.com/cherubinimusic/", spotify:"https://www.instagram.com/cherubinimusic/"},
  { nome: "Lorenzet", img: lorenzet, descricao: "Lorenzet, é um visionário da música eletrônica.  Com sua habilidade excepcional para criar paisagens sonoras complexas e emotivas, ele é o responsável por boa parte do som distinto do Eletrônica Addiction21. Sua jornada na música eletrônica começou cedo, e desde então ele tem explorado os limites do som, fundindo elementos de diferentes gêneros musicais para criar algo verdadeiramente único. Seus anos de experiência e paixão pela música são evidentes em cada batida e melodia que ele produz.", insta: "https://www.instagram.com/cherubinimusic/", soundcloud: "https://www.instagram.com/cherubinimusic/", youtube: "https://www.instagram.com/cherubinimusic/" , beatport: "https://www.instagram.com/cherubinimusic/", spotify:"https://www.instagram.com/cherubinimusic/"},
  { nome: "Doug", img: doug, descricao: "Doug, é um visionário da música eletrônica.  Com sua habilidade excepcional para criar paisagens sonoras complexas e emotivas, ele é o responsável por boa parte do som distinto do Eletrônica Addiction21. Sua jornada na música eletrônica começou cedo, e desde então ele tem explorado os limites do som, fundindo elementos de diferentes gêneros musicais para criar algo verdadeiramente único. Seus anos de experiência e paixão pela música são evidentes em cada batida e melodia que ele produz.", insta: "https://www.instagram.com/cherubinimusic/", soundcloud: "https://www.instagram.com/cherubinimusic/", youtube: "https://www.instagram.com/cherubinimusic/" , beatport: "https://www.instagram.com/cherubinimusic/", spotify:"https://www.instagram.com/cherubinimusic/"},
];

const Artistas = () => {
  return (
    <div className="author-section">
      {artistas.map((artista, index) => (
        <div className="author" key={index}>
          <h2>{artista.nome}</h2>
          <img width={230} height={230} src={artista.img} alt={artista.nome} />
          <p>{artista.descricao}</p>
          <h2>Siga {artista.nome} nas redes sociais</h2>
          <div className="socialMedia-section">
            <a href={artista.insta}>
              <AiFillInstagram className="instagram" size={40} />
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
