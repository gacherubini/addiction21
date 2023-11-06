import { FaInstagramSquare, FaSoundcloud, FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

function Track(props) {
  return (
      <div class="col-xs-6 col-sm-3 col-lg-2 track">
        <div class="track-content track-content-faixa">
          <img className="track-content-image" src={props.imagem}/>
          <p className="track-content-title"> {props.nome} </p>
          <p className="track-content-artist"> {props.artistas} </p>
          <p className="track-content-label"> {props.label} </p>
          
          <div className="track-social-media">
            <a href="#">
                <AiFillInstagram className="spotify" size={40} />
              </a>
              <a href="#">
                <FaYoutube className="youtube" size={40} />
              </a>
              <a href="#">
                <FaSoundcloud className="beatport" size={40} />
              </a>
          </div>
        </div>
      </div>
    )
  }
  
  
  export default Track



  // class track extends React.Component {
  //   render() {
  //     return <div class="col-xs-6 col-sm-3 col-lg-2 track">
  //     <div class="track-content">
  //       <img className="track-content-image" src="https://geo-media.beatport.com/image_size/250x250/feb30713-acae-443b-8c60-1cc7a9b73044.jpg" alt="Imagem do item da lista do track"/>
  //       <p className="track-content-title"> title </p>
  //       <p className="track-content-artist"> artist </p>
  //       <p className="track-content-label"> label </p>
  //     </div>
  //   </div>;
  //   }
  // }


