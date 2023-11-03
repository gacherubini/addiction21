import React, { useRef } from "react";
import 'semantic-ui-css/semantic.min.css';
import emailjs from '@emailjs/browser';

function Contato() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_85dnmda', 'template_58geimq', e.target, 'tRzMuMPJLupg7ySmv')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset();
  };

  return (
    <div className='ContactForm'>
      <h1>Nos envie uma mensagem</h1>
      <div className="div-form">
        <form ref={form} onSubmit={sendEmail} className="col">
          <div className="form-group">
            <label htmlFor="user_name">Nome Artístico</label>
            <input
              type="text"
              name="user_name"
              id="user_name"
              className='input'
            />
          </div>
          <div className="form-group">
            <label htmlFor="user_email">E-mail</label>
            <input
              type="email"
              name="user_email"
              id="user_email"
              className='input'
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensagem</label>
            <textarea
              name="message"
              id="message"
              className='input-message'
            />
          </div>
          <button className='input-button' type="submit">Enviar Mensagem</button>
        </form>
      </div>
    </div>
  );
}

export default Contato;
