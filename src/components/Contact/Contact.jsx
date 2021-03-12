import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Form } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, btn, email } = contact;

  return (
    <section id="contact">
      <Container>
        <Form className = "form" name = "contact-form" data-netlify = "true" data-netlify-honeypot= "bot-field" method = "post" input-type="hidden">
        <Title title="Contact" />
            <input 
            name="name"
            type="text" 
            placeholder="name"/>
            
            <input 
            name="email"
            type="email" placeholder="email"/>
            
            <textarea name="message" type="text" placeholder="Message"></textarea>

            <button type="submit">Submit</button>

          </Form>
      </Container>
    </section>
  );
};

export default Contact;
