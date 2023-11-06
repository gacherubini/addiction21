function Addicast(props) {
  return (
      <div class="col-xs-6 col-sm-3 col-lg-2 track">
        <div class="track-content track-content-addicast">
          <img className="track-content-image" src={props.imagem}/>
          <p className="track-content-title"> {props.nome} </p>
          <p className="track-content-artist"> {props.artistas} </p>
        </div>
      </div>
    )
  }
  
  
  export default Addicast



  // class Addicast extends React.Component {
  //   render() {
  //     return <div class="col-xs-6 col-sm-3 col-lg-2 track">
  //     <div class="track-content">
  //       <img className="track-content-image" src="https://geo-media.beatport.com/image_size/250x250/feb30713-acae-443b-8c60-1cc7a9b73044.jpg" alt="Imagem do item da lista do Addicast"/>
  //       <p className="track-content-title"> title </p>
  //       <p className="track-content-artist"> artist </p>
  //       <p className="track-content-label"> label </p>
  //     </div>
  //   </div>;
  //   }
  // }


