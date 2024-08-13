import MenuHeader from './MenuHeader';
import MenuFooter from './MenuFooter';

import Home from './pages/Home';
import Equipe from './pages/Equipe';
import Contato from './pages/Contato';

import './styles/app.css';

function App() {
    return (
        <div>
            <header>
                <MenuHeader />
            </header>
            <section id="galeria" className="section galeria-section">
                <img src="public/newImage.png" alt="Descrição da imagem"/>
            </section>

            <section id="home" className="section home-section">
                <Home/>
            </section>

            <section id="equipe" className="section equipe-section">
                <Equipe/>
            </section>

                <section id="contato" className="section contato-section">
                    <Contato />
                </section>
            <footer>
                <MenuFooter />
            </footer>
        </div>
    );
}

export default App;
