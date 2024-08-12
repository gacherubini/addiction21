
function Addicast(props) {
    const { imagem, nome, label } = props;

    return (
        <div className="col-xs-6 col-sm-3 col-lg-2 track">
                <div className="track-content track-content-addicast">
                    <img className="track-content-image" src={imagem} alt={nome || 'Addicast Image'} />
                    <p className="track-content-title">{nome || 'Untitled'}</p>
                    <p className="track-content-artist">{label || 'Unknown Label'}</p>
                </div>
        </div>
    );
}

export default Addicast;
