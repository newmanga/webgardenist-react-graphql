import React, { useState } from 'react';
import styled, {css} from "styled-components/macro";
import {HeaderSection} from '../Common/Header';
import {TButton} from '../Common/Header';
import './Contact.css';

const ContactSection = styled.section`
    margin-top: 50px;
`;

function ContactPage() {
    const [first_name, setFName] = useState('');
    const [last_name, setLName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    
    const handleSubmit = (e) => {
       e.preventDefault();
       // Here you would typically handle form submission, e.g., sending data to a server
       console.log('Form submitted:', { first_name, last_name, email, message });
     };

    return (
      <HeaderSection>
        <ContactSection>
          <h1 className='header'>Contact Us</h1>
          <form onSubmit={handleSubmit} className='contact-body'>
            <div className='contact-element'>
              <label htmlFor="first_name">First Name:</label>
              <input type="text" id="first_name" autoComplete="given-name" 
                value={first_name} onChange={(e) => setFName(e.target.value)} className='contact-input'/>
            </div>
            <div className='contact-element'>
              <label htmlFor="last_name">Last Name:</label>
              <input type="text" id="last_name" autoComplete="family-name"
                value={last_name} onChange={(e) => setLName(e.target.value)} className='contact-input'/>
            </div>
            <div className='contact-element'>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" autoComplete="email"
                value={email} onChange={(e) => setEmail(e.target.value)} className='contact-input'/>
            </div>
            <div className='contact-element'>
              <label htmlFor="message">Message:</label>
              <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} className='contact-input-message'/>
            </div>
            <TButton type="submit">Send</TButton>
    
          </form>
        </ContactSection>
      </HeaderSection>
      );
}

export default ContactPage;
