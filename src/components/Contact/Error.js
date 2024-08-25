import React from 'react';
import styled from "styled-components/macro";
import {HeaderSection} from '../Common/Header';
import {TButton} from '../Common/Header';
import '../Thank/Thank.css';

const ThankYouSection = styled.section`
    padding-top: 50px;
`;

const ErrorContactPage = () => { 
    return (
      <HeaderSection>
        <ThankYouSection>
                <div className="thank-message">
                  <h2>Ohh no!</h2>
                </div>
                <div className='thank-body'>
                  <p>Something went wrong while sending the message! Please contact kindgardenist@gmail.com! We'll get back to you as soon as possible.<p/>

                  {/* <p>Want to help us improve? Take our quick survey and enjoy a whopping <b>50% off</b> your next purchase!</p>
                  <a href='\survey'><TButton>Take Survey</TButton></a>

                  <p>Check out these recommended products.</p>
                  <TButton>See Products</TButton>
                  <p>Thank you for being a valued customer!</p> */}
                  </p>
                </div>
        </ThankYouSection>
      </HeaderSection>
    );
  };
  
  export default ErrorContactPage;