function MenuHeader() {
    return (
        <nav>
            <div className="addictionHomeImage">
                <a href="#home"><img className="HomeImagem" width={200} src="../../public/addLogo.png" alt="Home" /></a>
            </div>
            <ul>
                <li>
                    <a className="equipe" href="#equipe">Equipe</a>
                </li>
                <li>
                    <a className="contato" href="#contato">Nos envie uma mensagem</a>
                </li>
            </ul>
        </nav>
    );
}

export default MenuHeader;
