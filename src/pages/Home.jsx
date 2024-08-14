import { useEffect, useState} from "react";
import "./Home.css"
import Constants from "../Constants";
import Addicast from "../components/Addicast";

function Home() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [addicasts, setAddicast] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;

    useEffect(() => {
        fetch('http://localhost:3000/addicast')
            .then((response) => response.json())
            .then((data) => {
                setAddicast(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, []);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = addicasts.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    if (loading) return <img className="imageLoading" src={"public/loading.gif"}/>;
    if (error) return <p className="errorMensagem">{Constants.GENERIC_ERROR_MESSAGE}</p>;

    return (
        <div className="div-pagina-home">
            <div className="row coluna-addicast">
                <h2>Ultimas Músicas:</h2>
                <div className="div-lista-addicast"
                     style={{
                         width: "100%",
                         overflowX: "scroll",
                         scrollBehavior: "smooth",
                     }}>
                    {currentItems.map((addicast) => (
                        <Addicast
                            key={addicast.id}
                            id={addicast.id}
                            imagem={addicast.artwork_url}
                            nome={addicast.title}
                            label="Addiction 21"
                            link={addicast.permalink_url}
                        />
                    ))}x
                </div>
                <div className="pagination">
                    {[...Array(Math.ceil(addicasts.length / itemsPerPage)).keys()].map(number => (
                        <button key={number + 1} onClick={() => paginate(number + 1)}>
                            {number + 1}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home;
