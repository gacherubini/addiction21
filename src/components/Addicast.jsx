function Addicast(props) {
    const { imagem, nome, label } = props;

    return (
        <div className="col-xs-12 col-sm-4 col-lg-4 track"> {/* Ocupa 1/3 da linha */}
            <div className="track-content track-content-addicast">
                <img className="track-content-image" src={imagem} alt={nome || 'Addicast Image'} />
                <p className="track-content-title">{nome || 'Untitled'}</p>
                <p className="track-content-artist">{label || 'Unknown Label'}</p>
            </div>
        </div>
    );
}

export default Addicast;
