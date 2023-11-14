import { Link } from "react-router-dom"


function MenuHeader() {
    return( 
      <nav >
        <div className="addictionHomeImage">
            <Link to="/"><img className="HomeImagem" width={200} src="../../public/addLogo.png"/></Link>
        </div>
        <ul>
          <li>
            <Link  className = "equipe" to="/equipe">Equipe </Link>
          </li>
          <li>
            <Link  className = "contato" to="/contato">Nos envie uma mensagem</Link>
          </li>
        </ul> 
      </nav>
    )
  }
  
  export default MenuHeader
  