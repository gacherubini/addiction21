import {Link} from 'react-router-dom';

function Addicast(props) {
  return (
      <div class="col-xs-6 col-sm-3 col-lg-2 track">
        <Link to = {`/addicastDetails/${props.id}`}>
        <div class="track-content track-content-addicast">
          <img className="track-content-image" src={props.imagem}/>
          <p className="track-content-title"> {props.nome} </p>
          <p className="track-content-artist"> {props.label} </p>
        </div>
        </Link>
      </div>
    )
  }
  
  
  export default Addicast


