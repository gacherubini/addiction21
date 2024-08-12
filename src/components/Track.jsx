import { FaYoutube } from "react-icons/fa";
import { SiBeatport } from "react-icons/si";
import { BsSpotify } from "react-icons/bs";


function Track(props) {
  return (
      <div className="col-xs-6 col-sm-3 col-lg-2 track">
        <div className="track-content track-content-faixa">
          <img className="track-content-image" src={props.imagem}/>
          <p className="track-content-title"> {props.nome} </p>
          <p className="track-content-artist"> {props.artistas} </p>
          <p className="track-content-label"> {props.label} </p>
          
          <div className="track-social-media">
            <a href="#">
                <BsSpotify className="spotify" size={25} />
              </a>
              <a href="#">
                <FaYoutube className="youtube" size={25} />
              </a>
              <a href="#">
                <SiBeatport className="beatport" size={25} />
              </a>
          </div>
        </div>
      </div>
    )
  }
  
  
  export default Track



