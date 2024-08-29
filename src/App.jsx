import MenuHeader from './MenuHeader';
import MenuFooter from './MenuFooter';

import Sobre from './pages/Sobre';
import News from './pages/News';
import SpotifyEmbed from './pages/SpotifyEmbed.jsx';
import './styles/app.css';

function App() {
    return (
        <div>
            <header>
                <MenuHeader/>
            </header>
            <section id="galeria" className="section galeria-section">
                <img src="/headerImage.png" alt="Descrição da imagem"/>
            </section>

            <section id="sobre" className="section sobre-section">
                <Sobre/>
            </section>

            <section id="news" className="section news-section">
                <News/>
            </section>

            <section id="embed-section" className="section embed-section">
                <SpotifyEmbed/>
            </section>
            <footer id="footer">
                <MenuFooter/>
            </footer>
        </div>
    );
}

export default App;
