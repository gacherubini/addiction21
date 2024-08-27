function MenuHeader() {
    return (
        <nav>
            <div className="addictionHomeImage">
                <a href="#home"><img className="HomeImagem" width={200} src="/addLogo.png" alt="Home" /></a>
            </div>
            <ul>
                <li>
                    <a className="equipe" href="#news">News</a>
                </li>
                <li>
                    <a className="contato" href="#footer">Contato</a>
                </li>
            </ul>
        </nav>
    );
}

export default MenuHeader;
