import { FaSoundcloud, FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";


function MenuFooter() {
    return( 
      <footer>
        <div>
        <div className="socialMedia-section-footer">
            <a href="https://www.instagram.com/cherubinimusic/">
              <AiFillInstagram className="instagram" size={40} />
            </a>
            <a href="https://www.instagram.com/cherubinimusic/">
              <FaSoundcloud className="soundcloud" size={40} />
            </a>
            <a href="https://www.instagram.com/cherubinimusic/">
              <FaYoutube className="youtube" size={40} />
            </a>
          </div>
          <br />
        </div>
       <p className="mensagemFooter">Please send your Demo or Podcast submissions to: </p>
       <p className="mensagemFooter"><a className="linkEmail" href="mailto:addictionlabel21@gmail.com" >addictionlabel21@gmail.com</a></p>
       <p className="mensagemFooter">Private Soundcloud links preferred.</p>
      </footer>
    )
  }
  
  export default MenuFooter
  