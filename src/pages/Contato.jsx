import React , { useRef } from "react";
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
      e.target.reset()
  };

  return (
    <div className='ContactForm'>
      <h1>Contato</h1>
      <form ref={form} onSubmit={sendEmail} className="col">
      <label>Name</label>
      <input type="text" name="user_name" className='input'/>
      <label>Email</label>
      <input type="email" name="user_email" className='input'/>
      <label>Message</label>
      <textarea name="message" className='input-message'/>
      <button className='input-button'> Submit </button>

    </form>
    
           {/* <form ref={form} onSubmit={sendEmail}>
                  <div className='col'>
                    <input
                      className='input'
                      type='text'
                      name="user_name"
                      placeholder='Name'
                    ></input>
                  </div>
                  <div className='col'>
                    <input
                      type='email'
                      name="user_email"
                      className='input'
                      placeholder='Email address'
                    ></input>
                  </div>
                  <div className='col'>
                    <textarea
                      rows={3}
                      name='message'
                      className='input-message'
                      placeholder='Message'
                    ></textarea>
                  </div>
                <button className='input-button'> Submit </button>
              </form> */}
    </div>
  );
}

export default Contato;
