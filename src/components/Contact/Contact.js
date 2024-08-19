import React, { useState } from 'react';
import styled from "styled-components/macro";
import {HeaderSection} from '../Common/Header';
import {TButton} from '../Common/Header';
import './Contact.css';
import { post } from 'aws-amplify/api';

async function POSTsendEmail(data) {
  try {
    const restOperation = post({
      apiName: 'KGContactForm',
      path: '/items',
      options: {
        body: data
      }
    });

    const { body } = await restOperation.response;
    const response = await body.json();

    console.log('POST call succeeded');
    console.log(response);
  } catch (e) {
    console.log('POST call failed: ', JSON.parse(e.response.body));
  }
}

const ContactSection = styled.section`
    margin-top: 0px;
`;

function ContactPage() {
    const [first_name, setFName] = useState('');
    const [last_name, setLName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    
    const handleSubmit = async (e) => {
       e.preventDefault();

       const data = {
        'first_name': first_name,
        'last_name': last_name,
        'email': email,
        'message': message,
      };

       const response = await POSTsendEmail(data);
       console.log(response)

       console.log('Form submitted:', { first_name, last_name, email, message });
     };

    return (
      <HeaderSection>
        <ContactSection>
          <div className='header-div'>
            <h1 className='header'>Contact Us Today:</h1>
            <p className='subpage'>Your satisfaction matters to us. Contact us with any custom orders.</p>
          </div>
          <form onSubmit={handleSubmit} className='contact-body'>
            <div className='contact-element'>
              <label htmlFor="first_name">Name:</label>
              <input type="text" id="first_name" autoComplete="given-name" placeholder='First'
                value={first_name} onChange={(e) => setFName(e.target.value)} className='contact-input'/>
            </div>
            <div className='contact-element'>
              <label htmlFor="last_name"></label>
              <input type="text" id="last_name" autoComplete="family-name" placeholder='Last'
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
