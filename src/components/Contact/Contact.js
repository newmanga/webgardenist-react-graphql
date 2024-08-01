import React, { useState } from 'react';
import styled, {css} from "styled-components/macro";

const ContactSection = styled.section`
    margin-top: 130px;
`;

function ContactPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    
    const handleSubmit = (e) => {
       e.preventDefault();
       // Here you would typically handle form submission, e.g., sending data to a server
       console.log('Form submitted:', { name, email, message });
     };

    return (
        <ContactSection>
          <h1>Contact Us</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} />
            </div>
            <button type="submit">Send</button>
    
          </form>
        </ContactSection>
      );
}

export default ContactPage;
