function Addicast(props) {
  return (
      <div class="col-xs-6 col-sm-3 col-lg-2 track">
        <a href={props.link} target="_blank" rel="noopener noreferrer">
        <div class="track-content track-content-addicast">
          <img className="track-content-image" src={props.imagem}/>
          <p className="track-content-title"> {props.nome} </p>
          <p className="track-content-artist"> {props.artistas} </p>
        </div>
        </a>
      </div>
    )
  }
  
  
  export default Addicast


