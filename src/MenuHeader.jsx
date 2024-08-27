import { useState } from 'react';

function MenuHeader() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header>
            <nav>
                <div className="addictionHomeImage">
                    <a href="#home"><img className="HomeImagem" width={200} src="/addLogo.png" alt="Home" /></a>
                </div>
                <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className={menuOpen ? 'open' : ''}>
                    <li>
                        <a className="equipe" href="#news">News</a>
                    </li>
                    <li>
                        <a className="contato" href="#footer">Nos envie uma mensagem</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MenuHeader;
