import React from 'react';
import './Sobre.css';

function Sobre() {
    return (
        <div className="sobre-container">
            <header className="sobre-header">
                <h1>Sobre Nós</h1>
                <p>Saiba mais sobre nossa missão, visão e história.</p>
            </header>

            <section className="sobre-section">
                <h2>Nossa Missão</h2>
                <p>
                    Nossa missão é fornecer experiências únicas e memoráveis através da nossa plataforma.
                    Trabalhamos incansavelmente para inovar e trazer o melhor para nossos usuários.
                </p>
            </section>

            <section className="sobre-section">
                <h2>Nosso Time</h2>
                <p>
                    Somos uma equipe diversificada de profissionais apaixonados pelo que fazemos.
                    Juntos, buscamos criar um impacto positivo no mundo através da tecnologia.
                </p>
            </section>

            <section className="sobre-section">
                <h2>Nossa História</h2>
                <p>
                    Fundada em 2021, nossa empresa cresceu rapidamente, alcançando marcos significativos
                    em sua jornada. Desde o início, nos comprometemos com a excelência e a inovação.
                </p>
            </section>

            <footer className="sobre-footer">
                <p>&copy; 2024 Nome da Empresa. Todos os direitos reservados.</p>
            </footer>
        </div>
    );
}

export default Sobre;
