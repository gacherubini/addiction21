import { Link } from "react-router-dom"

const img = "public/addLogo.png"

function MenuHeader() {
    return( 
      <nav >
        <div className="addictionHomeImage">
            <Link to="/"><img width={200} src={img}/></Link>
        </div>
        <ul>
          <li>
            <Link  className = "sobre" to="/sobre">Sobre </Link>
          </li>
          <li>
            <Link  className = "musica" to="/musica">Nossa música</Link>
          </li>
          <li>
            <Link  className = "contato" to="/contato">Nos envie uma mensagem</Link>
          </li>
        </ul> 
      </nav>
    )
  }
  
  export default MenuHeader
  