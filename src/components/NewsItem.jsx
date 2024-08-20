function NewsItem(props) {
    const { imagem, descricao, link } = props;

    return (
        <div className="col-xs-12 col-sm-4 col-lg-4 track">
            <div className="track-content track-content-news">
                <img className="track-content-image" src={imagem} />
                <p className="track-content-descricao">{descricao || 'Sem descrição'}</p>
                {link && <a href={link} className="track-content-link">Leia mais</a>}
            </div>
        </div>
    );
}

export default NewsItem;
