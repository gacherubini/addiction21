import { useEffect, useState } from "react";
import "./News.css";
import NewsItem from "../components/NewsItem";

function NewsPage() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [news, setNews] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;

    useEffect(() => {
        fetch('http://localhost:3000/news')
            .then((response) => response.json())
            .then((data) => {
                setNews(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, []);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = news.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    if (loading) return <img className="imageLoading" src={"public/loading.gif"} alt="Loading..."/>;
    if (error) return <p className="errorMensagem">Erro ao carregar as notícias.</p>;

    return (
        <div className="div-pagina-news">
            <div className="row coluna-news">
                <div className="div-lista-news"
                     style={{
                         width: "100%",
                         overflowX: "scroll",
                         scrollBehavior: "smooth",
                     }}>
                    {currentItems.map((newsItem) => (
                        <NewsItem
                            key={newsItem.id}
                            id={newsItem.id}
                            imagem={newsItem.imageUrl}
                            descricao={newsItem.content}
                            link={newsItem.externalLink}
                        />
                    ))}
                </div>
                <div className="pagination">
                    {[...Array(Math.ceil(news.length / itemsPerPage)).keys()].map(number => (
                        <button key={number + 1} onClick={() => paginate(number + 1)}>
                            {number + 1}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default NewsPage;
