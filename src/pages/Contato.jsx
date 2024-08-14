import { useRef, useState } from "react";
import 'semantic-ui-css/semantic.min.css';
import "./Contato.css";

function Contato() {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState('');

  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('http://localhost:3000/contato', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (response.ok) {
        setStatusMessage('Mensagem enviada com sucesso!');
      } else {
        setStatusMessage(`Erro ao enviar mensagem: ${result.error}`);
      }
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      setStatusMessage('Erro ao enviar mensagem.');
    }

    e.target.reset();
  };

  return (
      <div className='ContactForm'>
        <h1>Fale Conosco</h1>
        {statusMessage && <p>{statusMessage}</p>}
        <div className="div-form">
          <form ref={form} onSubmit={sendEmail} className="col">
            <div className="form-group">
              <label htmlFor="user_name">Nome Artístico</label>
              <input
                  type="text"
                  placeholder='Digite seu nome'
                  name="user_name"
                  id="user_name"
                  className='input'
                  required
              />
            </div>
            <div className="form-group">
              <label htmlFor="user_email">E-mail</label>
              <input
                  type="email"
                  placeholder='Digite seu email'
                  name="user_email"
                  id="user_email"
                  className='input'
                  required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mensagem</label>
              <textarea
                  name="message"
                  placeholder='Digite sua mensagem'
                  id="message"
                  className='input-message'
                  required
              />
            </div>
            <button className='input-button' type="submit">Enviar Mensagem</button>
          </form>
        </div>
      </div>
  );
}

export default Contato;
