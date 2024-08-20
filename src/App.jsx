import MenuHeader from './MenuHeader';
import MenuFooter from './MenuFooter';

import Home from './pages/Home';
import Contato from './pages/Contato';
import News from './pages/News';
import SpotifyEmbed from './pages/SpotifyEmbed.jsx';
import SoundCloudEmbed from './pages/SoundCloudEmbed.jsx';




import './styles/app.css';

function App() {
    return (
        <div>
            <header>
                <MenuHeader/>
            </header>
            <section id="galeria" className="section galeria-section">
                <img src="/newImage.png" alt="Descrição da imagem"/>
            </section>

            <section id="home" className="section home-section">
                <Home/>
            </section>

            <section id="embed-section" className="section embed-section">
                <SpotifyEmbed/>
            </section>

            <section id="embed-section" className="section embed-section">
                <SoundCloudEmbed/>
            </section>

            <section id="news" className="section news-section">
                <News/>
            </section>

            <section id="contato" className="section contato-section">
                <Contato/>
            </section>
            <footer>
                <MenuFooter/>
            </footer>
        </div>
    );
}

export default App;
