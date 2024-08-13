import "./Equipe.css"; // Importe seu arquivo CSS para aplicar estilos
import Artistas from "../components/Artistas";


function Sobre() {
  return (
    <div className="div-pagina-sobre">
            <h1>Nossa Equipe</h1>
          <Artistas/>
    </div>
    
  );
}

export default Sobre;
