function NewsItem(props) {
    const { imagem, descricao, link } = props;

    return (
        <div className="track">
            <img className="track-content-image" src={imagem} alt="Imagem da notícia" />
            <div className="track-content">
                <p className="track-content-descricao">{descricao || 'Sem descrição'}</p>
                {link && <a href={link} className="track-content-link">Leia mais</a>}
            </div>
        </div>
    );
}

export default NewsItem;
