function NewsItem(props) {
    const { imagem, descricao, link, tittle } = props;

    return (
        <div className="track">
            <img className="track-content-image" src={imagem} alt="Imagem da notícia" />
            <div className="track-content">
                <h1 className="track-content-titulo">{tittle || 'Sem Titulo'}</h1>
                <p className="track-content-descricao">{descricao || 'Sem descrição'}</p>
                {link && <a href={link} className="track-content-link">Leia mais</a>}
            </div>
        </div>
    );
}

export default NewsItem;
