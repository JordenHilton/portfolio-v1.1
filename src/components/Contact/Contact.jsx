import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, btn, email } = contact;

  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
          <form className = "form" name = "contact" data-netlify = "true" data-netlify-honeypot= "bot-field" method = "post">

      
            <input 
            name="name"
            type="text" 
            placeholder="name"/>
            
            <input 
            name="email"
            type="email" placeholder="name@name.com"/>
            
            <textarea name="message" type="text" placeholder="Message"></textarea>

            <button type="submit">Submit</button>

          </form>
      </Container>
    </section>
  );
};

export default Contact;
