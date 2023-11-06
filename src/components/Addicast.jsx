function Addicast(props) {
  return (
      <div class="col-xs-6 col-sm-3 col-lg-2 addicast">
        <div class="addicast-content">
          <img className="addicast-content-image" src={props.imagem}/>
          <p className="addicast-content-title"> {props.nome} </p>
          <p className="addicast-content-artist"> {props.artistas} </p>
          <p className="addicast-content-label"> {props.label} </p>
        </div>
      </div>
    )
  }
  
  
  export default Addicast



  // class Addicast extends React.Component {
  //   render() {
  //     return <div class="col-xs-6 col-sm-3 col-lg-2 addicast">
  //     <div class="addicast-content">
  //       <img className="addicast-content-image" src="https://geo-media.beatport.com/image_size/250x250/feb30713-acae-443b-8c60-1cc7a9b73044.jpg" alt="Imagem do item da lista do Addicast"/>
  //       <p className="addicast-content-title"> title </p>
  //       <p className="addicast-content-artist"> artist </p>
  //       <p className="addicast-content-label"> label </p>
  //     </div>
  //   </div>;
  //   }
  // }


