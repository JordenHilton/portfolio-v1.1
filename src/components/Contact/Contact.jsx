import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Form } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, btn, email } = contact;

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }


  return (
    <section id="contact">
      <Container>
        <Form 
        className = "form" 
        name = "contact" 
        data-netlify = "true" data-netlify-honeypot= "bot-field" method = "post" 
        onSubmit="{handleSubmit}">
        <Title title="Contact" />
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out: <input name="bot-field" onChange={handleChange} />
          </label>
          </p>
            
            <input 
            name="name" 
            type="text"
            placeholder="name"
    
            />
            
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
